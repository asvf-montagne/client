import React from 'react'
import PropTypes from 'prop-types'
import IconChevronRight from '@material-ui/icons/ChevronRight'
import IconChevronLeft from '@material-ui/icons/ChevronLeft'
import { StyledCarouselBox, StyledArrow } from './index.style'
import CarouselProvider, { consts } from 'react-elastic-carousel'

Carousel.propTypes = {
  itemsToShow: PropTypes.number,
  children: PropTypes.node.isRequired
}

function Carousel({ itemsToShow = 1, children, ...props }) {
  const arrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV
    return (
      <StyledArrow onClick={onClick} disabled={isEdge}>
        {pointer
          ? <IconChevronLeft style={{ color: 'white' }} />
          : <IconChevronRight style={{ color: 'white' }} />
        }
      </StyledArrow>
    )
  }

  return (
    <StyledCarouselBox {...props}>
      <CarouselProvider
        renderPagination={() => <></>}
        itemsToShow={itemsToShow}
        itemsToScroll={1}
        renderArrow={arrow}
      >
        {children}
      </CarouselProvider>
    </StyledCarouselBox>
  )
}

export default Carousel
