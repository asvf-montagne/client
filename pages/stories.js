import React, { useState } from 'react';
import Layout from '@components/atoms/Layout';
import Header from '@components/molecules/Header';
import SearchGrid from '@components/organisms/SearchGrid';
import services from "../services";

export default function Stories({ tags, posts }) {
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
        stories={posts}
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const tags = await services().tags.list()
  const posts = await services().posts.list({ limit: 9 })

  return {
    props: { tags, posts }
  }
}
