import styled from '@emotion/styled'
import NavBar from '../components/molecules/NavBar'
import backgroundSrc from '../assets/images/cervin_mountain_c7a2ba29c6.jpg'

const StyledBackgroundImage = styled.img`
  width: 100%;
`

function Home() {
  return (
    <>
      <NavBar />
      <StyledBackgroundImage src={backgroundSrc} />
    </>
  )
}

export default Home
