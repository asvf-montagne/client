import styled from '@emotion/styled'

export const StyledTextAreaContainer = styled.div(
  (props) => `
    display: flex;
    flex-direction: column;
    margin-bottom: ${props.error ? '13px' : '36px'};
    
    .error {
      font-size: ${props.theme.typography.size.paragraph.medium};
      font-weight: ${props.theme.typography.weight.regular};
      color: ${props.theme.typography.colors.error};
      text-decoration: none;
      margin: 6px 0 0 0;
    }
  `
)

export const StyledLabelSpan = styled.span(
  (props) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 24px 0;
    
    .link {
      font-size: ${props.theme.typography.size.paragraph.medium};
      font-weight: ${props.theme.typography.weight.regular};
      color: ${props.theme.typography.colors.link};
      text-decoration: none;
      
      :hover {
        text-decoration: underline;
        color: ${props.theme.typography.colors.linkLighter};
      }
    }
  `
)

export const StyledTextarea = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    overflow: hidden;
    border-width: 2px;
    border-style: solid;
    
    textarea {
      flex: 1;
      padding: 14px;
      border: none;
      resize: none;
      height: 128px;
      font-size: ${props.theme.typography.size.paragraph.medium};
      font-weight: ${props.theme.typography.weight.regular};
      color: ${props.theme.typography.colors.secondary};
      
      ::placeholder {
        color: ${props.theme.typography.colors.gray2};
      }
      
      :focus {
        outline: none;
      }
    }
  `
)
