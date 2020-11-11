import TokenHelper from '../helpers/token'

/**
 * Definition of an user:
 *
 * @typedef {Object} User
 * @property {number} id
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
  },
})

export default users
