import PropTypes from 'prop-types'
import Layout from '@components/atoms/Layout'
import DashboardLayout from '@components/atoms/DashboardLayout'
import DashboardNavigation from '@components/molecules/DashboardNavigation'
import DashboardStoryCreator from '@components/organisms/DashboardStoryCreator'
import services from '@services/index'
import React from 'react'

NewStories.propTypes = {
  tags: PropTypes.array,
}

export default function NewStories({ tags }) {
  return (
    <Layout>
      <DashboardNavigation />
      <DashboardLayout>
        <DashboardStoryCreator title="Créer un récit" tags={tags} />
      </DashboardLayout>
    </Layout>
  )
}

export async function getStaticProps() {
  const servicesList = services({ isServer: true })

  const tags = await servicesList.tags.api.list()

  return {
    props: { tags },
    revalidate: 1,
  }
}
