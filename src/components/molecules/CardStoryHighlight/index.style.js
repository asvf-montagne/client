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
  height: 52%;
  width: 100%;
  object-fit: cover;
`

export const StyledContent = styled.div(
  (props) => `
    height: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 18px 32px 18px;
    
    .tags {
      font-size: ${props.theme.typography.size.paragraph.medium};
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.semiBold};
      margin: 0
    }
    
    h1 {
      font-size: ${props.theme.typography.size.heading.h2};
      color: ${props.theme.typography.colors.secondary};
      font-weight: ${props.theme.typography.weight.medium};
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `
)

export const StyledMeta = styled.span(
  (props) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .name {
      font-size: ${props.theme.typography.size.paragraph.medium};
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.medium};
      margin: 0
    }
    
    .time {
      font-size: ${props.theme.typography.size.paragraph.medium};
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.medium};
      margin: 0 0 0 30px;
    }
  `
)