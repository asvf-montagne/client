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
      height: 46%;
      background-color: ${props.theme.colors.secondary};
    }
    
    .dark {
      height: 54%;
      display: flex;
      background-color: ${props.theme.colors.tertiary};
    }
  `
)

export const StyledOverlay = styled.div`
  padding: 64px 0 0 0;
`

export const StyledHeading = styled.h1(
  (props) => `
    font-size: 2.25rem;
    font-weight: ${props.theme.typography.weight.semiBold};
    color: ${props.theme.typography.colors.secondary};
    text-align: center;
    margin: 0;
  `
)

export const StyledSponsor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-height: 128px;
   -webkit-filter: grayscale(100%);
   -moz-filter: grayscale(100%);
   -ms-filter: grayscale(100%);
   filter: grayscale(100%);
   filter: gray;
   object-fit: cover;
   transition: ease-in-out .16s filter;
  }
  
  img:hover {
   -webkit-filter: none;
   -moz-filter: none;
   -ms-filter: none;
   filter: none;
   cursor: pointer;
  }
`

export const StyledContact = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: grey;
    border-radius: ${props.theme.borderRadius};
    background-color: ${props.theme.colors.tertiary};
    padding: 58px 72px;
  `
)

export const StyledContactCol = styled.div(
  (props) => `
    display: flex;
    flex-direction: column;
    flex: 1;
    
    h1 {
      font-size: 2.25rem;
      font-weight: ${props.theme.typography.weight.semiBold};
      color: ${props.theme.typography.colors.white};
      margin: 0 0 24px 0;
    }
    
    p {
      font-size: 1.125rem;
      font-weight: ${props.theme.typography.weight.regular};
      color: ${props.theme.typography.colors.gray2};
      margin: 0 0 24px 0;
    }
    
    .icon-group {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      
      .center {
        display: flex;
        flex-direction: column;
      }
    }
  `
)

export const StyledContactIcon = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 38px;
    ${props.filled && `background-color: ${props.theme.colors.primary};` || ''}
    ${props.filled && 'border-radius: 7px;' || ''}
    ${props.filled && 'padding: 12px 15px;' || ''}
    ${props.filled && `border: 2px solid ${props.theme.typography.colors.link};` || ''}
    ${props.filled && 'margin-left: -17px;' || ''}
    
    h3 {
      font-size: 0.875rem;
      font-weight: ${props.theme.typography.weight.regular};
      color: ${props.theme.typography.colors.white};
      margin: 0 0 0 18px;
    }
  `
)

export const StyledContactForm = styled.form(
  (props) => `
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
    height: 580px;
    margin-left: 40px;
    border-radius: 7px;
    background-color: ${props.theme.colors.white};
  `
)
