import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Layout from '@components/atoms/Layout'
import Button from '@components/atoms/Button'
import BigIcon from '@components/molecules/BigIcon'
import DashboardLayout from '@components/atoms/DashboardLayout'
import DashboardNavigation from '@components/molecules/DashboardNavigation'
import DashboardStories from '@components/organisms/DashboardStories'
import services from '@services/index'
import React from 'react'

Stories.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array,
}

/**
 *
 * @param {User} user
 * @param {Array} posts
 * @returns {JSX.Element}
 * @constructor
 */
export default function Stories({ user, posts }) {
  const router = useRouter()

  function handleCreateStory() {
    router.push('/dashboard/stories/new')
  }

  function handleGetAccess() {
    console.log('todo: request access')
  }

  return (
    <Layout>
      <DashboardNavigation />
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
          <DashboardStories
            title={`Mes récit (${posts.length})`}
            stories={posts}
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
    posts,
    users: { api },
  } = services({ token: ctx.req.cookies.token, isServer: true })

  const user = await auth.helpers.shouldRedirectIfNotAuthenticated(api, ctx)

  const postList = await posts.api.search({
    limit: 2000,
    author: user.id,
    published: false,
  })

  if (user) {
    return {
      props: { user, posts: postList },
    }
  }
}
