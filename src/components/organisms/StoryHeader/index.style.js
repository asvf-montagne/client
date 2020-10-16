import styled from '@emotion/styled'

export const StyledOverlayBox = styled.div`
  width: 100%;
  z-index: 10;
  position: relative;

  .underlay {
    z-index: -10;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
`

export const StyledBackground = styled.div(
  (props) => `
    height: 100%;
    
    .light {
      display: flex;
      height: 60%;
      background-color: ${props.theme.colors.secondary};
    }
    
    .dark {
      height: 40%;
      display: flex;
      background-color: ${props.theme.colors.white};
    }
  `
)

export const StyledOverlay = styled.div`
  padding: 32px 0;
`

export const StyledHead = styled.div(
  (props) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
    
    .tags {
      font-size: 1.125rem;
      color: ${props.theme.typography.colors.link};
      font-weight: ${props.theme.typography.weight.regular};
      margin: 0
    }
    
    h1 {
      font-size: 3rem;
      color: ${props.theme.typography.colors.primary};
      font-weight: ${props.theme.typography.weight.semiBold};
      margin: 32px 0 52px 0;
    }
    
    .name {
      font-size: 1.125rem;
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.semiBold};
      margin: 0 0 4px 0;
    }
    
    .time {
      font-size: 1.125rem;
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.regular};
      margin: 0
    }
  `
)

export const StyledImage = styled.div(
  (props) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
      margin: 64px 0 18px 0;
      max-height: 640px;
      width: 100%;
    }
    
    p {
      font-size: 1.125rem;
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.regular};
      text-decoration: underline;
      margin: 0;
    }
  `
)