import React, { useState } from 'react'
import styled from '@emotion/styled'
import Introduction from '../components/organisms/HomeIntroduction'
import StoriesHighlight from '../components/organisms/HomeStoriesHighlight'
import SponsorsAndContacts from '../components/organisms/HomeSponsorsAndContacts'

import mockStories from '../mockData'

const sponsors = [
  {
    alt: 'sponsor-petzl',
    asset: require('../assets/images/logo-sponsor-petzl.jpg')
  },
  {
    alt: 'sponsor-expe',
    asset: require('../assets/images/logo-sponsor-expe.png')
  },
  {
    alt: 'sponsor-au-vieux-campeur',
    asset: require('../assets/images/logo-sponsor-au-vieux-campeur.png')
  },
  {
    alt: 'sponsor-FFCAM',
    asset: require('../assets/images/logo-sponsor-FFCAM.png')
  },
  {
    alt: 'sponsor-haribo',
    asset: require('../assets/images/logo-sponsor-haribo.jpg')
  },
  {
    alt: 'sponsor-simond',
    asset: require('../assets/images/logo-sponsor-simond.png')
  },
  {
    alt: 'sponsor-sport-2000',
    asset: require('../assets/images/logo-sponsor-sport-2000.jpg')
  }
]

export const StyledHome = styled.div(
  (props) => `
    background: ${props.theme.colors.secondary};
  `
)

function Home() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(fullName, email, message)
  }

  return (
    <StyledHome>
      <Introduction
        btnTitle="Programme 2020"
      />
      <StoriesHighlight
        stories={mockStories}
      />
      <SponsorsAndContacts
        sponsors={sponsors}
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
