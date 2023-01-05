import React from 'react'
import ContextDemoFC from './ContextDemoFC'
import ButtonThemeContext from './ContextDemoFC'

export default function Mainpage() {

  return (
    <ButtonThemeContext.consumer>
      {(theme) => {
        <h1>{theme}</h1>
      }}
    </ButtonThemeContext.consumer>
  )
}
