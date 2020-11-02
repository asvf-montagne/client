import React, { useState } from 'react';
import Layout from '@components/atoms/Layout';
import SplitBackgroundOverlay from "@components/atoms/SplitBackgroundOverlay";
import SearchHeader from "@components/molecules/SearchHeader";
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
      <SplitBackgroundOverlay padding="96px 32px 64px 32px" topHalfHeight={65}>
        <SearchHeader
          title="Découvrez nos récits"
          tags={tags}
          tag={tag}
          setTag={setTag}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          placeholder="Essayer de rechercher 'chamonix' ou bien '6c'"
        />
      </SplitBackgroundOverlay>
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
