import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Layout from '@components/atoms/Layout';
import FlashInfo from '@components/atoms/FlashInfo';
import LandingHero from '@components/molecules/LandingHero';
import LandingStoriesHighlight from '@components/organisms/LandingStoriesHighlight';

import LandingContact from '@components/organisms/LandingContact';
import services from '../services';

const infos = [
  {
    label: 'dim 08 nov 2020 / VTT, FTT et Handbike / Handisport',
    redirect: '/',
  },
  {
    label: 'dim 15 nov 2020 / Sortie VTT – 25 à 35km / VTT',
    redirect: '/',
  },
];

Home.propTypes = {
  stories: PropTypes.array,
  partners: PropTypes.array,
};

function Home({ stories, partners }) {
  const [flash, setFlash] = useState(true);
  const router = useRouter();

  const handleStoriesClub = () => {
    router.push('/club');
  };

  const handleStoriesRedirection = () => {
    router.push('/stories');
  };

  useEffect(() => {
    const item = window.localStorage.getItem('flash');

    if (!item) {
      setFlash(true);
      window.localStorage.setItem(
        'flash',
        JSON.stringify({
          value: true,
          createdAt: new Date(),
        }),
      );
    } else {
      const { value, createdAt } = JSON.parse(item);
      const oneDay = 86400;
      const isExpired = new Date(createdAt).getTime() - new Date().getTime() > oneDay;
      if (isExpired) {
        window.localStorage.removeItem('flash');
      } else if (!value) {
        setFlash(false);
      }
    }
  }, []);

  const toggleFlash = () => {
    setFlash(false);
    window.localStorage.removeItem('flash');
    window.localStorage.setItem(
      'flash',
      JSON.stringify({
        value: false,
        createdAt: new Date(),
      }),
    );
  };

  return (
    <Layout>
      {flash && <FlashInfo infos={infos} handleClose={() => toggleFlash()} />}
      <LandingHero handleRedirection={handleStoriesClub} />
      <LandingStoriesHighlight
        highlightedStories={stories}
        handleRedirection={handleStoriesRedirection}
      />

      <LandingContact
        partners={partners}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const [stories, partners] = await Promise.all([
    services().posts.list({ limit: 4 }),
    services().partners.list(),
  ]);

  return {
    props: { stories, partners },
    revalidate: 5,
  };
}

export default Home;
