import styled from '@emotion/styled'

export const StyledInputContainer = styled.div(
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
      }
    }
  `
)

export const StyledInput = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    overflow: hidden;
    border-width: 2px;
    border-style: solid;
    
    .icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 10px;
    }
    
    input {
      flex: 1;
      padding: 14px 0;
      border: none;
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
