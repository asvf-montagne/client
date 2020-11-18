import Button from '@components/atoms/Button'
import DashboardLayout from '@components/atoms/DashboardLayout'
import Layout from '@components/atoms/Layout'
import AccountNavigation from '@components/molecules/AccountNavigation'
import services from '@services/index'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'

const EditorInput = dynamic(() => import('@components/atoms/EditorInput'), {
  ssr: false,
})

NewStories.propTypes = {
  tags: PropTypes.array,
}

export default function NewStories({ tags }) {
  return (
    <Layout>
      <AccountNavigation />
      <DashboardLayout>
        <Form
          onSubmit={(values) => console.log('test:', values)}
          render={({ values, handleSubmit }) => (
            <div>
              <Field name="datepicker">
                {({ input, meta }) => <EditorInput label="Test" meta={meta} input={input} />}
              </Field>
              <br />
              <Button
                size="medium"
                variant="primary"
                onClick={() => handleSubmit(values)}
              >
                TEST
              </Button>
            </div>
          )}
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
