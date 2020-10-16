import styled from '@emotion/styled'

export const StyledInputBox = styled.div(
  (props) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    border-width: 2px;
    border-style: solid;
    overflow: hidden;
    margin-bottom: 35px;
  `
)

export const StyledInput = styled.textarea(
  (props) => `
    flex: 1;
    padding: 14px;
    border: none;
    resize: none;
    height: 128px;
    font-weight: ${props.theme.typography.weight.regular};
    color: ${props.theme.typography.colors.secondary};
    
    ::placeholder {
      color: ${props.theme.typography.colors.gray2};
    }
    
    :focus {
      outline: none;
    }
  `
)
