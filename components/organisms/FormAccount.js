import PropTypes from 'prop-types'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import Button from '@components/atoms/Button'
import { Field } from 'react-final-form'
import Input from '@components/atoms/Input'
import styles from './FormAccount.module.css'

FieldCustom.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
}

function FieldCustom({ name, type, label, description, placeholder, icon }) {
  return (
    <Field name={name} type={type}>
      {({ input, meta }) => (
        <div className={styles.wideInput}>
          <div className={styles.wideInput_col}>
            <label className={styles.wideInput_col_label}>{label}</label>
            <p className={styles.wideInput_col_description}>{description}</p>
          </div>
          <Input {...input} placeholder={placeholder} meta={meta} icon={icon} />
        </div>
      )}
    </Field>
  )
}

FormAccount.propTypes = {
  title: PropTypes.string,
  submitError: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
}

export default function FormAccount({ title, submitError, handleSubmit, values }) {
  const fields = [
    {
      name: 'lastName',
      type: 'text',
      label: 'Nom',
      description: 'Votre nom est personel il ne sera pas affiché en public.',
      placeholder: 'Nom de famille',
      icon: 'person',
    },
    {
      name: 'firstName',
      type: 'text',
      label: 'Prénom',
      description: 'Le prénom est utilisé lorsque vous publiez des articles ou sorties.',
      placeholder: 'Prénom',
      icon: 'person',
    },
    {
      name: 'username',
      type: 'text',
      label: 'Nom d’utilisateur',
      description: 'Le nom d’utilissateur est utilisé lorsque vous publiez des commentaires.',
      placeholder: 'Nom de compte',
      icon: 'person',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Addresse email',
      description: 'L’addresse email est utilisé pour vous avertir d’évènements, de changements lié au site ect. Elle reste privé.',
      placeholder: 'Email',
      icon: 'mail',
    },
  ]

  return (
    <form className={styles.form}>
      <span className={styles.form_header}>
        <h1 className={styles.form_header_title}>{title}</h1>
      </span>

      <FormSuccessOrError
        success={false}
        error={submitError}
        successMessage={''}
      />

      {fields.map((field, index) => (
        <FieldCustom
          key={index}
          name={field.name}
          type={field.type}
          label={field.label}
          description={field.description}
          placeholder={field.placeholder}
          icon={field.icon}
        />
      ))}

      <span className={styles.form_footer}>
        <Button size="medium" variant="primary" onClick={handleSubmit}>
          Sauvegarder
        </Button>
      </span>
    </form>
  )
}