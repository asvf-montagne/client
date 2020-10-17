import styled from '@emotion/styled'

export const StyledFooter = styled.div(
  (props) => `
    width: 100%;
    background-color: ${props.theme.colors.primary};
    padding: 58px 0;
  `
)

export const StyledList = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    ul {
      display: flex;
      flex-direction: column;
      padding: 58px 0;
      
      h3 {
        font-size: ${props.theme.typography.size.heading.h3};
        color: ${props.theme.typography.colors.white};
        font-weight: ${props.theme.typography.weight.medium};
        margin: 0 0 30px 0;
      }
    }
  `
)

export const StyledLink = styled.li(
  (props) => `
    display: flex;
    flex-direction: column;
    margin: 0 0 16px 0;

    a {
      font-size: ${props.theme.typography.size.paragraph.large};
      color: ${props.theme.typography.colors.gray2};
      font-weight: ${props.theme.typography.weight.regular};
      text-decoration: none;
      
      :hover {
        text-decoration: underline;
      }
    }
  `
)