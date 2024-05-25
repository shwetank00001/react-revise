import React from 'react'

const Tabs = ({children, button}) => {
  return (
      <div>
          <main>{button}</main>
          {children}
      </div>
  );
}

export default Tabs