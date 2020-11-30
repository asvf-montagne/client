import DashboardLayout from '@components/atoms/DashboardLayout'
import Layout from '@components/atoms/Layout'
import DashboardLinkWithGoogle from '@components/molecules/DashboardLinkWithGoogle'
import DashboardNavigation from '@components/molecules/DashboardNavigation'
import FormDashboardSettingsAccount from '@components/organisms/Forms/FormDashboardSettingsAccount'
import FormDashboardSettingsPassword from '@components/organisms/Forms/FormDashboardSettingsPassword'
import PropTypes from 'prop-types'
import React from 'react'
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
      <DashboardNavigation />
      <DashboardLayout>
        <FormDashboardSettingsAccount user={user} />

        <FormDashboardSettingsPassword />

        {user.provider !== 'google' && (
          <DashboardLinkWithGoogle
            label="Lier mon compte google"
            description="Pour plus de simplicité connectez vous avec votre compte google en cliquant sur bouton ci-contre."
          />
        )}
      </DashboardLayout>
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
