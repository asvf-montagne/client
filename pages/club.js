import Layout from '@components/atoms/Layout';
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay';
import PageHeader from '@components/atoms/PageHeader';
import Blog from '@components/atoms/Blog';

import mockStories from '../mockStories';
import React from 'react';

export default function Club() {
  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 180px 0" topHalfHeight={65}>
        <PageHeader
          title="L'école d'escade"
          subTitle="Dernière mise à jour le 18/03/2020"
        />
      </SplitBackgroundOverlay>
      <Blog data={mockStories[0].data} />
    </Layout>
  );
}
