import styled from '@emotion/styled'

export default styled.div(
  (props) => `
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0 auto;
  
    @media (min-width: 576px) {
      max-width: ${props.small ? '386px' : '540px'};
    }
  
    @media (min-width: 768px) {
      max-width: ${props.small ? '386px' : '720px'};
    }
  
    @media (min-width: 992px) {
      max-width: ${props.small ? '386px' : '960px'};
    }
  
    @media (min-width: 1200px) {
      max-width: ${props.small ? '386px' : '1040px'};
    }
  `
)
