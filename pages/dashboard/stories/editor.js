import DashboardLayout from '@components/atoms/DashboardLayout'
import Layout from '@components/atoms/Layout'
import DashboardNavigation from '@components/molecules/DashboardNavigation'
import DashboardStoryCreator from '@components/organisms/DashboardStoryCreator'
import services from '@services/index'
import PropTypes from 'prop-types'
import React from 'react'

Editor.propTypes = {
  tags: PropTypes.array,
  user: PropTypes.object,
  story: PropTypes.object,
}

export default function Editor({ tags, user, story = {} }) {
  return (
    <Layout>
      <DashboardNavigation />
      <DashboardLayout>
        <DashboardStoryCreator
          title="Créer un récit"
          tags={tags}
          user={user}
          story={story}
        />
      </DashboardLayout>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const {
    tags,
    posts,
    auth,
    users: { api },
  } = services({ token: ctx.req.cookies.token, isServer: true })

  const user = await auth.helpers.shouldRedirectIfNotAuthenticated(api, ctx)

  let story = {}

  if (ctx.query.id !== undefined) {
    const storyId = ctx.query.id

    // check that the user can edit this story
    if (!(await posts.api.canEdit({ id: storyId }))) {
      ctx.res.statusCode = 302
      ctx.res.setHeader('Location', `/dashboard/stories`)
    }

    try {
      const res = await posts.api.find({ id: storyId, published: false })
      story = { story: res }
    } catch (error) {
      console.error(`unable to get post with id ${storyId}`, error)
    }
  }

  const tagsList = await tags.api.list()

  return {
    props: { tags: tagsList, user, ...story },
  }
}
