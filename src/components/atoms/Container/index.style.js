import styled from '@emotion/styled'

export default styled.div(
  (props) => `
    width: 100%;
    padding: 0;
    margin: 0 auto;

    @media screen and (min-width: 992px) {
      max-width: ${props.small ? '386px' : '1040px'};
    }

    @media screen and (max-width: 992px) and (min-width: 768px) {
      max-width: ${props.small ? '304px' : '960px'};
    }

    @media screen and (max-width: 768px) {
      max-width: ${props.small ? '304px' : '720px'};
    }
  `
)
