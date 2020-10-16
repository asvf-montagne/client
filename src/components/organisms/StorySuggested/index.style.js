import styled from '@emotion/styled'

export const StyledSuggested = styled.div(
  (props) => `
    background-color: ${props.theme.colors.secondary};
    padding: 92px 0;
  `
)

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const StyledHeading = styled.h1(
  (props) => `
    font-size: 2.25rem;
    font-weight: ${props.theme.typography.weight.semiBold};
    color: ${props.theme.typography.colors.secondary};
    text-align: center;
    margin: 0;
    margin-bottom: 92px;
  `
)
