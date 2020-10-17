import styled from '@emotion/styled'

export const StyledNavigation = styled.nav(
  (props) => `
    display: flex;
    height: 94px;
    background-color: ${props.theme.colors.tertiary};
  `
)

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const StyledGroup = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
`

export const StyledLink = styled.a(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    font-size: 1.125rem;
    color: ${props.theme.typography.colors.white};
    font-weight: ${props.theme.typography.weight.regular};
    text-decoration: none;
    margin-left: 26px;
    ${props.active && `
      border-bottom: 3px solid ${props.theme.typography.colors.link};
      border-top: 3px solid ${props.theme.colors.tertiary};
    `}
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