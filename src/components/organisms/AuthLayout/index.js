import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import IconChevronLeft from '@material-ui/icons/ChevronLeft'
import Container from '../../atoms/Container'
import {
  StyledLayout,
  StyledImage,
  StyledStrip,
  StyledHelper
} from './index.style'

import backgroundMountainAsset from '../../../assets/images/mont-blanc.jpg'

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  helper: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

function AuthLayout({ title, helper, children }) {
  const theme = useTheme()

  return (
    <StyledLayout>
      <div className="left">
        <StyledImage src={backgroundMountainAsset} />
      </div>
      <div className="right">
        <StyledStrip>
          <Container small>
            <a href="/">
              <IconChevronLeft style={{ marginRight: 8, color: theme.typography.colors.link }} />
              Retourner sur le site
            </a>
            <h1>{title}</h1>
          </Container>
        </StyledStrip>

        <Container small>
          {children}
        </Container>

        <StyledHelper>
          <a href={helper.ref}>
            {helper.title}
          </a>
        </StyledHelper>
      </div>
    </StyledLayout>
  )
}

export default AuthLayout
