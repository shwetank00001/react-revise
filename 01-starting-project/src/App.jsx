import compoImg from './assets/components.png'
import configImg from './assets/config.png'
import jsxuiImg from './assets/jsx-ui.png'

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

function CoreConcept(){
  
}

function App() {
  return (
      <div>
          <Header />
          <main>
              <section id='core-concepts'>
                  <h2>Time to get started!</h2>
              </section>
          </main>
      </div>
  );
}

export default App;
