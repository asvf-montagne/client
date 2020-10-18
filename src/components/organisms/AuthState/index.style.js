import styled from '@emotion/styled'

export default styled.div(
  (props) => `
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h4 {
      margin: 24px 0 0 0;
      font-size: ${props.theme.typography.size.heading.h4};
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.regular};
      text-align: center;
    }
  `
)