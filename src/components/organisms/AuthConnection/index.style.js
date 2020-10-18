import styled from '@emotion/styled'

export default styled.div(
  (props) => `
    display: flex;
    flex-direction: column;
    
    img {
      height: 22px;
      width: auto;
      margin-right: 16px;
    }
  
    p {
      padding: 32px 0;
      font-size: ${props.theme.typography.size.paragraph.large};
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.regular};
      text-align: center;
    }
  `
)