import React from 'react'

const TabRev2 = ({children, onSelect}) => {
  return (
            <button onClick={onSelect}>{children}</button>
  )
}

export default TabRev2