import React, { useState } from 'react';
import Layout from '@components/atoms/Layout';
import Header from '@components/molecules/Header';
import SearchGrid from '@components/organisms/SearchGrid';
import services from "../services";

export default function Stories({ tags, stories }) {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');

  const handleSearch = () => {
    console.log(tag, search);
  }

  return (
    <Layout>
      <Header variant="search" meta={{
        title: `Découvrez nos récits`,
        tags,
        tag,
        setTag,
        search,
        setSearch,
        handleSearch,
        placeholder: 'Essayer de rechercher "chamonix" ou bien "6c"',
      }}/>
      <SearchGrid
        stories={stories}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const [tags, stories] = await Promise.all([
    services().tags.list(),
    services().posts.list({ limit: 15 })
  ])

  return {
    props: { tags, stories },
    revalidate: 2,
  }
}
