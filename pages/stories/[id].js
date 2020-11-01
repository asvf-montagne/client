import React from "react";
import { useRouter } from 'next/router';
import Layout from '@components/atoms/Layout';
import DefaultPageLayout from '@components/organisms/DefaultPageLayout';
import mockStories from "../../mockStories";
import services from "../../services";
import { posts } from "../../services/posts";

export default function Story({ story, suggestedStories }) {
  const router = useRouter()

  return (
    <Layout>
      <DefaultPageLayout
        variant="story"
        meta={{
          tag: posts.getFirstTag(story),
          title: story.title,
          author: posts.getTitledAuthor(story),
          date: posts.getPublishedTimeAgo(story),
          images: posts.getImagesForSlider(story),
          suggestedStories,
        }}
        data={JSON.parse(story.content)}
      />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  // todo: if the story is not found: => 404

  const story = await services().posts.find({ ...ctx.params })
  const suggestedStories = await services().posts.suggested({ limit: 2, date: story[0]['published_at'] })

  return {
    props: { story: story[0], suggestedStories }
  }
}
