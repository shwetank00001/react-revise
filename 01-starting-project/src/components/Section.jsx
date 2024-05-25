import React from 'react'

// Proxy prop component
const Section = ({ title, children, ...props}) => {
  return (
    <section id='id'>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section