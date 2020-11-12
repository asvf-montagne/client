import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import Layout from '@components/atoms/Layout'
import AccountLayout from '@components/atoms/AccountLayout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import FormAccount from '@components/organisms/FormAccount'
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
  async function handleSubmit(values) {
    try {
      console.log('wewewe', values)
    } catch (error) {
      console.error('error while submitting sign up form', error)
    }
  }

  return (
    <Layout>
      <AccountNavigation />
      <AccountLayout>
        <Form
          onSubmit={handleSubmit}
          validate={null}
          initialValues={{
            firstName: user.firstName,
            lastName: user.lastname,
            username: user.username,
            email: user.email,
          }}
          render={({ submitError, handleSubmit, values }) => (
            <FormAccount
              title="Informations personnelles"
              submitError={submitError}
              handleSubmit={handleSubmit}
              values={values}
            />
          )}
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
