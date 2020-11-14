import FlashInfo from '@components/atoms/FlashInfo'
import Layout from '@components/atoms/Layout'
import LandingHero from '@components/molecules/LandingHero'

import LandingContact from '@components/organisms/LandingContact'
import LandingStoriesHighlight from '@components/organisms/LandingStoriesHighlight'
import services from '@services/index'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

Home.propTypes = {
  stories: PropTypes.array,
  partners: PropTypes.array,
}

function Home({ stories, partners }) {
  const router = useRouter()

  const handleStoriesClub = () => {
    router.push('/club')
  }

  const handleStoriesRedirection = () => {
    router.push('/stories')
  }

  return (
    <>
      <Layout>
        <LandingHero handleRedirection={handleStoriesClub} />
        <LandingStoriesHighlight
          highlightedStories={stories}
          handleRedirection={handleStoriesRedirection}
        />

        <LandingContact partners={partners} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const servicesList = services()

  const [stories, partners] = await Promise.all([
    servicesList.posts.api.list({ limit: 4 }),
    servicesList.partners.api.list(),
  ])

  return {
    props: { stories, partners },
    revalidate: 5,
  }
}

export default Home
