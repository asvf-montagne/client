import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import {
  StyledCard,
  StyledSpan
} from './index.style'

CardStory.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  preview: PropTypes.string,
  shadow: PropTypes.bool,
  border: PropTypes.bool,
}

function CardStory({
  id,
  title,
  preview,
  image,
  name,
  tags,
  date,
  shadow = false,
  border = false,
  ...props
}) {
  const router = useRouter()

  const handleRedirection = () => {
    router.push(`/stories/${id}`)
  }

  return (
    <StyledCard
      shadow={shadow}
      border={border}
      onClick={handleRedirection}
      {...props}
    >
      <img alt="card-image" src={image} />
      <div>
        <p>{tags}</p>
        <h1>{title}</h1>
        {preview && (
          <p className="preview">{preview}</p>
        )}
        <StyledSpan>
          <p className="name">{name}</p>
          <p className="time">{date}</p>
        </StyledSpan>
      </div>
    </StyledCard>
  )
}

export default CardStory

// import React from 'react'
// import { useRouter } from 'next/router'
// import PropTypes from 'prop-types'
// import {
//   StyledCard,
//   StyledContent,
//   StyledMeta,
// } from './index.style'
//
// CardStoryHighlight.propTypes = {
//   id: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   shadow: PropTypes.bool,
//   style: PropTypes.object,
// }
//
// function CardStoryHighlight({
//                               id,
//                               title,
//                               image,
//                               name,
//                               tags,
//                               date,
//                               shadow,
//                               style,
//                               ...props
//                             }) {
//   const router = useRouter()
//
//   const handleRedirection = () => {
//     router.push(`/stories/${id}`)
//   }
//
//   return (
//     <StyledCard shadow={shadow} onClick={handleRedirection} style={style} {...props}>
//       <img alt="card-image" src={image} />
//       <StyledContent>
//         <p className="tags">{tags}</p>
//         <h1>{title}</h1>
//         <StyledMeta>
//           <p className="name">{name}</p>
//           <p className="time">{date}</p>
//         </StyledMeta>
//       </StyledContent>
//     </StyledCard>
//   )
// }
//
// export default CardStoryHighlight
