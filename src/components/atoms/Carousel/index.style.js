import styled from '@emotion/styled'

export const StyledCarouselBox = styled.div`
  margin: 92px 0;
`

export const StyledArrow = styled.button(
  (props) => `
    position: absolute;
    z-index: 10;
    top: calc(50% - 15px);
    width: 24px;
    height: 24px;
    cursor: pointer;
    ${props.left && 'left: 15px'}
    ${props.right && 'right: 15px'}
  `
)

