import Blog from '@components/atoms/Blog'
import Layout from '@components/atoms/Layout'
import PageHeader from '@components/atoms/PageHeader'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import services from '@services/index'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import PropTypes from 'prop-types'
import React from 'react'

ClimbingSchool.propTypes = {
  page: PropTypes.object.isRequired
}

/**
 * @param {{title: string, content: string, updated_at: string}} page
 * @returns {JSX.Element}
 * @constructor
 */
export default function ClimbingSchool({ page }) {
  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 180px 0" topHalfHeight={65}>
        <PageHeader
          title={page.title}
          subTitle={`Mis à jour le ${format(new Date(page.updated_at), 'PPPP p', { locale: fr })}`}
        />
      </SplitBackgroundOverlay>
      <Blog data={JSON.parse(page.content)}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const pages = services().pages

  return { props: { page: await pages.api.climbingSchool() } }
}
