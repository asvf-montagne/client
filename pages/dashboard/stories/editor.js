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

  let story = {}
  console.log(ctx.query.id)
  if (ctx.query.id !== undefined) {
    try {
      const res = await posts.api.find({ id: ctx.query.id, published: false })
      story = { story: res }
    } catch (error) {
      console.error(`unable to get post with id ${ctx.query.id}`, error)
    }
  }

  const user = await auth.helpers.shouldRedirectIfNotAuthenticated(api, ctx)
  const tagsList = await tags.api.list()

  return {
    props: { tags: tagsList, user, ...story },
  }
}
