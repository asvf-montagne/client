import styled from '@emotion/styled'

export const StyledCard = styled.div(
  (props) => `
    flex: 1;
    height: 100%;
    max-width: 424px;
    cursor: pointer;
    border-radius: ${props.theme.borderRadius};
    overflow: hidden;
    background-color: ${props.theme.colors.white};
    ${props.shadow ? 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)' : ''}
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
    margin: 32px 0;
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
