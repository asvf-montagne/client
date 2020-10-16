import styled from '@emotion/styled'

export const StyledGradient = styled.div`
  flex: 1;
  padding: 74px 0 126px 0;
  background: rgb(255,244,240);
  background: linear-gradient(180deg, rgba(255,244,240,1) 0%, rgba(255,255,255,1) 100%);
`

export const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 34px;
`

export const StyledContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  
  .overlay {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    left: 0px;
    overflow: hidden;
  }
`

export const StyledPad = styled.div(
  (props) => `
    height: 75%;
    width: 75%;
    background-color: ${props.theme.colors.secondary};
    border-radius: ${props.theme.borderRadius};
  `
)

export const StyledCardContainer = styled.div`
  z-index: 100;
  width: 87%;
  height: 92%;
  margin-left: auto;
`

export const StyledList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  a {
    text-decoration: none;
    color: #0C75FF;
    font-size: 1.0625rem;
    font-weight: 500;
  }
`
