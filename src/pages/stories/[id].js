import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/organisms/StoryHeader'
import Content from '../../components/organisms/StoryContent'
import Suggested from '../../components/organisms/StorySuggested'

import mockStories from '../../mockData'

function Story() {
  const router = useRouter()
  const { id: storyId } = router.query
  
  const story = mockStories[0]

  return (
    <>
      <Header
        title={story.title}
        images={story.images}
        name={story.name}
        tags={story.tags}
        date={story.date}
        caption={story.caption}
      />
      <Content data={story.data} />
      <Suggested stories={mockStories} />
    </>
  )
}

export default Story
