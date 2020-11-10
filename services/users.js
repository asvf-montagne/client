import v from "validator";
import { FORM_ERROR } from "final-form";

const usersService = (client) => ({
  async signUp(data) {
    try {
      return await client.post('/auth/local/register', data)
    } catch (ex) {
      return ex.response
    }
  }
})

const MESSAGES = {
  USERNAME_REQUIRED: `Champ requis`,
  USERNAME_INVALID_LENGTH: `Minimum 4 charactères`,
  USERNAME_INVALID_FORMAT_START_END: `Doit commencer et finir par une lettre ou un chiffre`,
  USERNAME_INVALID_FORMAT: `Accepte lettres, chiffres, le . et _`,

  EMAIL_REQUIRED: `Champ requis`,
  EMAIL_INVALID: `L'email est invalide`,

  PASSWORD_REQUIRED: `Champ requis et valide`,
  PASSWORD_INVALID_LENGTH: `Minimum 6 charactères`,
}

const STRAPI_TO_ERROR = {
  'Auth.form.error.email.taken': { email: 'Addresse email déjà utilisé' },
  'Auth.form.error.username.taken': { username: "Nom d'utilisateur déjà utilisé" },
}

const usernameRegexp = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/

const Users = {
  validateSignUp(o) {
    const errors = {}

    if (o['username'] === undefined)
      errors['username'] = MESSAGES.USERNAME_REQUIRED
    else if (o['username'].length < 4)
      errors['username'] = MESSAGES.USERNAME_INVALID_LENGTH
    else if (o['username'].startsWith(".") || o['username'].startsWith("_") || o['username'].endsWith(".") || o['username'].endsWith("_"))
      errors['username'] = MESSAGES.USERNAME_INVALID_FORMAT_START_END
    else if (o['username'].match(usernameRegexp) === null)
      errors['username'] = MESSAGES.USERNAME_INVALID_FORMAT

    if (o.email === undefined) errors.email = MESSAGES.EMAIL_REQUIRED
    else if (!v.isEmail(o.email)) errors.email = MESSAGES.EMAIL_INVALID

    if (o.password === undefined || v.isEmpty(o.password, { ['ignore_whitespace']: true }))
      errors.password = MESSAGES.PASSWORD_REQUIRED
    else if (o.password.length < 6)
      errors.password = MESSAGES.PASSWORD_INVALID_LENGTH

    return errors
  },

  validateFromBackendSignUp(response) {
    let errors = { [FORM_ERROR]: `Une erreur est survenu.` }
    const strResponse = JSON.stringify(response)
    Object.keys(STRAPI_TO_ERROR)
      .filter(code => strResponse.includes(code))
      .forEach(code => {
        errors = { ...errors, ...STRAPI_TO_ERROR[code] }
      })

    return errors
  }
}

export default usersService
export { Users }
