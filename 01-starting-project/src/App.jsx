import { CORE_CONCEPTS } from './data'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton';


function App() {

  const ele = CORE_CONCEPTS.map(function (item) {
      return (
          <CoreConcept
              image={item.image}
              title={item.title}
              description={item.description}
          />
      );
  });
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
                  WE LEARNED A NEW TRICK - IMPORTANT // A shortcut to use spread
                  operator- This is alazy version of this hehe xD
                  <CoreConcept {...CORE_CONCEPTS[0]} />
                  <CoreConcept {...CORE_CONCEPTS[1]} />
                  <CoreConcept {...CORE_CONCEPTS[2]} />
              </section>

              <section id='examples'>
                <h2>examples</h2>

                JSX, anything written in between of A REACT component is a childre
                <main>
                  <TabButton>JSX</TabButton>
                  <TabButton>Component</TabButton>
                  <TabButton>Props</TabButton>
                  <TabButton>State</TabButton>
                </main>

              </section>
          </main>
      </div>
  );
}

export default App;
