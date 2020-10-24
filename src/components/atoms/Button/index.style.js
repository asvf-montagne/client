import styled from '@emotion/styled'

export default styled.button(
  (props) => `
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 11px 16px;
    border-radius: ${props.theme.borderRadius.medium};
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
      ${props.type === 'minimalist' && 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);'}
      ${props.type === 'minimalist' && `border: 2px solid ${props.theme.colors.cta};`}
    }
  
    :focus {
      outline: none;
      ${props.type !== 'minimalist' && `
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
      `}
    }
    
    ${props.fluid && 'width: 100%;'}
    ${props.type === 'minimalist' && `
      border: 2px solid rgba(97, 114, 255, 0.2);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      transition: ease-in-out 0.12s box-shadow;
    `}
    ${props.border ? 'border: 2px solid rgba(12, 117, 255, 0.2);' : ''}
  `
)
