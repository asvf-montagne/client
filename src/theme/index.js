import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from './theme'

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)

export default ThemeProvider