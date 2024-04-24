import React from 'react'



function Proptest(props){

        const [value, setValue] = React.useState(false);

        function toggle() {
            setValue(!value);
        }


    return (
        <div>
            <h3>{props.question}</h3>
            {value && <h3>{props.answer}</h3>}
            <button onClick={toggle}>
                {value ? "Hide Answer" : "Show Answer"}
            </button>
            <hr></hr>
        </div>       
    );
}

const Ternary = () => {

    // const [value, setValue ] = React.useState(true)
    
    // function toggle(){
    //     setValue(!value)
    // }

    // const top = value ? "Hi" : "Bye"



  return (
      <div>
          {/* <h3>We will move it back and forth</h3>
          {top}
          <button onClick={toggle}>Lol</button>

          {value && <p>only if the button is true</p>} */}
          <Proptest 
            question = "WHat is your age?"
            answer = "25"
          />
      </div>
  );
}

export default Ternary