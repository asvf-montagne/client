import React from "react";
import Layout from '@components/atoms/Layout';
import SplitBackgroundOverlay from "@components/atoms/SplitBackgroundOverlay";
import StoryHeader from "@components/molecules/StoryHeader";
import Blog from '@components/atoms/Blog';
import SuggestedStories from '@components/organisms/SuggestedStories';
import services from "../../services";
import { posts } from "../../services/posts";

export default function Story({ story, suggestedStories }) {
  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 64px 0" topHalfHeight={55}>
        <StoryHeader
          tag={posts.getFirstTag(story)}
          title={story.title}
          author={posts.getTitledAuthor(story)}
          date={posts.getPublishedTimeAgo(story)}
          images={posts.getImagesForSlider(story)}
        />
      </SplitBackgroundOverlay>
      <Blog data={JSON.parse(story.content)} />
      <SuggestedStories stories={suggestedStories} />
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