import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton';


import { useState } from 'react';


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

    const [dynamicContent, setDynamicContent] = useState();

    // sending this handleclick to tabButton compo using onSelect prop keyword. Using it on the child by destructuing and setting it to onClick.
    function handleClick(selectedVal) {
        setDynamicContent(selectedVal);
        // {
        //     console.log(selectedVal)
        //     if (selectedVal == "jsx") {
        //     setDynamicContent('This is jsx')
        //     } else if (selectedVal == "components") {
        //     setDynamicContent("Components it is")
        //     }
        //     else if (selectedVal == "props") {
        //     setDynamicContent("Props boy")
        //     }
        //     else if (selectedVal == "state") {
        //     setDynamicContent("We updated the DOM using state")
        //     }
        // }
    }

    console.log(dynamicContent);

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
                    WE LEARNED A NEW TRICK - IMPORTANT // A shortcut to use
                    spread operator- This is alazy version of this hehe xD
                    <CoreConcept {...CORE_CONCEPTS[0]} />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                </section>

                <section id="examples">
                    <h2>examples</h2>
                    JSX, anything written in between of A REACT component is a
                    childre
                    <main>
                        <TabButton
                            onSelect={() => {
                                handleClick("jsx");
                            }}
                        >
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleClick("components")}>
                            Component
                        </TabButton>
                        <TabButton onSelect={() => handleClick("props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleClick("state")}>
                            State
                        </TabButton>
                    </main>
                    {/* {dynamicContent} */}
                    {/* HEre we can use a data dynamically from our data.js file. */}
                    {!dynamicContent ? (
                        <p>Please select a tab</p>
                    ) : (
                        <div id="tab-content">
                            <h3>{EXAMPLES[dynamicContent].title}</h3>
                            <p>{EXAMPLES[dynamicContent].description}</p>
                            <pre>
                                <code>{EXAMPLES[dynamicContent].code}</code>
                            </pre>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
