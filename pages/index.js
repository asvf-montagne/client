import Layout from '@components/atoms/Layout'
import LandingHero from '@components/molecules/LandingHero'
import LandingContact from '@components/organisms/LandingContact'
import LandingStoriesHighlight from '@components/organisms/LandingStoriesHighlight'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'

function IndexSeo() {
  return <>
    <NextSeo title="Accueil"/>
  </>
}


Home.propTypes = {
  stories: PropTypes.array,
  partners: PropTypes.array,
}

function Home({ stories, partners }) {
  const router = useRouter()

  return (
    <>
      <IndexSeo/>
      <Layout>
        <LandingHero handleRedirection={() => router.push('/club')}/>
        <LandingStoriesHighlight
          highlightedStories={stories}
          handleRedirection={() => router.push('/stories')}
        />

        <LandingContact partners={partners}/>
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
