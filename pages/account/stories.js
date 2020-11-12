import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@components/atoms/Layout'
import Button from '@components/atoms/Button'
import BigIcon from '@components/molecules/BigIcon'
import AccountLayout from '@components/atoms/AccountLayout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import AccountStories from '@components/organisms/AccountStories'
import services from '../../services'

import mockStories from '../../mockStories'

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
  function handleCreateStory() {
    console.log('wewewe')
  }

  function handleGetAccess() {
    console.log('wewewe')
  }

  user.role.name = 'Editor'

  return (
    <Layout>
      <AccountNavigation />
      <AccountLayout>
        {user.role.name === 'Authenticated' && (
          <>
            <BigIcon
              icon="error"
              variant="error"
              description="Vous n’avez pas la permission de créer des récits. Cliquez sur le bouton ci-dessous pour demander l’accès."
            />
            <Button
              size="medium"
              variant="primary"
              focus="primary"
              onClick={handleGetAccess}
              style={{ margin: '0 auto', marginTop: 52 }}
            >
              Demander l’accès
            </Button>
          </>
        )}
        {user.role.name === 'Editor' && (
          <AccountStories
            title="Mes récits (3)"
            stories={mockStories}
            handleClick={handleCreateStory}
          />
        )}
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
