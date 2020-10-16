import { useRouter } from 'next/router'

function Story() {
  const router = useRouter()
  const { id: storyId } = router.query

  return (
    <>
      <h1>Recit numero: {storyId}</h1>
    </>
  )
}

export default Story
