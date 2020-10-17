import styled from '@emotion/styled'

export default styled.label(
  (props) => `
    font-size: ${props.theme.typography.size.paragraph.large};
    font-weight: ${props.theme.typography.weight.regular};
    color: ${props.theme.typography.colors.secondary};
  `
)
