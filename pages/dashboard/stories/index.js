import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Layout from '@components/atoms/Layout'
import Button from '@components/atoms/Button'
import BigIcon from '@components/molecules/BigIcon'
import DashboardLayout from '@components/atoms/DashboardLayout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import AccountStories from '@components/organisms/AccountStories'
import services from '@services/index'
import React from 'react'

import mockStories from '../../../mockStories'

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
  const router = useRouter()

  function handleCreateStory() {
    router.push('/dashboard/stories/new')
  }

  function handleGetAccess() {
    console.log('wewewe')
  }

  user.role.name = 'Editor'

  return (
    <Layout>
      <AccountNavigation />
      <DashboardLayout>
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
