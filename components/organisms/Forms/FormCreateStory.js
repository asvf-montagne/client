import Button from '@components/atoms/Button'
import DatePicker from '@components/atoms/DatePicker'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import Select from '@components/atoms/Select'
import UploadImageInput from '@components/organisms/UploadImageInput'
import arrayMutators from 'final-form-arrays'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import React from 'react'
import { Field, Form } from 'react-final-form'

// import styles from "./FormCreateStory.module.css";

const EditorInput = dynamic(
  () => import('@components/atoms/EditorInput'),
  { ssr: false }
)


FormCreateStory.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default function FormCreateStory({ tags }) {
  const options = tags.map((tag) => ({
    label: tag.tag,
    value: tag.id,
  }))

  function handleSubmit() {
    console.log('wewe')
  }

  return (
    <Form
      mutators={{ ...arrayMutators }}
      onSubmit={handleSubmit}
      validate={undefined}
      render={({ form, submitError, handleSubmit, values, pristine, submitting }) => (
        <form>
          <FormSuccessOrError
            success={false}
            error={submitError}
            successMessage={''}
          />

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

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Field name="category" type="number">
              {({ input, meta }) => (
                <Select
                  label="Mot de passe"
                  options={options}
                  {...input}
                  meta={meta}
                  placeholder="Escalade"
                />
              )}
            </Field>
            <Field name="trip_date" type="number">
              {({ input, meta }) => (
                <DatePicker label="Date de la sortie (optionel)" input={input} meta={meta}/>
              )}
            </Field>
          </div>

          <Field name="category" type="number">
            {({ input, meta }) => (
              <EditorInput label={'Contenu du récit'} placeholder="Écrivez votre récit ici" input={input} meta={meta}/>
            )}
          </Field>

          <Field name="files">
            {({ input, meta }) => (
              <UploadImageInput push={form.mutators.push}/>
            )}
          </Field>

          <Button
            variant="primary"
            size="medium"
            focus="primary"
            loading={submitting}
            onClick={() => handleSubmit(values)}
          >
            Publier
          </Button>
        </form>
      )}
    />
  )
}
