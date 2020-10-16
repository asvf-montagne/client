import styled from '@emotion/styled'

export const StyledNavigation = styled.nav`
  height: 94px;
  background-color: #02044A;
  display: flex;
  align-items: center;
`

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const StyledGroup = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    
    a {
      font-size: 1.125rem;
      color: ${props.theme.typography.colors.white};
      font-weight: ${props.theme.typography.weight.regular};
      text-decoration: none;
      margin-left: 26px;
    }
  `
)

export const StyledLogo = styled.a(
  (props) => `
    font-size: 1.5rem;
    color: ${props.theme.typography.colors.white};
    font-weight: ${props.theme.typography.weight.semiBold};
    text-decoration: none;
  `
)