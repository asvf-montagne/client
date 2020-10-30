import React, { useEffect, useState } from 'react'
import Layout from "@components/atoms/Layout";
import LandingInfo from "@components/organisms/LandingInfo";
import LandingContact from "@components/organisms/LandingContact";
import services from "../services";
import { useRouter } from 'next/router';

function Home({ stories }) {
  const router = useRouter()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(fullName, email, message)
  }

  useEffect(() => {

    // In order to reduce amount time to load the stories page
    router.prefetch('/stories').then(() => console.info('fetched stories'))

  }, [])

  return (
    <Layout>
      <LandingInfo highlightedStories={stories}/>
      <LandingContact
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

export async function getServerSideProps() {
  const stories = await services().posts.list({ limit: 4 })

  return {
    props: { stories }
  }
}


export default Home
