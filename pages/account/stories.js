import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@components/atoms/Layout'
import BigIcon from '@components/molecules/BigIcon'
import AccountLayout from '@components/atoms/AccountLayout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import services from '../../services'

Stories.propTypes = {
  user: PropTypes.object,
}

/**
 *
 * @param {User} user
 * @returns {JSX.Element}
 * @constructor
 */
export default function Stories({ user }) {
  return (
    <Layout>
      <AccountNavigation />
      <AccountLayout>
        <BigIcon
          icon="error"
          variant="error"
          description="Vous n’avez pas la permission de créer des récits. Cliquez sur le bouton ci-dessous pour demander l’accès."
        />
      </AccountLayout>
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
