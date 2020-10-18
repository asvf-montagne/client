import styled from '@emotion/styled'

export const StyledCard = styled.div(
  (props) => `
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    border-radius: ${props.theme.borderRadius.medium};
    background-color: ${props.theme.colors.white};
    ${props.shadow ? 'box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);' : ''}
    ${props.border ? 'border: 2px solid rgba(12, 117, 255, 0.2);' : ''}
    
    :hover {
      ${props.shadow ? 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);' : ''}
      ${props.border ? 'border: 2px solid rgba(12, 117, 255, 1);' : ''}
    }
    
    img {
      height: 52%;
      width: 100%;
      object-fit: cover;
    }
    
    div {
      height: 48%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 18px;
      
      p {
        font-size: ${props.theme.typography.size.paragraph.medium};
        font-weight: ${props.theme.typography.weight.semiBold};
        color: ${props.theme.typography.colors.gray1};
        margin: 0;
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
      
      .preview {
        font-size: ${props.theme.typography.size.paragraph.small};
        font-weight: ${props.theme.typography.weight.medium};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  `
)

export const StyledSpan = styled.span(
  (props) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p {
      font-weight: ${props.theme.typography.weight.medium} !important;
    }
  `
)
