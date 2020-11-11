import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'

const TokenHelper = {
  JWT_TOKEN_KEY: 'token',

  hasValidToken({ metadata: { token, isServer } }) {
    if (token === undefined) {
      return false
    }

    const decodedToken = jwtDecode(token)

    if (decodedToken === undefined) {
      if (!isServer) {
        this.removeToken()
      }

      return false
    }

    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // checking that the token is not expired.
    if (new Date(decodedToken.exp * 1000) < new Date()) {
      if (!isServer) {
        this.removeToken()
      }

      return false
    }

    return true
  },

  getToken() {
    return Cookies.get(this.JWT_TOKEN_KEY)
  },

  /**
   * Set the token inside the cookies.
   * By default our backend generate a token for
   * 30 days so we set the cookie expiration 1 day after.
   */
  setToken(tok) {
    Cookies.set(this.JWT_TOKEN_KEY, tok, { expires: 31 })
  },

  removeToken() {
    Cookies.remove(this.JWT_TOKEN_KEY)
  },
}

export default TokenHelper
