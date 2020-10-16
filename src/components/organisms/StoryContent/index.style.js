import styled from '@emotion/styled'

export const StyledContent = styled.div`
  margin: 92px 0;
`

export const StyledText = styled.p(
  (props) => `
    margin: 0;
    font-size: 1.5rem;
    font-weight: ${props.theme.typography.weight.medium};
    font-color: ${props.theme.typography.colors.primary};
  `
)