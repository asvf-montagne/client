import styled from '@emotion/styled'

export const StyledSuggested = styled.div(
  (props) => `
    background-color: ${props.theme.colors.secondary};
    padding: 92px 0;
  `
)

export const StyledTitle = styled.h1(
  (props) => `
    font-size: ${props.theme.typography.size.heading.h1};
    font-weight: ${props.theme.typography.weight.semiBold};
    color: ${props.theme.typography.colors.secondary};
    text-align: center;
    margin: 0;
    margin-bottom: 92px;
  `
)

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledCardContainer = styled.div`
  max-width: 350px;
`
