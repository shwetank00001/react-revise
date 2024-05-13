import React from 'react'

// const TabButton = (props) => {
const TabButton = ({children, onSelect, isSelected }) => {

  const buttonBg = {
    backgroundColor:isSelected ? "#222222" : "#ffffff",
    padding: "5px",
    borderRadius: "10px",
    border:"0",
    margin: "2px"
  }

  return (
      <li>
          <button style={buttonBg} onClick={onSelect}>
              {children}
          </button>
      </li>
  );
}

export default TabButton