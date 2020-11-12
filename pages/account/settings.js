import PropTypes from 'prop-types'
import React from 'react'
import Layout from '@components/atoms/Layout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import services from '../../services'

Settings.propTypes = {
  user: PropTypes.object,
}

/**
 *
 * @param {User} user
 * @returns {JSX.Element}
 * @constructor
 */
export default function Settings({ user }) {
  return (
    <Layout>
      <AccountNavigation />
      {/*<p>Ceci est une page protégé {JSON.stringify(user)}</p>*/}
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const {
    auth,
    users: { api },
  } = services({ token: ctx.req.cookies.token, isServer: true })

  const user = await auth.helpers.shouldRedirectIfNotAuthenticated(api, ctx)

  if (user) {
    return {
      props: { user },
    }
  }
}
