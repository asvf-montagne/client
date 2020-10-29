import { useState } from 'react';
import Layout from '@components/atoms/Layout';
import Header from '@components/molecules/Header';
import SearchGrid from '@components/organisms/SearchGrid';

import mockStories from "../mockStories";

const categories = [
  {
    label: 'Ski / Alpinisme',
    value: 'Ski / Alpinisme',
  }
];

export default function Stories() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    console.log(category, search)
  }

  return (
    <Layout>
      <Header variant="search" meta={{
        title: `Découvrez nos récits`,
        categories: categories,
        category: category,
        setCategory: setCategory,
        search: search,
        setSearch: setSearch,
        handleSearch: handleSearch,
        placeholder: 'Essayer de rechercher "chamonix" ou bien "6c"',
      }} />
      <SearchGrid
        stories={mockStories}
      />
    </Layout>
  )
}
