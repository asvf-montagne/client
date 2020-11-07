import v from "validator";
import { FORM_ERROR } from 'final-form'

const contactFormSubmissionsService = client => ({
  async create(data) {
    return await client.post(`/contact-form-submissions`, data);
  }
})

const MESSAGES = {
  FULL_NAME_REQUIRED: `Le nom et le prénom sont vide`,

  EMAIL_REQUIRED: `L'email est vide`,
  EMAIL_INVALID: `L'email est invalide`,

  CONTENT_REQUIRED: `Le message est vide`,
}

const contactFormSubmissions = {
  validate(o) {
    const errors = {}

    if (o['full_name'] === undefined) errors['full_name'] = MESSAGES.FULL_NAME_REQUIRED

    if (o.email === undefined) errors.email = MESSAGES.EMAIL_REQUIRED
    else if (!v.isEmail(o.email)) errors.email = MESSAGES.EMAIL_INVALID

    if (o.content === undefined || v.isEmpty(o.content, { ['ignore_whitespace']: true }))
      errors.content = MESSAGES.CONTENT_REQUIRED

    return errors
  },

  prepareForCreate(form) {
    return {
      ...form,
      "content": JSON.stringify({
        "time": 1602965428632,
        "version": "2.19.0",
        "blocks": form.content.split('\n').map(text => ({ type: 'paragraph', data: { text } }))
      })
    }
  },

  createResponseToError() {
    return { [FORM_ERROR]: `Une erreur est survenu.` }
  }
}

export default contactFormSubmissionsService

export { contactFormSubmissions }
