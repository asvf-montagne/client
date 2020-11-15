import Blog from '@components/atoms/Blog'
import Layout from '@components/atoms/Layout'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import Gallery from '@components/molecules/Gallery'
import StoryHeader from '@components/molecules/StoryHeader'
import SuggestedStories from '@components/organisms/SuggestedStories'
import services from '@services/index'
import posts from '@services/posts'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'

Story.propTypes = {
  story: PropTypes.object,
  suggestedStories: PropTypes.array,
}

function storyHasImage(story, loading) {
  if (loading) return true
  return story.images.length > 0
}

export default function Story({ story, suggestedStories }) {
  const { isFallback: loading } = useRouter()
  const view = posts().view

  if (loading)
    console.log(
      '[router] this page is loading, its content will be generated statically',
    )
  return (
    <Layout>
      <SplitBackgroundOverlay
        padding="96px 0 64px 0"
        topHalfHeight={storyHasImage(story, loading) ? 60 : 100}
      >
        {loading ? (
          <StoryHeader loading={true} />
        ) : (
          <StoryHeader
            tag={view.getFirstTag(story)}
            title={story.title}
            author={view.getTitledAuthor(story)}
            date={view.getPublishedTimeAgo(story)}
            image={view.getFirstImage(story)}
          />
        )}
      </SplitBackgroundOverlay>

      {loading ? (
        <Blog loading={true} />
      ) : (
        <Blog
          data={JSON.parse(story.content)}
          style={{ marginTop: !story.images.length ? 64 : 0 }}
        />
      )}

      {!loading && (
        <>
          <Gallery
            images={story.images.map((image) => ({
              src: image.url,
              alt: image.caption,
              caption: image.caption,
              height: image.height,
              width: image.width,
            }))}
          />
          <SuggestedStories stories={suggestedStories} />
        </>
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  const { posts } = services({ isServer: true })

  const paths = (await posts.api.ids({ limit: 15 })).map((id) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { posts } = services({ isServer: true })

  const story = await posts.api.find({ id: params.id })
  const suggestedStories = await posts.api.suggested({
    limit: 2,
    date: story['published_at'],
  })

  return {
    props: { story, suggestedStories },
    revalidate: 2,
  }
}
