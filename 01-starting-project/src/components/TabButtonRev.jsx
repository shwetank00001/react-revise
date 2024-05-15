import React from 'react'

const TabButtonRev = ({children, onSelect}) => {

    function handleOpen(){
        console.log("1")
    }
  return (
    <button onClick={onSelect} >{children}</button>
  )
}

export default TabButtonRev