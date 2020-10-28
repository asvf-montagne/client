import { useState } from 'react'
import Layout from "@components/atoms/Layout";
import LandingInfo from "@components/organisms/LandingInfo";
import LandingContact from "@components/organisms/LandingContact";

import mockStories from '../mockStories'

export default function Home() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(fullName, email, message)
  }

  return (
    <Layout>
      <LandingInfo highlightedStories={mockStories} />
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
