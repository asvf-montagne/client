import v from 'validator'
import ValidationHelper from '../helpers/validation'

const contactFormSubmissions = (client) => ({
  api: {
    async create(data) {
      try {
        return await client.post(`/contact-form-submissions`, data)
      } catch (err) {
        return err.response
      }
    },
  },

  validations: {
    validateCreate(o) {
      const errors = {}

      if (o['full_name'] === undefined)
        errors['full_name'] = ValidationHelper.messages.required

      if (o.email === undefined)
        errors.email = ValidationHelper.messages.required
      else if (!v.isEmail(o.email))
        errors.email = ValidationHelper.messages.email

      if (o.content === undefined)
        errors.content = ValidationHelper.messages.required
      else if (v.isEmpty(o.content, { ['ignore_whitespace']: true }))
        errors.content = ValidationHelper.messages.notBlank

      return errors
    },

    prepareCreate(values) {
      return {
        ...values,
        content: JSON.stringify({
          time: 1602965428632,
          version: '2.19.0',
          blocks: values.content
            .split('\n')
            .map((text) => ({ type: 'paragraph', data: { text } })),
        }),
      }
    },
  },
})

export default contactFormSubmissions
