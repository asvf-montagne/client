import styled from '@emotion/styled'

export default styled.div(
  (props) => `
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    width: 304px;
    
    @media screen and (max-width: 1200px) {
      max-width: ${props.small ? '386px' : '1040px'};
    }

    @media screen and (max-width: 992px) {
      max-width: ${props.small ? '386px' : '960px'};
    }

    @media screen and (max-width: 768px) {
      max-width: ${props.small ? '386px' : '720px'};
    }
  `
)
