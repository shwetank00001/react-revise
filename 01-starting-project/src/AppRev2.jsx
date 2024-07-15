import React from 'react'
import TabRev2 from './components/TabRev2'
import { EXAMPLES } from './data'

const AppRev2 = () => {
    const [value, setValue] = React.useState()

    function handleValue(selectedValue) {
        setValue(selectedValue);
    }

    console.log(value)

    let tabContent = "The details are..."
    if(value){
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
          <div>
              <h3>Select a button and see it's details</h3>
              <TabRev2 selectedValue={value === "jsx"} onSelect={()=> handleValue("jsx")}>jsx</TabRev2>
              <TabRev2 selectedValue={value === "components"} onSelect={()=> handleValue("components")} >components</TabRev2>
              <TabRev2 selectedValue={value === "props"} onSelect={()=> handleValue("props")}>props</TabRev2>
              <TabRev2 selectedValue={value === "state"} onSelect={()=> handleValue("state")}>state</TabRev2>
          </div>

          <div>
            {tabContent}
          </div>
      </div>
  );
}

export default AppRev2