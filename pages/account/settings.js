import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import Layout from '@components/atoms/Layout'
import AccountLayout from '@components/atoms/AccountLayout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import AccountLinkWithGoogle from '@components/molecules/AccountLinkWithGoogle'
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

  async function handleChangePassword(values) {
    try {
      console.log('wewewe', values)
    } catch (error) {
      console.error('error while submitting sign up form', error)
    }
  }

  async function handleLinkWithGoogle(event) {
    try {
      console.log('link')
    } catch (error) {
      console.error('error while submitting sign up form', error)
    }
  }

  const personalData = [
    {
      name: 'lastName',
      type: 'text',
      label: 'Nom',
      description: 'Votre nom est personel il ne sera pas affiché en public.',
      placeholder: 'Nom de famille',
      icon: 'person',
    },
    {
      name: 'firstName',
      type: 'text',
      label: 'Prénom',
      description:
        'Le prénom est utilisé lorsque vous publiez des articles ou sorties.',
      placeholder: 'Prénom',
      icon: 'person',
    },
    {
      name: 'username',
      type: 'text',
      label: 'Nom d’utilisateur',
      description:
        'Le nom d’utilisateur est utilisé lorsque vous publiez des commentaires.',
      placeholder: 'Nom de compte',
      icon: 'person',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Numéro de téléphone',
      description:
        'Le numéro de téléphone est utilisé lorsque vous publiez des sorties et que vous êtes responsable.',
      placeholder: 'Numéro de téléphone',
      icon: 'phone',
    },
    {
      name: 'email',
      type: 'text',
      label: 'Addresse email',
      description:
        'L’addresse email est utilisé pour vous avertir d’évènements, de changements lié au site ect. Elle reste privé.',
      placeholder: 'Email',
      icon: 'mail',
    },
  ]

  const changePassword = [
    {
      name: 'password',
      type: 'password',
      label: 'Changer votre mot de passe',
      description:
        'Il est recommandé d’utiliser un gestionnaire de mot de passe.',
      placeholder: '********',
      icon: 'lock',
    },
  ]

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
            phone: user.phone,
            email: user.email,
          }}
          render={({ submitError, handleSubmit, values }) => (
            <FormAccount
              title="Informations personnelles"
              fields={personalData}
              submitError={submitError}
              handleSubmit={handleSubmit}
              values={values}
            />
          )}
        />

        <Form
          onSubmit={handleChangePassword}
          validate={null}
          render={({ submitError, handleSubmit, values }) => (
            <FormAccount
              title="Sécurité de votre compte"
              fields={changePassword}
              submitError={submitError}
              handleSubmit={handleSubmit}
              values={values}
            />
          )}
        />

        <AccountLinkWithGoogle
          label="Lier mon compte google"
          description="Pour plus de simplicité connectez vous avec votre compte google en cliquant sur bouton ci-contre."
          onClick={handleLinkWithGoogle}
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
