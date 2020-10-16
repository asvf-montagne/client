import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Introduction from '../components/organisms/HomeIntroduction'
import StoriesHighlight from '../components/organisms/HomeStoriesHighlight'
import SponsorsAndContacts from '../components/organisms/HomeSponsorsAndContacts'

export const StyledHome = styled.div(
  (props) => `
    background: ${props.theme.colors.secondary};
  `
)

const mockStories = [
  {
    id: '0',
    title: `Goulotte Zia et traversée d'arête !`,
    image: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
    name: 'Martin',
    tags: 'Ski / Alpinisme',
    date: '3 days ago',
  },
  {
    id: '1',
    title: 'Pointe de Colomban 2455m (Lauzière)',
    name: 'Thomas',
    tags: 'Ski / Alpinisme',
    date: '6 days ago',
  },
  {
    id: '2',
    title: 'Crête de Brouffier (Taillefer)',
    name: 'Maud',
    tags: 'Ski / Alpinisme',
    date: '1 week ago',
  },
]

function Home() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(fullName, email, message)
  }

  const handleCTA = () => {
    router.push('/programmes')
  }

  const handleStoryRedirection = (id) => {
    router.push(`/stories/${id}`)
  }

  return (
    <StyledHome>
      <Introduction
        btnTitle="Programme 2020"
        onClick={handleCTA}
      />
      <StoriesHighlight
        stories={mockStories}
        handleRedirection={handleStoryRedirection}
      />
      <SponsorsAndContacts
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
        onSubmit={handleFormSubmit}
      />
    </StyledHome>
  )
}

export default Home
