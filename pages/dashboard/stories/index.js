import Button from '@components/atoms/Button'
import DashboardLayout from '@components/atoms/DashboardLayout'
import Layout from '@components/atoms/Layout'
import BigIcon from '@components/molecules/BigIcon'
import DashboardNavigation from '@components/molecules/DashboardNavigation'
import DashboardStories from '@components/organisms/DashboardStories'
import roles from '@helpers/roles'
import useServices from '@hooks/useServices'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

function StoriesSeo() {
  return <>
    <NextSeo
      title="Vos récits"
      noindex={true}
    />
  </>
}

Stories.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array,
  hasRequestRoleEditor: PropTypes.bool,
}

/**
 *
 * @param {User} user
 * @param {Array} posts
 * @param {boolean} hasRequestRoleEditor
 * @returns {JSX.Element}
 * @constructor
 */
export default function Stories({ user, posts, hasRequestRoleEditor }) {
  const [hasRequestedRoleEditor, setHasRequestedRoleEditor] = useState(
    hasRequestRoleEditor,
  )
  const router = useRouter()
  const { requestRoleSubmissions } = useServices()

  function handleCreateStory() {
    router.push('/dashboard/stories/editor')
  }

  async function handleGetAccess() {
    try {
      const res = await requestRoleSubmissions.api.create({
        role: roles.editor.id,
      })
      if (res.status === 200) setHasRequestedRoleEditor(true)
    } catch (error) {
      console.error('error while trying to request role', error)
    }
  }

  return (
    <Layout>
      <StoriesSeo/>
      <DashboardNavigation />
      <DashboardLayout>
        {user.role.id !== roles.editor.id && (
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
              disabled={hasRequestedRoleEditor}
              onClick={handleGetAccess}
              style={{ margin: '0 auto', marginTop: 52 }}
            >
              {hasRequestedRoleEditor
                ? `Votre demande d'accès est en cours d'étude`
                : `Demander l'accès`}
            </Button>
          </>
        )}
        {user.role.id === roles.editor.id && (
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
    requestRoleSubmissions,
  } = services({ token: ctx.req.cookies.token, isServer: true })

  const user = await auth.helpers.shouldRedirectIfNotAuthenticated(api, ctx)

  const postList = await posts.api.search({
    limit: 2000,
    author: user.id,
    published: false,
  })

  let hasRequestRoleEditor = true
  if (user.role.id !== roles.editor.id) {
    hasRequestRoleEditor = await requestRoleSubmissions.api.hasAlreadyQuestRole(
      {
        userId: user.id,
        role: roles.editor.id,
      },
    )
  }

  if (user) {
    return {
      props: { user, posts: postList, hasRequestRoleEditor },
    }
  }
}
