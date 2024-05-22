import React from 'react'
import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';

const FirstSection = () => {
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
      <section id="core-concepts">
          <h2>Time to get started!</h2>
          <CoreConcept
               
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
          />

          {/* // we are using map here */}

          {ele}

          {/* WE LEARNED A NEW TRICK - IMPORTANT // A shortcut to use spread
          operator- This is alazy version of this hehe xD */}
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
      </section>
  );
}

export default FirstSection