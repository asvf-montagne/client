import Button from '@components/atoms/Button'
import DatePicker from '@components/atoms/DatePicker'
import Input from '@components/atoms/Input'
import Select from '@components/atoms/Select'
import UploadImageInput from '@components/organisms/UploadImageInput'
import FormHelper from '@helpers/form'
import useDebounce from '@hooks/useDebounce'
import useServices from '@hooks/useServices'
import Icon from '@material-ui/core/Icon'
import {
  filesReducer,
  filesReducerActions,
  filesReducerCreateAction,
  filesReducerDefaultState,
  filesReducerNamespace,
} from '@reducers/FilesReducer'
import { diff } from 'deep-object-diff'
import arrayMutators from 'final-form-arrays'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useMemo, useReducer, useRef } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './FormCreateStory.module.css'

const EditorInput = dynamic(() => import('@components/atoms/EditorInput'), {
  ssr: false,
})

const statuses = {
  INITIAL: 'INITIAL',
  SAVING: `SAVING`,
  SAVING_IMAGES: 'SAVING_IMAGES',
  DELETE_IMAGE: `DELETE_IMAGE`,
  PUBLISHING: `PUBLISHING`,
  SAVED: 'SAVED',
}

const actionTypes = {
  SET_STATUS: 'SET_STATUS',
  SET_STORY_ID: 'SET_STORY_ID',
  SET_PUBLISHED: 'SET_PUBLISHED',
}

function reducer(state, action) {
  if (action.namespace === filesReducerNamespace)
    return { ...state, ...filesReducer(state, action) }

  switch (action.type) {
    case actionTypes.SET_STATUS:
      return { ...state, status: action.data }
    case actionTypes.SET_STORY_ID:
      return { ...state, storyId: action.data }
    case actionTypes.SET_PUBLISHED:
      return { ...state, published: action.data }
  }
}

FormStoryEditor.propTypes = {
  tags: PropTypes.array.isRequired,
  story: PropTypes.object,
  author: PropTypes.number,
}

