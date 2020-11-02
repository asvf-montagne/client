import React, { useState } from 'react';
import { useRouter } from "next/router";
import Layout from "@components/atoms/Layout";
import LandingHero from "@components/molecules/LandingHero";
import LandingStoriesHighlight from "@components/organisms/LandingStoriesHighlight";

import LandingContact from "@components/organisms/LandingContact";
import services from "../services";

function Home({ stories, partners }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter();

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(fullName, email, message)
  }

  const handleStoriesClub = () => {
    router.push('/club')
  }

  const handleStoriesRedirection = () => {
    router.push('/stories')
  }

  return (
    <Layout>
      <LandingHero handleRedirection={handleStoriesClub} />
      <LandingStoriesHighlight
        highlightedStories={stories}
        handleRedirection={handleStoriesRedirection}
      />

      <LandingContact
        partners={partners}
        email={email}
        fullName={fullName}
        message={message}
        setEmail={setEmail}
        setFullName={setFullName}
        setMessage={setMessage}
        onSubmit={handleFormSubmit}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const [stories, partners] = await Promise.all([
    services().posts.list({ limit: 4 }),
    services().partners.list()
  ])

  return {
    props: { stories, partners },
    revalidate: 5,
  }
}


export default Home
