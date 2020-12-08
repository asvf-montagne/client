import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Layout from '@components/atoms/Layout'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import SearchHeader from '@components/molecules/SearchHeader'
import TripsGrid from '@components/organisms/TripsGrid'

const mockTrips = [
  {
    id: '62c6689a-adc5-4a8a-bddc-93f69895ff8c',
    title: "Goulotte Zia et traversée d'arête !",
    location: 'Hier sur amby ',
    supervisors: [],
    activity: 'Escalade grande voie ',
  },
  {
    id: '62c6689a-adc5-4a8a-bddc-93f69894ff8c',
    title: "Goulotte Zia et traversée d'arête !",
    location: 'Hier sur amby ',
    supervisors: ['Pierre', 'Maud'],
    activity: 'Escalade grande voie ',
  },
  {
    id: '62c6689a-adc5-4a8a-bddc-93f69891ff8c',
    title: "Goulotte Zia et traversée d'arête !",
    location: 'Hier sur amby ',
    supervisors: ['Pierre', 'Maud'],
    activity: 'Escalade grande voie ',
  },
]

const mockTags = [
  {
    id: 4,
    tag: 'Alpinisme',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 5,
    tag: 'Cascade de Glace',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 6,
    tag: 'Compétition',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 7,
    tag: "Ecole d'escalad",
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 8,
    tag: 'Escalade',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 9,
    tag: 'Handisport',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 10,
    tag: 'Randonnée',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 11,
    tag: 'Raquette',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 12,
    tag: 'Ski de randonnée',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 13,
    tag: 'Vie du club',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
  {
    id: 14,
    tag: 'VTT',
    created_at: '2020-10-18T18:24:46.694Z',
    updated_at: '2020-10-18T18:24:46.694Z',
  },
]

Trips.propTypes = {
  tags: PropTypes.array,
  trips: PropTypes.array,
}

export default function Trips() {
  const router = useRouter()
  const { season } = router.query
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [tagId, setTagId] = useState('ALL')

  function getParamsForSearch(isSet = true) {
    const params = { start: isSet ? 0 : mockTrips.length, published: true }
    if (tagId !== 'ALL') {
      params.tagId = tagId
    }

    if (search.trim() !== '') {
      params.query = search.trim()
    }

    return params
  }

  async function handleSearch() {
    setLoading(true)

    console.log(getParamsForSearch())

    setLoading(false)
  }

  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 0 64px 0" topHalfHeight={65}>
        <SearchHeader
          title={`Les sorties saison ${season}`}
          tags={mockTags}
          tagId={tagId}
          setTagId={setTagId}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          placeholder="Essayer de rechercher “escalade” ou bien 'ski'"
          loading={loading}
        />
      </SplitBackgroundOverlay>

      <TripsGrid
        trips={mockTrips}
        season={season}
        // handleFetchMoreStories={handleFetchMoreStories}
        // showFetchMoreStoriesBtn={state.showFetchMoreStoriesBtn}
        loading={loading}
      />
    </Layout>
  )
}
