import React from 'react'
import TabButtonRev from './components/TabButtonRev'
import { EXAMPLES } from './data';

const AppRev = () => {

  const [ value, setValue ] = React.useState('')

  function handleSelect(selectedValue) {
      setValue(selectedValue)
  }

  console.log(value)


  let tabContent = <p>Please select a tab</p>

  if (value) {
      tabContent = (
          <div>
              <h3>{EXAMPLES[value].title}</h3>
              <p>{EXAMPLES[value].description}</p>
              <pre>
                  <code>{EXAMPLES[value].code}</code>
              </pre>
          </div>
      );
  }

  return (
    <div>
      <h4>
        here we will have 4 buttons
      </h4>

      <TabButtonRev onSelect= { () => {handleSelect("jsx");}} >jsx</TabButtonRev>
      <TabButtonRev onSelect= { () => {handleSelect("components");}}>components</TabButtonRev>
      <TabButtonRev onSelect= { () => {handleSelect("state");}}>state</TabButtonRev>
      <TabButtonRev onSelect= { () => {handleSelect("props");}}>props</TabButtonRev>

      <div>
        {tabContent}
      </div>
    </div>
  )
}

export default AppRev