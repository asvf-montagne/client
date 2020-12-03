import Layout from '@components/atoms/Layout'
import SplitBackgroundOverlay from '@components/atoms/SplitBackgroundOverlay'
import SearchHeader from '@components/molecules/SearchHeader'
import StoriesGrid from '@components/organisms/StoriesGrid'
import FormHelper from '@helpers/form'
import useServices from '@hooks/useServices'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'
import React, { useReducer, useState } from 'react'
import services from '../../services'

function StoriesSeo() {
  return <>
    <NextSeo
      title="Récits"
      description="Découvrez ou recherchez les récits des membres du club de l'asvf-montagne"
    />
  </>
}


const actionTypes = {
  SET_STORIES: 'SET_STORIES',
  ADD_STORIES: 'ADD_STORIES',
}

function StoriesReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_STORIES:
      return {
        stories: action.params.stories,
        showFetchMoreStoriesBtn: action.params.stories.length >= 15,
      }
    case actionTypes.ADD_STORIES:
      const newStories = [...state.stories, ...action.params.stories]
      return {
        stories: newStories,
        showFetchMoreStoriesBtn: action.params.stories.length >= 15,
      }
    default:
      throw new Error(
        `action unorganized ${action.type} with parameter ${action.params}`,
      )
  }
}

Stories.propTypes = {
  tags: PropTypes.array,
  stories: PropTypes.array,
}

export default function Stories({ tags, stories }) {
  const {
    posts: { api },
  } = useServices()
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [tagId, setTagId] = useState('ALL')
  const [state, dispatch] = useReducer(StoriesReducer, {
    stories,
    showFetchMoreStoriesBtn: true,
  })

  function getParamsForSearch(isSet = true) {
    const params = { start: isSet ? 0 : state.stories.length, published: true }
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

    const stories = await FormHelper.fakeDelay(
      async () => await api.search(getParamsForSearch()),
    )
    dispatch({ type: actionTypes.SET_STORIES, params: { stories } })

    setLoading(false)
  }

  async function handleFetchMoreStories() {
    setLoading(true)

    const stories = await FormHelper.fakeDelay(
      async () => await api.search(getParamsForSearch(false)),
    )

    const scrollOrigin = window.scrollY
    dispatch({ type: actionTypes.ADD_STORIES, params: { stories } })

    // this in order to get the user view facing to the first new fetched story
    if (window.scrollY > scrollOrigin) {
      window.scrollTo({ behavior: 'auto', top: scrollOrigin, left: 0 })
    }

    setLoading(false)
  }

  return (
    <Layout>
      <StoriesSeo/>
      <SplitBackgroundOverlay padding="96px 0 64px 0" topHalfHeight={65}>
        <SearchHeader
          title="Découvrez nos récits"
          tags={tags}
          tagId={tagId}
          setTagId={setTagId}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          placeholder="Essayer de rechercher 'chamonix' ou bien '6c'"
          loading={loading}
        />
      </SplitBackgroundOverlay>

      <StoriesGrid
        stories={state.stories}
        handleFetchMoreStories={handleFetchMoreStories}
        showFetchMoreStoriesBtn={state.showFetchMoreStoriesBtn}
        loading={loading}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const servicesList = services({ isServer: true })

  const [tags, stories] = await Promise.all([
    servicesList.tags.api.list(),
    servicesList.posts.api.list({ limit: 15 }),
  ])

  return {
    props: { tags, stories },
    revalidate: 2,
  }
}
