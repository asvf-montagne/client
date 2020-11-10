import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@components/atoms/Layout';
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay';
import StoryHeader from '@components/molecules/StoryHeader';
import Blog from '@components/atoms/Blog';
import Gallery from '@components/molecules/Gallery';
import SuggestedStories from '@components/organisms/SuggestedStories';
import services from '../../services';
import { posts } from '../../services/posts';

Story.propTypes = {
  story: PropTypes.string,
  suggestedStories: PropTypes.array,
};

export default function Story({ story, suggestedStories }) {
  return (
    <Layout>
      <SplitBackgroundOverlay
        padding="96px 0 64px 0"
        topHalfHeight={!!story.images.length ? 60 : 100}
      >
        <StoryHeader
          tag={posts.getFirstTag(story)}
          title={story.title}
          author={posts.getTitledAuthor(story)}
          date={posts.getPublishedTimeAgo(story)}
          image={posts.getFirstImage(story)}
        />
      </SplitBackgroundOverlay>
      <Blog
        data={JSON.parse(story.content)}
        style={{ marginTop: !story.images.length ? 64 : 0 }}
      />
      <Gallery
        images={story.images.map((image) => ({
          src: image.url,
          alt: image.caption,
          height: image.height,
          width: image.width,
        }))}
      />
      <SuggestedStories stories={suggestedStories} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  // todo: if the story is not found: => 404

  const story = await services().posts.find({ ...ctx.params });
  const suggestedStories = await services().posts.suggested({
    limit: 2,
    date: story['published_at'],
  });

  return {
    props: { story, suggestedStories },
  };
}
