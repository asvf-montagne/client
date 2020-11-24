import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@components/atoms/Layout'
import DashboardLayout from '@components/atoms/DashboardLayout'
import DashboardNavigation from '@components/molecules/DashboardNavigation'
import DashboardLinkWithGoogle from '@components/molecules/DashboardLinkWithGoogle'
import FormDashboardSettingsAccount from '@components/organisms/Forms/FormDashboardSettingsAccount'
import FormDashboardSettingsPassword from '@components/organisms/Forms/FormDashboardSettingsPassword'
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
  // async function handleLinkWithGoogle(event) {
  //   try {
  //     console.log('LINK WITH GOOGLE ACCOUNT')
  //   } catch (error) {
  //     console.error('error while submitting sign up form', error)
  //   }
  // }

  return (
    <Layout>
      <DashboardNavigation />
      <DashboardLayout>
        <FormDashboardSettingsAccount user={user} />

        <FormDashboardSettingsPassword />

        <DashboardLinkWithGoogle
          label="Lier mon compte google"
          description="Pour plus de simplicité connectez vous avec votre compte google en cliquant sur bouton ci-contre."
          // onClick={handleLinkWithGoogle}
        />
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
