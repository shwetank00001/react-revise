import React from 'react'

const TabButtonRev = ({children, onSelect, selectedValue}) => {
    const buttonColor = {
        backgroundColor: selectedValue?"Yellow" : "White"
    }

  return (
    <button style={buttonColor} onClick={onSelect} >{children}</button>
  )
}

export default TabButtonRev