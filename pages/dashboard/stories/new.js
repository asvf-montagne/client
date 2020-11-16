import { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '@components/atoms/Layout'
import Select from '@components/atoms/Select'
import DashboardLayout from '@components/atoms/DashboardLayout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import services from '@services/index'

NewStories.propTypes = {
  tags: PropTypes.array,
}

export default function NewStories({ tags }) {
  const [value, setValue] = useState('')
  const options = tags.map((tag) => ({
    label: tag.tag,
    value: tag.id,
  }))

  return (
    <Layout>
      <AccountNavigation />
      <DashboardLayout>
        <Select
          options={options}
          value={value}
          setValue={setValue}
          placeholder="Categories"
        />
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
