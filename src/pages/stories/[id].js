import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/organisms/StoryHeader'
import Content from '../../components/organisms/StoryContent'
import Suggested from '../../components/organisms/StorySuggested'

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consequat purus tempor quam phasellus. Pellentesque arcu dictumst sit imperdiet viverra mauris enim interdum neque. Neque sed sed viverra arcu malesuada lobortis. Sollicitudin diam ipsum elit id fames duis tortor. Nunc consequat diam, commodo, semper placerat ac sed condimentum. Ut tellus est libero nam amet, risus nunc fames quis. Mattis neque proin dictum ante. Sed laoreet dictum morbi scelerisque. Tincidunt euismod egestas tincidunt ut ornare. Gravida accumsan convallis velit praesent duis tincidunt. Ultrices condimentum ultrices elit, at amet. Luctus placerat tempor dictumst turpis eu sit diam. Suspendisse velit, nulla cras dictum at.

Tempor egestas 

viverra tortor vel mattis. Nec sagittis eget sit in velit suspendisse aliquam massa. Pulvinar amet eu elementum interdum velit vulputate. Elementum luctus id nisi, placerat donec. Amet, eget lacus, proin ligula aliquam ut mauris a non.

   - Aliquam ut mauris a non
   - Morbi facilisis nullam in lacus
   - Pulvinar amet eu

At adipiscing ut habitant tortor risus viverra in. Senectus porta sit id eu quam porta. Nibh placerat morbi facilisis nullam in lacus. Volutpat ac risus mi fringilla feugiat scelerisque nulla pellentesque lobortis. Pharetra, pellentesque turpis in tincidunt sodales platea at. Eget est aenean hendrerit eget euismod. Sed dui id velit sagittis aliquet. Ac nec risus mauris purus. Laoreet sit imperdiet mauris commodo. Sit laoreet ipsum tortor, mollis feugiat interdum sem.

Egestas aliquet aenean pellentesque faucibus diam suspendisse purus, enim. Malesuada sollicitudin integer eu eu feugiat vitae arcu. Ultrices interdum aliquet velit platea in. Amet mauris adipiscing at risus cras id sed magnis. Tincidunt nullam at tortor nunc mauris orci. Mollis sed sit faucibus sapien, dictum venenatis at sodales lobortis. Nec est et vestibulum massa venenatis amet. Vitae odio lectus pretium. 
`

const mockSuggestedStories = [
  {
    id: '0',
    title: `Goulotte Zia et traversée d'arête !`,
    image: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
    caption: 'Pellentesque arcu dictumst sit imperdiet viverra mauris enim',
    name: 'Martin',
    tags: 'Ski / Alpinisme',
    date: '3 days ago',
  },
  {
    id: '1',
    title: 'Pointe de Colomban 2455m (Lauzière)',
    image: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
    name: 'Thomas',
    tags: 'Ski / Alpinisme',
    date: '6 days ago',
  },
  {
    id: '2',
    title: 'Crête de Brouffier (Taillefer)',
    image: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
    name: 'Maud',
    tags: 'Ski / Alpinisme',
    date: '1 week ago',
  },
]

function Story() {
  const router = useRouter()
  const { id: storyId } = router.query

  return (
    <>
      <Header
        title={mockSuggestedStories[0].title}
        image={mockSuggestedStories[0].image}
        name={mockSuggestedStories[0].name}
        tags={mockSuggestedStories[0].tags}
        date={mockSuggestedStories[0].date}
        caption={mockSuggestedStories[0].caption}
      />
      <Content content={content} />
      <Suggested stories={mockSuggestedStories} />
    </>
  )
}

export default Story
