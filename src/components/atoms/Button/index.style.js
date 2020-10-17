import styled from '@emotion/styled'

export default styled.button(
  (props) => `
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 11px 16px;
    border-radius: 7px;
    color: ${
      props.type === 'plain-blue'
        ? props.theme.typography.colors.white
        : props.theme.typography.colors.secondary
    };
    font-size: ${
      (props.size === 'medium' && props.theme.typography.size.heading.h4) ||
      (props.size === 'large' && props.theme.typography.size.heading.h3)
    };
    font-weight: ${props.theme.typography.weight.semiBold};
    background-color: ${
    props.type === 'plain-blue'
        ? props.theme.typography.colors.link
        : props.theme.colors.white
    };
    
    :hover {
      cursor: pointer;
    }
  
    :focus {
      outline: none;
      border-color: ${
        props.type === 'plain-blue'
          ? props.theme.typography.colors.link
          : props.theme.colors.white
      };
      box-shadow: 0 0 0 0.2rem ${
        props.type === 'plain-blue'
          ? 'rgba(12,117,255,.5)'
          : 'rgba(255,255,255,.5)'
      };
    }
    
    ${props.fluid && 'width: 100%;'}
  `
)
