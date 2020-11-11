import { FORM_ERROR } from 'final-form'

const formats = {
  username: /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
}

const strapiErrors = {
  'Auth.form.error.email.taken': {
    email: 'Addresse email déjà utilisé',
  },

  'Auth.form.error.username.taken': {
    username: "Nom d'utilisateur déjà utilisé",
  },

  'Auth.form.error.invalid': {
    [FORM_ERROR]: 'Identifiant ou mot de passe invalide',
  },

  'Auth.form.error.user.not-exist': {
    email: "Cet email n'existe pas",
  },

  'Auth.form.error.code.provide': {
    [FORM_ERROR]: 'Vous avez déjà réinitialisé votre mot de passe',
  },
}

const ValidationHelper = {
  messages: {
    required: 'Champ requis',
    email: 'Email invalide',
    notBlank: 'Ne doit pas contenir uniquement des espaces',
    minStringLength: (n) => `Minimum ${n} charactère${n > 1 ? 's' : ''}`,
    notIdentical: (fieldName) => `Doit être identique au champ ${fieldName}`,
    shouldStartOrEndWithAlphaOrNumber: `Doit commencer et finir par une lettre ou un chiffre`,

    // custom logic messages format
    usernameFormat: `Accepte lettres, chiffres, le . et _`,
  },

  validations: {
    startOrEndWith(str, listOfString) {
      return listOfString.some((charset) => {
        return str.startsWith(charset) || str.endsWith(charset)
      })
    },
  },

  fieldValidations: {
    username(username) {
      if (username === undefined) return ValidationHelper.messages.required
      else if (username.length < 4)
        return ValidationHelper.messages.minStringLength(4)
      else if (
        ValidationHelper.validations.startOrEndWith(username, ['.', '_'])
      )
        return ValidationHelper.messages.shouldStartOrEndWithAlphaOrNumber
      else if (username.match(formats.username) === null)
        return ValidationHelper.messages.usernameFormat
    },

    password(password) {
      if (password === undefined) return ValidationHelper.messages.required
      else if (password.length < 6)
        return ValidationHelper.messages.minStringLength(6)
    },
  },

  errorsFromStrapi(responseInString) {
    let errors = {}
    Object.keys(strapiErrors)
      .filter((code) => responseInString.includes(code))
      .forEach((code) => {
        errors = { ...errors, ...strapiErrors[code] }
      })

    return errors
  },

  validateFromBackend(response) {
    return {
      [FORM_ERROR]: `Une erreur est survenu.`,
      ...this.errorsFromStrapi(JSON.stringify(response)),
    }
  },
}

export default ValidationHelper
