import styled from '@emotion/styled'

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
    height: 60%;
    width: 60%;
    background-color: ${props.theme.colors.secondary};
    border-radius: ${props.theme.borderRadius};
  `
)

export const StyledCard = styled.div(
  (props) => `
    cursor: pointer;
    z-index: 100;
    width: 87%;
    height: 92%;
    margin-left: auto;
    border-radius: ${props.theme.borderRadius};
    overflow: hidden;
    background-color: ${props.theme.colors.white};
  `
)

export const StyledImage = styled.img`
  width: 100%;
  height: 52%;
  object-fit: cover;
`

export const StyledContent = styled.div`
  display: flex;
  padding: 24px 18px 32px 18px;
  display: flex;
  height: 48%;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledTags = styled.p(
  (props) => `
    font-size: 0.6875rem;
    color: ${props.theme.typography.colors.gray1};
    font-weight: ${props.theme.typography.weight.semiBold};
    margin: 0
  `
)

export const StyledTitle = styled.h1(
  (props) => `
    font-size: 1.875rem;
    color: ${props.theme.typography.colors.secondary};
    font-weight: ${props.theme.typography.weight.medium};
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `
)

export const StyledMeta = styled.span(
  (props) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    h2 {
      font-size: 1.0625rem;
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.regular};
      margin: 0
    }
  `
)

export const StyledDate = styled.p(
  (props) => `
    font-size: 0.6875rem;
    color: ${props.theme.typography.colors.gray1};
    font-weight: ${props.theme.typography.weight.regular};
    margin: 0 0 0 30px;
  `
)
