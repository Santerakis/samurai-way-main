import React from 'react';

function Accordion(props: any) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBoby/>
        </div>
    );
}

function AccordionTitle(props: any) {
    debugger
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

function AccordionBoby() {
    console.log("AccordionTitle rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;