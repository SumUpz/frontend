import React, { useState } from 'react'

export const TextContext = React.createContext('')

export const TextProvider = (props) => {
  const [text, setText] = useState('')
  return (
    <TextContext.Provider
      value={{
        text: text,
        setText: setText,
      }}
    >
      {props.children}
    </TextContext.Provider>
  )
}
