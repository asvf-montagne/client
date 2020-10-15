import { useRouter } from 'next/router'

function Story() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Recit numero: {id}</h1>
    </>
  )
}

export default Story
