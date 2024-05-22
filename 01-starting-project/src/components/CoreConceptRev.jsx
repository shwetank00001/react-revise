import React from "react";

function CoreConcept(props) {
    return (
        <div>
            <img src={props.image} />
            <h3>{props.title}</h3>
            <h3>{props.title1}</h3>
            <h3>{props.description}</h3>
        </div>
    );
}

export default CoreConcept;
