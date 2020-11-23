import DashboardLayout from '@components/atoms/DashboardLayout'
import Layout from '@components/atoms/Layout'
import DashboardNavigation from '@components/molecules/DashboardNavigation'
import DashboardStoryCreator from '@components/organisms/DashboardStoryCreator'
import services from '@services/index'
import PropTypes from 'prop-types'
import React from 'react'

NewStories.propTypes = {
  tags: PropTypes.array,
  user: PropTypes.object,
}

export default function NewStories({ tags, user }) {
  return (
    <Layout>
      <DashboardNavigation />
      <DashboardLayout>
        <DashboardStoryCreator title="Créer un récit" tags={tags} user={user} />
      </DashboardLayout>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const {
    tags,
    auth,
    users: { api },
  } = services({ token: ctx.req.cookies.token, isServer: true })

  const user = await auth.helpers.shouldRedirectIfNotAuthenticated(api, ctx)
  const tagsList = await tags.api.list()

  console.log(user, tags)

  return {
    props: { tags: tagsList, user },
  }
}
