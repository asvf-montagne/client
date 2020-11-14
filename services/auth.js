import ValidationHelper from '../helpers/validation'
import v from 'validator'

const auth = (client) => ({
  api: {
    async signIn(data) {
      try {
        return await client.post('/auth/local', data)
      } catch (ex) {
        return ex.response
      }
    },

    async signUp(data) {
      try {
        return await client.post('/auth/local/register', data)
      } catch (ex) {
        return ex.response
      }
    },

    async forgotPassword(data) {
      try {
        return await client.post('/auth/forgot-password', data)
      } catch (ex) {
        return ex.response
      }
    },

    async resetPassword(data) {
      try {
        return await client.post('/auth/reset-password', data)
      } catch (ex) {
        return ex.response
      }
    },

    // user is authenticated
    async updatePassword({ password }) {
      try {
        return await client.put('/extend/users/me', { password })
      } catch ({ response }) {
        return response
      }
    },
  },

  validations: {
    signIn(o) {
      const errors = {}

      if (o.identifier === undefined)
        errors.identifier = ValidationHelper.messages.required
      if (o.password === undefined)
        errors.password = ValidationHelper.messages.required

      return errors
    },

    forgotPassword(o) {
      const errors = {}

      if (o.email === undefined)
        errors.email = ValidationHelper.messages.required
      else if (!v.isEmail(o.email))
        errors.email = ValidationHelper.messages.email

      return errors
    },

    resetPassword(o) {
      const errors = {}

      const passwordError = ValidationHelper.fieldValidations.password(
        o.password,
      )
      if (passwordError !== undefined) errors.password = passwordError

      if (o.passwordConfirmation === undefined)
        errors.passwordConfirmation = ValidationHelper.messages.required
      if (o.passwordConfirmation !== o.password)
        errors.passwordConfirmation = ValidationHelper.messages.notIdentical(
          'mot de passe',
        )

      return errors
    },

    signUp(o) {
      const errors = {}

      const usernameError = ValidationHelper.fieldValidations.username(
        o.username,
      )
      if (usernameError !== undefined) errors.username = usernameError

      if (o.email === undefined)
        errors.email = ValidationHelper.messages.required
      else if (!v.isEmail(o.email))
        errors.email = ValidationHelper.messages.email

      const passwordError = ValidationHelper.fieldValidations.password(
        o.password,
      )
      if (passwordError !== undefined) errors.password = passwordError

      return errors
    },

    updatePassword(o) {
      const errors = {}

      const passwordError = ValidationHelper.fieldValidations.password(
        o.password,
      )
      if (passwordError !== undefined) errors.password = passwordError

      return errors
    },
  },

  helpers: {
    /**
     * Only usable on the server side
     * @param {function} users - user service api
     * @param res
     * @returns {Promise<User|undefined>}
     */
    async shouldRedirectIfNotAuthenticated({ me }, { res }) {
      if (!client.metadata.isServer) {
        console.warn(
          "[service:auth] function 'shouldRedirectIfNotAuthenticated' is only usable with getServerSideProps",
        )
        return undefined
      }

      const user = await me()

      if (!user) {
        res.statusCode = 302
        res.setHeader('Location', `/auth/sign-in`)
        return
      }

      return user
    },

    /**
     * Only usable on the server side
     * Only need the server ctx (the token will be detected by that)
     * @param {object} ctx - server side ctx provided by vercel
     * @returns {Promise<void>}
     */
    async shouldRedirectIfAuthenticated(ctx) {
      if (!client.metadata.isServer) {
        console.warn(
          "[service:auth] function 'shouldRedirectIfAuthenticated' is only usable with getServerSideProps",
        )
        return undefined
      }

      if (ctx.req.cookies.token !== undefined) {
        ctx.res.statusCode = 302
        ctx.res.setHeader('Location', `/`)
        return undefined
      }
    },
  },
})

export default auth
