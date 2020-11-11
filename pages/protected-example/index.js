import Layout from '@components/atoms/Layout'
import PropTypes from 'prop-types'
import React from 'react'
import services from '../../services'

Index.propTypes = {
  user: PropTypes.object,
}

/**
 *
 * @param {User} user
 * @returns {JSX.Element}
 * @constructor
 */
export default function Index({ user }) {
  return (
    <Layout>
      <p>Ceci est une page protégé {JSON.stringify(user.username)}</p>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const {
    auth,
    users: { api },
  } = services({ token: ctx.req.cookies.token, isServer: true })

  const user = await auth.helpers.shouldRedirectIfNotAuthenticated(api, ctx.res)

  if (user) {
    return {
      props: { user },
    }
  }
}
