import compoImg from './assets/components.png'
import configImg from './assets/config.png'
import jsxuiImg from './assets/jsx-ui.png'

import { CORE_CONCEPTS } from './data'

const desc = ['Main', 'Fundamental', 'Core']

function randomInt(number){
  return Math.floor(Math.random() * (number+1))
}

const randDesc = desc[randomInt(2)]

const images = [compoImg, configImg, jsxuiImg]

function generateRandomImg(item){
  return Math.floor(Math.random() * (item + 1));
}

const randomImg = images[generateRandomImg(2)]


function Header(){
  return (
      <div>
          <header>
              <img src={randomImg} alt="Stylized atom" />
              <h1>React Essentials</h1>
              <p>
                  {randDesc} React concepts you will need for almost any app you
                  are going to build!
              </p>
          </header>
      </div>
  );
}

function CoreConcept(props){
  return(
    <div>
      <img src= {props.image} />
      <h3>{props.title}</h3>
      <h3>{props.description}</h3>
    </div>
  )
}

const ele = CORE_CONCEPTS.map(function(item){
  return(
    <CoreConcept image = {item.image} title = {item.title} description={item.description} />
  )
})

function App() {
  return (
      <div>
          <Header />
          <main>
              <section id="core-concepts">
                  <h2>Time to get started!</h2>
                  <CoreConcept
                      image={CORE_CONCEPTS[0].image}
                      title={CORE_CONCEPTS[0].title}
                      description={CORE_CONCEPTS[0].description}
                  />

                  // we are using map here
                  {ele}


                  WE LEARNED A NEW TRICK - IMPORTANT // A shortcut to use spread operator- This is alazy version of this hehe xD
                  <CoreConcept {...CORE_CONCEPTS[0]} />
                  <CoreConcept {...CORE_CONCEPTS[1]} />
                  <CoreConcept {...CORE_CONCEPTS[2]} />
              </section>
          </main>
      </div>
  );
}

export default App;
