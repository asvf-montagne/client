import styled from '@emotion/styled'

export const StyledNavigationContainer = styled.nav(
  (props) => `
    display: flex;
    height: 94px;
    background-color: ${props.theme.colors.tertiary};
  `
)

export const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const StyledLogo = styled.a(
  (props) => `
    font-size: 1.5rem;
    color: ${props.theme.typography.colors.white};
    font-weight: ${props.theme.typography.weight.semiBold};
    text-decoration: none;
  `
)

export const StyledList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledLink = styled.li(
  (props) => `
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 26px;
    
    a {
      font-size: ${props.theme.typography.size.paragraph.large};
      color: ${props.theme.typography.colors.white};
      font-weight: ${props.theme.typography.weight.regular};
      text-decoration: none;
    }
    
    ${props.active && `
      border-bottom: 3px solid ${props.theme.typography.colors.link};
      border-top: 3px solid ${props.theme.colors.tertiary};
    `}
  `
)