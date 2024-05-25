import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'

import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

import Tabs from "./components/Tabs";




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
        <>
            <Header />
            <main>
                <FirstSection />
                <SecondSection />

                {/* <section>{ele}</section> */}
            </main>
        </>
    );
}

export default App;
