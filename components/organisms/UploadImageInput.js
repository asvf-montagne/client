import Input from '@components/atoms/Input'
import InputLabel from '@components/atoms/InputLabel'
import Icon from '@material-ui/core/Icon'
import {
  filesReducerActions,
  filesReducerCreateAction,
} from '@reducers/FilesReducer'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import styles from './UploadImageInput.module.css'

UploadImageInput.propTypes = {
  push: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  files: PropTypes.array.isRequired,
  label: PropTypes.string,
}

/**
 * How to use:
 *
 * In your <Form> component add:
 *   mutators={{
 *        ...arrayMutators
 *      }}
 *
 * Then in your Form component destructuring for the render property keep the 'form' field.
 *
 * When you instantiate UploadImageInput, pass form.mutators.push.
 * For validating input you will see a 'files' key.
 *
 * @param {function} push - from final-form-arrays
 * @param {string} label - label of the form
 * @param {function} deleteImage - notify that an image is deleted
 * @param {function} dispatch - reducer which dispatch files action
 * @param {FileInfo} files - state
 * @returns {JSX.Element}
 * @constructor
 */
export default function UploadImageInput({
  push,
  label,
  dispatch,
  files,
  deleteImage,
}) {
  const fileId = (f) => {
    return `${f.file.path}${f.file.size}${f.file.lastModified}`
  }

  const isFileEqual = (f1, f2) => {
    return fileId(f1) === fileId(f2)
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDropAccepted: (acceptedFiles) => {
      const toPush = []

      dispatch(
        filesReducerCreateAction({
          type: filesReducerActions.ADD,
          data: acceptedFiles.reduce((list, file) => {
            // if the file is already present, don't add it
            if (files.some((f) => isFileEqual(f, { file }))) return list

            // add to the file the preview (a blob object)
            const fileWithPreview = { file, preview: URL.createObjectURL(file) }

            // add an entry to the form list and add the file to the list of additional data for the upper form
            toPush.push(fileWithPreview)

            return [...list, fileWithPreview]
          }, []),
        }),
      )

      toPush.forEach((f) => push('files', f))
    },
  })

  const style = useMemo(() => {
    if (isDragReject) return 'reject'
    if (isDragAccept) return 'accept'
    if (isDragActive) return 'active'
  }, [isDragActive, isDragReject, isDragAccept])

  return (
    <section className="container">
      {label && <InputLabel label={label} />}
      <div
        {...getRootProps({
          className: `
      ${styles.upload_file} 
      ${styles['upload_file__' + style]}
      `,
        })}
      >
        <input {...getInputProps()} />
        <div className={styles.upload_file__textComponent}>
          <p>
            Faites glisser vos fichiers ici ou bien <em>cherchez les</em>
          </p>
        </div>
      </div>
      <div>
        <p className={styles.img_preview__title}>
          {files.length > 0
            ? `Fichier${files.length > 1 ? 's' : ''} (${files.length})`
            : `Aucune image ajouté pour l'instant`}
        </p>

        <div className={styles.img_preview__container}>
          <FieldArray name="files">
            {({ fields }) =>
              fields.map((name, index) => {
                const f = files[index]

                if (f === undefined) {
                  return <div key={index} />
                }

                return (
                  <div className={styles.img_preview__imagePreview} key={index}>
                    <img
                      alt="hello"
                      className={styles.img_preview__img}
                      src={f.preview}
                    />
                    <div className={styles.img_preview__containedInputAndIcon}>
                      <div className={styles.img_preview__input}>
                        <Field name={`files.${index}.caption`} type="text">
                          {({ input, meta }) => (
                            <Input
                              label="Légende"
                              placeholder="Des jolies montagnes ..."
                              icon="text_format"
                              meta={meta}
                              {...input}
                              onChange={(e) => {
                                dispatch(
                                  filesReducerCreateAction({
                                    type: filesReducerActions.MODIFY,
                                    index,
                                    data: { ...f, caption: e },
                                  }),
                                )

                                // notify form from chngin the caption of a file
                                input.onChange(e)
                              }}
                            />
                          )}
                        </Field>
                      </div>
                      <Icon
                        className={`
                          ${styles.img_preview__contained_del}
                          ${
                            f.id === undefined
                              ? styles.img_preview__contained_del__disabled
                              : ''
                          }
                        `}
                        onClick={() => {
                          if (f.id !== undefined) {
                            // delete the image api side
                            deleteImage(f)

                            // remote the image in the state
                            dispatch(
                              filesReducerCreateAction({
                                type: filesReducerActions.REMOVE,
                                data: index,
                              }),
                            )

                            // notify form of deletion for an entry
                            fields.remove(index)
                          }
                        }}
                      >
                        delete
                      </Icon>
                    </div>
                  </div>
                )
              })
            }
          </FieldArray>
        </div>
      </div>
    </section>
  )
}
