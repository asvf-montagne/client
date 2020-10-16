import styled from '@emotion/styled'

export const StyledCarouselBox = styled.div`
  margin: 92px 0;
  width: 100%;
`

export const StyledArrow = styled.button(
  (props) => `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin: auto 0;
    background-color: ${props.theme.colors.tertiary};
    border: none;
    
    :hover {
      cursor: pointer
    }
  `
)

