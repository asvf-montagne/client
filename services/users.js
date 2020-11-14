import ValidationHelper from '@helpers/validation'
import v from 'validator'
import TokenHelper from '../helpers/token'

/**
 * Definition of an user:
 *
 * @typedef {Object} User
 * @property {number} id
 * @property {string} email
 * @property {string} username
 * @property {string} provider
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} confirmed
 * @property {Object} role
 * @property {string} [lastname]
 * @property {string} [firstname]
 * @property {string} [phone]
 */

const users = (client) => ({
  api: {
    /**
     * Return the authenticated user
     * @returns {Promise<undefined|User>}
     */
    async me() {
      if (TokenHelper.hasValidToken(client)) {
        try {
          return (await client.get('/users/me')).data
        } catch ({ response }) {
          return undefined
        }
      } else {
        return undefined
      }
    },

    async updateUser(data) {
      try {
        return await client.put('/extend/users/me', data)
      } catch ({ response }) {
        return response
      }
    },
  },

  validations: {
    updateUser(o) {
      const errors = {}

      const usernameError = ValidationHelper.fieldValidations.username(
        o.username,
      )
      if (usernameError !== undefined) errors.username = usernameError

      if (o.firstname !== undefined && o.firstname !== '') {
        if (v.isEmpty(o.firstname, { ['ignore_whitespace']: true })) {
          errors.firstname = ValidationHelper.messages.notBlank
        }
      }

      if (o.lastname !== undefined && o.lastname !== '') {
        if (v.isEmpty(o.lastname, { ['ignore_whitespace']: true })) {
          errors.lastname = ValidationHelper.messages.notBlank
        }
      }

      const phoneError = ValidationHelper.fieldValidations.phone(o.phone, false)
      if (phoneError !== undefined) errors.phone = phoneError

      return errors
    },

    prepareUpdateUser(o) {
      if (o.firstname === undefined) o.firstname = ''
      if (o.lastname === undefined) o.lastname = ''
      if (o.phone === undefined) o.phone = ''

      o.firstname = o.firstname.trim()
      o.lastname = o.lastname.trim()

      return o
    },
  },
})

export default users
