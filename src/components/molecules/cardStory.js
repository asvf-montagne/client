import React from 'react'
import styled from '@emotion/styled'

const StyledCard = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  margin-bottom: 42px;
  flex-direction: column;
  border-bottom: 1px solid #E5E5E5;
`

const StyledTitle = styled.h1`
  font-size: 1.875rem;
  color: #001768;
  font-weight: 500;
  margin: 0
`

const StyledMeta = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 26px 0;
  
  h2 {
    font-size: 1.0625rem;
    color: #6E798C;
    font-weight: 400;
    margin: 0
  }
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledTags = styled.p`
  font-size: 0.6875rem;
  color: #6E798C;
  font-weight: 600;
  margin: 0
`

const StyledDate = styled.p`
  font-size: 0.6875rem;
  color: #6E798C;
  font-weight: 400;
  margin: 0 0 0 30px;
`

function CardStory({ id, title, name, tags, date, onCLick }) {
  const handleClick = () => {
    onCLick(id)
  }

  return (
    <StyledCard onClick={handleClick}>
      <StyledTitle>{title}</StyledTitle>
      <StyledMeta>
        <h2>{name}</h2>
        <div>
          <StyledTags>{tags}</StyledTags>
          <StyledDate>{date}</StyledDate>
        </div>
      </StyledMeta>
    </StyledCard>
  )
}

export default CardStory
