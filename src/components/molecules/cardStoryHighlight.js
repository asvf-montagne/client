import React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  
  .overlay {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
`

const StyledPad = styled.div`
  height: 60%;
  width: 60%;
  background-color: #FFF4F0;
  border-radius: 3px;
`

const StyledCard = styled.div`
  cursor: pointer;
  z-index: 100;
  width: 87%;
  height: 92%;
  margin-left: auto
  height: 500px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #FFFFFF;
`

const StyledImage = styled.img`
  width: 100%;
  height: 52%;
  object-fit: cover;
`

const StyledContent = styled.div`
  display: flex;
  padding: 24px;
`

function CardStoryHighlight({ id, title, image, name, tags, date, onClick }) {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <StyledContainer>
      <StyledPad />
      <div className="overlay">
        <StyledCard onClick={handleClick}>
          <StyledImage src={image} />
          <StyledContent>

          </StyledContent>
        </StyledCard>
      </div>
    </StyledContainer>
  )
}

export default CardStoryHighlight
