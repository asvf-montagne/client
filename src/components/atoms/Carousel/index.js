import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import IconChevronRight from '@material-ui/icons/ChevronRight'
import IconChevronLeft from '@material-ui/icons/ChevronLeft'
import { StyledCarouselBox, StyledArrow } from './index.style'
import CarouselProvider, { consts } from 'react-elastic-carousel'

Carousel.propTypes = {
  itemsPerPage: PropTypes.number,
  itemsToScroll: PropTypes.number,
  children: PropTypes.node.isRequired
}

function Carousel({ itemsPerPage = 1, itemsToScroll = 1, children, ...props }) {
  const carouselRef = useRef(null)

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
        ref={carouselRef}
        renderPagination={() => <></>}
        itemsToShow={itemsPerPage}
        itemsToScroll={1}
        renderArrow={arrow}
      >
        {children}
      </CarouselProvider>
    </StyledCarouselBox>
  )
}

export default Carousel
