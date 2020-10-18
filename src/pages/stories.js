import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import IconChevronDown from '@material-ui/icons/KeyboardArrowDown'
import Button from '../components/atoms/Button'
import SearchGrid from '../components/organisms/SearchGrid'

const mockSearchedStories = [
  {
    id: '0',
    title: `Goulotte Zia et traversée d'arête !`,
    images: [
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'Pellentesque arcu dictumst sit imperdiet viverra mauris enim'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wewe'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wqwqqwqw'
      },
    ],
    name: 'Martin',
    tags: 'Ski / Alpinisme',
    date: '3 days ago',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consequat purus tempor quam phasellus. Pellentesque arcu dictumst sit imperbvbnjkljhgvbnmkjuhgbnjk hbnj uhbnmkiu hbnmkiu ijk iuh njkiuh jkiuhjk iuhj',
  },
  {
    id: '1',
    title: 'Pointe de Colomban 2455m (Lauzière)',
    images: [
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'Pellentesque arcu dictumst sit imperdiet viverra mauris enim'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wewe'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wqwqqwqw'
      },
    ],
    name: 'Thomas',
    tags: 'Ski / Alpinisme',
    date: '6 days ago',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consequat purus tempor quam phasellus. Pellentesque arcu dictumst sit imperbvbnjkljhgvbnmkjuhgbnjk hbnj uhbnmkiu hbnmkiu ijk iuh njkiuh jkiuhjk iuhj',
  },
  {
    id: '2',
    title: 'Crête de Brouffier (Taillefer)',
    images: [
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'Pellentesque arcu dictumst sit imperdiet viverra mauris enim'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wewe'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wqwqqwqw'
      },
    ],
    name: 'Maud',
    tags: 'Ski / Alpinisme',
    date: '1 week ago',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consequat purus tempor quam phasellus. Pellentesque arcu dictumst sit imperbvbnjkljhgvbnmkjuhgbnjk hbnj uhbnmkiu hbnmkiu ijk iuh njkiuh jkiuhjk iuhj',
  },
  {
    id: '4',
    title: `Goulotte Zia et traversée d'arête !`,
    images: [
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'Pellentesque arcu dictumst sit imperdiet viverra mauris enim'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wewe'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wqwqqwqw'
      },
    ],
    name: 'Martin',
    tags: 'Ski / Alpinisme',
    date: '3 days ago',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consequat purus tempor quam phasellus. Pellentesque arcu dictumst sit imperbvbnjkljhgvbnmkjuhgbnjk hbnj uhbnmkiu hbnmkiu ijk iuh njkiuh jkiuhjk iuhj',
  },
  {
    id: '5',
    title: 'Pointe de Colomban 2455m (Lauzière)',
    images: [
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'Pellentesque arcu dictumst sit imperdiet viverra mauris enim'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wewe'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wqwqqwqw'
      },
    ],
    name: 'Thomas',
    tags: 'Ski / Alpinisme',
    date: '6 days ago',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consequat purus tempor quam phasellus. Pellentesque arcu dictumst sit imperbvbnjkljhgvbnmkjuhgbnjk hbnj uhbnmkiu hbnmkiu ijk iuh njkiuh jkiuhjk iuhj',
  },
  {
    id: '6',
    title: 'Crête de Brouffier (Taillefer)',
    images: [
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'Pellentesque arcu dictumst sit imperdiet viverra mauris enim'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wewe'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/AUujny9JfyXZfPKgAeZgy5-1200-80.jpg',
        caption: 'wqwqqwqw'
      },
    ],
    name: 'Maud',
    tags: 'Ski / Alpinisme',
    date: '1 week ago',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consequat purus tempor quam phasellus. Pellentesque arcu dictumst sit imperbvbnjkljhgvbnmkjuhgbnjk hbnj uhbnmkiu hbnmkiu ijk iuh njkiuh jkiuhjk iuhj',
  },
]

export const StyledStories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Stories() {
  const theme = useTheme()
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleFetchMore = (event) => {
    event.preventDefault()
    console.log('fetch more')
  }

  return (
    <StyledStories>
      <SearchGrid stories={mockSearchedStories} />
      <Button
        border
        onClick={handleFetchMore}
        type="minimalist"
        style={{ marginBottom: 92 }}
      >
        Charger plus
        <IconChevronDown style={{ color: theme.typography.colors.primary, marginLeft: 8 }} />
      </Button>
    </StyledStories>
  )
}

export default Stories
