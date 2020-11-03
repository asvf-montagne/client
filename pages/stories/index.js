import React, { useReducer, useState } from 'react';
import Layout from '@components/atoms/Layout';
import SplitBackgroundOverlay from "@components/atoms/SplitBackgroundOverlay";
import SearchHeader from "@components/molecules/SearchHeader";
import StoriesGrid from '@components/organisms/StoriesGrid';
import services from "../../services";

const StoriesActions = {
  SET_STORIES: 'SET_STORIES',
  ADD_STORIES: 'ADD_STORIES',
}

function StoriesReducer(state, action) {
  switch (action.type) {
    case StoriesActions.SET_STORIES:
      return { stories: action.params.stories, showFetchMoreStoriesBtn: action.params.stories.length >= 15 };
    case StoriesActions.ADD_STORIES:
      const newStories = [...state.stories, ...action.params.stories]
      return { stories: newStories, showFetchMoreStoriesBtn: action.params.stories.length >= 15 };
    default:
      throw new Error(`action unorganized ${action.type} with parameter ${action.params}`);
  }
}

export default function Stories({ tags, stories }) {
  const [search, setSearch] = useState('');
  const [tagId, setTagId] = useState('ALL');
  const [state, dispatch] = useReducer(StoriesReducer, { stories, showFetchMoreStoriesBtn: true })

  function getParamsForSearch(isSet = true) {
    const params = { start: isSet ? 0 : state.stories.length }
    if (tagId !== 'ALL') {
      params.tagId = tagId
    }

    if (search.trim() !== '') {
      params.query = search.trim()
    }

    return params;
  }

  const handleSearch = async () => {
    const posts = await services().posts.search(getParamsForSearch())

    dispatch({ type: StoriesActions.SET_STORIES, params: { stories: posts } })
  }

  const handleFetchMoreStories = async () => {
    const posts = await services().posts.search(getParamsForSearch(false))

    const scrollOrigin = window.scrollY
    dispatch({ type: StoriesActions.ADD_STORIES, params: { stories: posts } })

    // this in order to get the user view facing to the first new fetched story
    if (window.scrollY > scrollOrigin) {
      window.scrollTo({ behavior: "auto", top: scrollOrigin, left: 0 })
    }
  }


  return (
    <Layout>
      <SplitBackgroundOverlay padding="96px 32px 64px 32px" topHalfHeight={65}>
        <SearchHeader
          title="Découvrez nos récits"
          tags={tags}
          tagId={tagId}
          setTagId={setTagId}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          placeholder="Essayer de rechercher 'chamonix' ou bien '6c'"
        />
      </SplitBackgroundOverlay>

      <StoriesGrid
        stories={state.stories}
        handleFetchMoreStories={handleFetchMoreStories}
        showFetchMoreStoriesBtn={state.showFetchMoreStoriesBtn}
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
