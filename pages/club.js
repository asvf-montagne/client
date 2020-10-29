import Layout from '@components/atoms/Layout';
import DefaultPageLayout from '@components/organisms/DefaultPageLayout';

import mockStories from "../mockStories";

export default function Club() {
  return (
    <Layout>
      <DefaultPageLayout
        variant="page"
        meta={{ title: `L'école d'escade`, subTitle: 'Dernière mise à jour le 18/03/2020' }}
        data={mockStories[0].data}
      />
    </Layout>
  )
}
