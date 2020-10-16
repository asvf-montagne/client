import styled from '@emotion/styled'

export default styled.input(
  (props) => `
    font-size: 1.125rem;
    font-weight: ${props.theme.typography.weight.regular};
    color: ${props.theme.typography.colors.secondary};
  `
)
