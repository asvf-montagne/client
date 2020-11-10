import React from 'react'
import Layout from '@components/atoms/Layout'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import PageHeader from '@components/atoms/PageHeader'

export default function AccountSettings() {
  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 180px 0" topHalfHeight={65}>
        <PageHeader
          title="L'école d'escade"
          subTitle="Dernière mise à jour le 18/03/2020"
        />
      </SplitBackgroundOverlay>
    </Layout>
  )
}
