import styled from '@emotion/styled'

export const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  
  .left {
    width: 50%;
    overflow: hidden;
  }
  
  .right {
    width: 50%;
    overflow:auto;
  }
  
  @media screen and (max-width: 795px) {
    .left {
      display: none;
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
    width: 100%;
    background-color: ${props.theme.colors.secondary};
    padding: 32px 18px 52px 18px;
    
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      a {
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
      
      @media screen and (min-width: 1270px) {
        a {
          margin-left: -88px;
        }
      }
      
      h1 {
        margin: 64px 0 0 0;
        font-size: ${props.theme.typography.size.heading.h1};
        font-weight: ${props.theme.typography.weight.semiBold};
        color: ${props.theme.typography.colors.secondary};
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