export default function FormStoryEditor({ tags, story = {}, author }) {
  const router = useRouter()

  const options = useMemo(
    () =>
      tags.map((tag) => ({
        label: tag.tag,
        value: tag.id,
      })),
    tags,
  )

  const initialValues = useMemo(() => {
    const defaultValues = {
      title: '',
      content: {
        blocks: [{ type: 'paragraph', data: {} }],
        version: '2.19.0',
      },
      tags: options[0].value,
      event_date: '',
      files: filesReducerDefaultState.files,
    }

    if (Object.keys(story).length > 0) {
      const files = story.images.map((image) => ({
        file: {
          path: image.name,
          size: image.height * image.width,
          lastModified: 0,
        },
        caption: image.caption,
        preview: image.url,
        id: image.id,
      }))

      return {
        title: story.title === null ? defaultValues.title : story.title,

        content:
          story.content === null
            ? defaultValues.content
            : JSON.parse(story.content),

        tags:
          story.tags === null || story.tags.length === 0 || story.tags[0] === null
            ? defaultValues.tags
            : options.find((f) => f.label === story.tags[0]).value,

        event_date:
          story.event_date === null
            ? defaultValues.event_date
            : new Date(story.event_date),

        files,
      }
    }

    return defaultValues
  }, [story])

  const [state, dispatch] = useReducer(reducer, {
    status: statuses.INITIAL,
    storyId: story.id || undefined,
    published: story.published_at !== null && story.published_at !== undefined,
    files: initialValues.files,
  })

  // refPreviousForm keep the latest form to diff if there is change (because editor.js is a pain and save
  // the time in the payload when a state change)
  const refPreviousForm = useRef({})

  const { posts, uploader } = useServices()

  const createOrUpdatePost = useDebounce(
    state,
    async (currentState, { values }) => {
      const filesDiff = diff(refPreviousForm.current.files, values.files)
      refPreviousForm.current = values

      try {
        dispatch({ type: actionTypes.SET_STATUS, data: statuses.SAVING })

        const res = await FormHelper.fakeDelay(async () =>
          posts.api.createOrUpdate(
            posts.validations.prepareCreate({
              ...values,
              author,
              id: currentState.storyId,
            }),
          ),
        )

        if (res.status === 200) {
          if (currentState.storyId === undefined) {
            dispatch({ type: actionTypes.SET_STORY_ID, data: res.data.id })
          }

          // only update images if there is a change in files
          if (Object.keys(filesDiff).length > 0) {
            await FormHelper.fakeDelay(
              async () =>
                await uploadOrUpdateImages(currentState.files, res.data.id),
            )
          }
        }
      } catch (error) {
        console.error('error while submitting a post', error)
      }

      dispatch({ type: actionTypes.SET_STATUS, data: statuses.SAVED })
    },
    1000,
  )

  async function uploadOrUpdateImages(images, postId) {
    if (images === undefined || images.length === 0) return

    dispatch({ type: actionTypes.SET_STATUS, data: statuses.SAVING_IMAGES })

    for (let i = 0; i < images.length; i++) {
      const image = images[i]

      try {
        const imageId = image.id

        const res = await uploader.api.upload(
          {
            ref: 'posts',
            refId: postId,
            field: 'images',
            ...image,
            imageId,
          },
          imageId !== undefined,
        )

        if (res.status === 200) {
          if (imageId === undefined)
            dispatch(
              filesReducerCreateAction({
                type: filesReducerActions.MODIFY,
                index: i,
                data: { id: res.data[0].id },
              }),
            )
        } else {
          console.error('error when uploading image', res.status, res.data)
        }
      } catch (error) {
        console.error(
          `error while trying to upload images to post ${postId}`,
          error,
        )
      }
    }
  }

  async function deleteImage(image) {
    if (image.id === undefined) return

    dispatch({ type: actionTypes.SET_STATUS, data: statuses.DELETE_IMAGE })

    try {
      const res = await FormHelper.fakeDelay(() =>
        uploader.api.delete(image.id),
      )
      if (res.status !== 200) {
        console.error('error when deleting image', res.status, res.data)
      }
    } catch (error) {
      console.error(`error while trying to delete image id ${image.id}`, error)
    }

    dispatch({ type: actionTypes.SET_STATUS, data: statuses.SAVED })
  }

  async function handlePublish(publish) {
    dispatch({ type: actionTypes.SET_STATUS, data: statuses.SAVING })

    try {
      const res = await FormHelper.fakeDelay(async () =>
        posts.api.createOrUpdate({
          publish,
          id: state.storyId,
        }),
      )

      if (res.status === 200) {
        dispatch({ type: actionTypes.SET_PUBLISHED, data: publish })
      }
    } catch (error) {
      console.error('error while publish a post', error)
    }

    dispatch({ type: actionTypes.SET_STATUS, data: statuses.SAVED })
  }

  return (
    <Form
      keepDirtyOnReinitialize={true}
      mutators={{ ...arrayMutators }}
      onSubmit={handlePublish}
      validate={posts.validations.create}
      initialValues={initialValues}
      render={({ form, values, valid, submitting }) => (
        <form>
          <FormHelper.FormOnChangeHandler onChange={createOrUpdatePost} />

          <div className={styles.form_title}>
            <Field name="title" type="text">
              {({ input, meta }) => (
                <Input
                  label="Titre"
                  placeholder="Titre"
                  {...input}
                  meta={meta}
                  icon="text_fields"
                />
              )}
            </Field>
          </div>

          <div className={styles.form_meta}>
            <Field name="tags" type="number">
              {({ input, meta }) => (
                <Select
                  label="Catégorie"
                  options={options}
                  {...input}
                  meta={meta}
                  placeholder="Escalade"
                />
              )}
            </Field>
            <Field name="event_date" type="number">
              {({ input, meta }) => (
                <DatePicker
                  label="Date de la sortie (optionel)"
                  input={input}
                  meta={meta}
                />
              )}
            </Field>
          </div>

          <div className={styles.form_content}>
            <Field name="content" type="number">
              {({ input, meta }) => (
                <EditorInput
                  label={'Contenu du récit'}
                  placeholder="Écrivez votre récit ici"
                  input={input}
                  meta={meta}
                />
              )}
            </Field>
          </div>

          <div className={styles.form_pictures}>
            <Field name="files">
              {({ input, meta }) => (
                <UploadImageInput
                  label="Images associés au récit"
                  push={form.mutators.push}
                  deleteImage={deleteImage}
                  files={state.files}
                  dispatch={dispatch}
                />
              )}
            </Field>
          </div>

          <FormFooter
            state={state}
            canSubmit={
              Object.keys(posts.validations.create(values)).length === 0
            }
            handlePublish={handlePublish}
            submitting={submitting}
          />
        </form>
      )}
    />
  )
}

FormFooter.propTypes = {
  state: PropTypes.object.isRequired,
  canSubmit: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handlePublish: PropTypes.func.isRequired,
}

function FormFooter({ state, canSubmit, submitting, handlePublish }) {
  const loading =
    submitting ||
    !(state.status === statuses.INITIAL || state.status === statuses.SAVED)
  const showStatus = state.status !== statuses.INITIAL

  const statusText = (state, published) => {
    switch (state) {
      case statuses.SAVING:
        return `Enregistrement du récit`
      case statuses.SAVING_IMAGES:
        return `Enregistrement des images`
      case statuses.DELETE_IMAGE:
        return `Suppression d'une image`
      case statuses.PUBLISHING:
        return `En cours de publication`
      case statuses.SAVED:
        return published ? `Récit à jour` : 'Brouillon à jour'
    }

    return ''
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {showStatus && (
        <div
          className={`${styles.state} ${loading ? styles.state__loading : ''}`}
        >
          <Icon style={{ marginRight: 10 }}>
            {loading ? 'cached' : 'check'}
          </Icon>
          <p>{statusText(state.status, state.published)}</p>
        </div>
      )}

      <Button
        variant={state.published ? 'error' : 'primary'}
        size="medium"
        disabled={canSubmit === false}
        focus={state.published ? 'error' : 'primary'}
        loading={loading}
        onClick={() => handlePublish(!state.published)}
      >
        {state.published ? 'Dépublier' : 'Publier'}
      </Button>
    </div>
  )
}
