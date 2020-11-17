import PropTypes from 'prop-types'
import { Field, Form } from 'react-final-form'
import Input from '@components/atoms/Input'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import Select from '@components/atoms/Select'
import Button from '@components/atoms/Button'
// import styles from "./FormCreateStory.module.css";

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
      onSubmit={handleSubmit}
      validate={undefined}
      render={({ submitError, handleSubmit, values, pristine, submitting }) => (
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

          <Field name="Tag" type="number">
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
