import { useState } from 'react';
import Layout from '@components/atoms/Layout';
import Header from '@components/molecules/Header';

import mockStories from "../mockStories";

const categories = [
  {
    label: 'wewe',
    value: 'wewe',
  },
  {
    label: 'wawa',
    value: 'wawa',
  }
];

export default function Stories() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('weew');

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
    </Layout>
  )
}
