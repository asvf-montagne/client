import React from 'react'
import Label from '../../atoms/Label'
import StyledInput from './index.style'

function Input({ label }) {
  return (
    <>
      <Label>{label}</Label>
      <StyledInput />
    </>
  )
}

export default Input
