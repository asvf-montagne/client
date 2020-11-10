import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const JWT_COOKIE_KEY = 'token'

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

const authService = (client) => ({
  /**
   * Check if the user is authenticated on the website with the
   * jwt and then get the user. It return false if the user is not authenticated.
   *
   * @param {boolean} isServer
   * @returns {Promise<boolean|User>}
   */
  async getUser(isServer = false) {
    if (client.metadata === undefined) {
      return undefined
    }

    const token = client.metadata.token

    if (token === undefined) {
      console.warn(
        'Maybe you are forgetting to pass the token inside the services() function in serverSideProps ?',
      )
      return undefined
    }

    const decodedToken = jwtDecode(token)

    if (decodedToken === undefined) {
      if (!isServer) {
        Cookies.remove(JWT_COOKIE_KEY)
      }

      return undefined
    }

    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // checking that the token is not expired.
    if (new Date(decodedToken.exp * 1000) < new Date()) {
      if (!isServer) {
        Cookies.remove(JWT_COOKIE_KEY)
      }

      return false
    }

    try {
      return (await client.get('/users/me')).data
    } catch ({ response }) {
      return undefined
    }
  },

  /**
   * Set the token inside the cookies.
   * By default our backend generate a token for
   * 30 days so we set the cookie expiration 1 day after.
   *
   */
  login() {
    Cookies.set(JWT_COOKIE_KEY, client.metadata.token, { expires: 31 })
  },

  logout() {
    Cookies.remove(JWT_COOKIE_KEY)
  },

  /**
   * Fetch the user, if the user cannot be fetched
   * redirect the user to the login page.
   *
   * @param res
   * @returns {Promise<User|undefined>}
   */
  async shouldRedirectIfNotAuthenticated({ res }) {
    const user = await this.getUser(true)

    if (!user) {
      res.statusCode = 302
      res.setHeader('Location', `/auth/sign-in`)
      return
    }

    return user
  },
})

const Auth = {
  jwtTokenKey: JWT_COOKIE_KEY,
}

export default authService

export { Auth }
