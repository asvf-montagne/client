import Layout from '@components/atoms/Layout'
import React from 'react'
import services from '../../services'
import PropTypes from 'prop-types'

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
      <p>Ceci est une page protégé {JSON.stringify(user)}</p>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const user = await services({
    token: ctx.req.cookies.token,
  }).auth.shouldRedirectIfNotAuthenticated(ctx)

  if (user) {
    return {
      props: { user },
    }
  }
}
