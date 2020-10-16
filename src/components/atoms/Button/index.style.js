import styled from '@emotion/styled'

export default styled.button(
  (props) => `
    padding: 11px 16px;
    border-radius: 7px;
    background-color: ${props.color === 'blue' ? '#0C75FF' : props.theme.colors.white};
    border: none;
    color: ${props.color === 'blue' ? props.theme.colors.white : '#001768'};
    font-size: ${props.large ? '1.5rem' : '1.125rem'};
    font-weight: ${props.large ? props.theme.typography.weight.semiBold : props.theme.typography.weight.medium};
    cursor: pointer;
  
    :focus {
      outline: none;
      border-color: ${props.color === 'blue' ? '#0C75FF' : props.theme.colors.white};
      box-shadow: 0 0 0 0.2rem rgba(255,255,255,.5);
    }
  `
)
