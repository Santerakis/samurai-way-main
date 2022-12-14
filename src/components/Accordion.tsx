import React from 'react';

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed === false) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        );
    }

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionTitle rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;