import styled from '@emotion/styled'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;

  .column {
    width: 50%;
    overflow: hidden;
  }
  
  @media screen and (max-width: 576px) {
    .left {
      width: 0%;
    }
    
    .right {
      width: 100%;
    }
  }
`

export const StyledImage = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`

export const StyledStrip = styled.div(
  (props) => `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: ${props.theme.colors.secondary};
    padding: 32px 0 52px 0;
    
    a {
      margin-left: 88px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      color: ${props.theme.typography.colors.link};
      font-size: ${props.theme.typography.size.h4};
      font-weight: ${props.theme.typography.weight.medium};
      
      :hover {
        color: ${props.theme.typography.colors.linkLighter};
      }
    }
    
    div {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      margin-top: 64px;
      
      h1 {
        font-size: ${props.theme.typography.size.heading.h1};
        font-weight: ${props.theme.typography.weight.semiBold};
        color: ${props.theme.typography.colors.secondary};
        margin: 0;
      }
    }
  `
)

export const StyledHelper = styled.span(
  (props) => `
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 28px 0;
    
    a {
      padding: 4px 8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      color: ${props.theme.typography.colors.link};
      font-size: ${props.theme.typography.size.h4};
      font-weight: ${props.theme.typography.weight.medium};
      
      :hover {
        color: ${props.theme.typography.colors.linkLighter};
      }
    }
  `
)
