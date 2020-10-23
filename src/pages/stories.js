import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import IconChevronDown from '@material-ui/icons/KeyboardArrowDown'
import Button from '../components/atoms/Button'
import SearchGrid from '../components/organisms/SearchGrid'

import mockStories from '../mockData'

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
      <SearchGrid stories={mockStories} />
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
