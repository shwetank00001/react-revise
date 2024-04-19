import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function PropsTest(props){
  
  const [isTrue, setIstrue] = useState(true);

  return (
      <div>
          <h4>hi my name is {props.name}</h4>
          <h5>And my age is {props.age}</h5>
          <button onClick={() => {}}>is this true</button>
      </div>
  );
}

function App() {

  return (
    <div>
      <PropsTest 
        name ="Shwetank"
        age = '25'
        value = "false"
      />
      <PropsTest 
        name ="Shwetank22"
        age = '245'
        value = "true"
      />
      <PropsTest 
        name ="Shwetank44"
        age = '257'
      />
    </div>
  )
}

export default App
