import styled from '@emotion/styled'

export const StyledCard = styled.div(
  (props) => `
    cursor: pointer;
    width: 100%;
    display: flex;
    margin-bottom: 42px;
    flex-direction: column;
    border-bottom: 1px solid ${props.theme.typography.colors.gray3};
    
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
    align-items: center;
    justify-content: space-between;
    padding: 28px 0 26px 0;
    
    p {
      font-size: ${props.theme.typography.size.paragraph.medium};
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.medium};
      margin: 0
    }
    
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `
)

export const StyledSpan = styled.span(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    .tags {
      font-size: ${props.theme.typography.size.paragraph.medium};
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.semiBold};
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
