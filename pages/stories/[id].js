import { useRouter } from 'next/router';
import Layout from '@components/atoms/Layout';
import DefaultPageLayout from '@components/organisms/DefaultPageLayout';

import mockStories from "../../mockStories";

export default function Story() {
  const router = useRouter()
  const { id: storyId } = router.query

  return (
    <Layout>
      <DefaultPageLayout
        variant="story"
        meta={{
          categories: mockStories[0].tags,
          title: mockStories[0].title,
          author: mockStories[0].name,
          date: mockStories[0].date,
          images: mockStories[0].images,
          suggestedStories: mockStories.slice(1, 3),
        }}
        data={mockStories[0].data}
      />
    </Layout>
  );
}
