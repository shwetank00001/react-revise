import React from 'react'
import TabButton from "./TabButton";
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';

const SecondSection = () => {
    const [dynamicContent, setDynamicContent] = React.useState();

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

        let tabContent = <p>Please select a tab!</p>;

        if (dynamicContent) {
            tabContent = (
                <div id="tab-content">
                    <h3>{EXAMPLES[dynamicContent].title}</h3>
                    <p>{EXAMPLES[dynamicContent].description}</p>
                    <pre>
                        <code>{EXAMPLES[dynamicContent].code}</code>
                    </pre>
                </div>
            );
        }

    return (
        <Section title={"Examples"} id="examples">
            JSX, anything written in between of A REACT component is a childre
            <main>
                {/* THis is called as JSX slots */}
                {/* We are passing Multiple JSX values as a single Route element, So we can use all the button data in the child compo */}
                <Tabs
                    button={
                        <>
                            <TabButton
                                isSelected={dynamicContent === "jsx"}
                                onSelect={() => {
                                    handleClick("jsx");
                                }}
                            >
                                JSX
                            </TabButton>
                            <TabButton
                                isSelected={dynamicContent === "components"}
                                onSelect={() => handleClick("components")}
                            >
                                Component
                            </TabButton>
                            <TabButton
                                isSelected={dynamicContent === "props"}
                                onSelect={() => handleClick("props")}
                            >
                                Props
                            </TabButton>
                            <TabButton
                                isSelected={dynamicContent === "state"}
                                onSelect={() => handleClick("state")}
                            >
                                State
                            </TabButton>
                        </>
                    }
                >
                    {tabContent}
                </Tabs>
            </main>
        </Section>
    );
}

export default SecondSection


            // {
            //     /* {dynamicContent} */
            // }
            // {
            //     /* HEre we can use a data dynamically from our data.js file. */
            // }
            // {
            //     /* {!dynamicContent ? (
            //             <p>Please select a tab</p>
            //         ) : (
            //             <div id="tab-content">
            //                 <h3>{EXAMPLES[dynamicContent].title}</h3>
            //                 <p>{EXAMPLES[dynamicContent].description}</p>
            //                 <pre>
            //                     <code>{EXAMPLES[dynamicContent].code}</code>
            //                 </pre>
            //             </div>
            //         )} */
            // }