import React from 'react';
import './App.css';

function hello() {
    debugger
    alert("Hello it-kamasutra")
}

//hello();

function App() {
    //debugger
    return (
        <div>
            <Apptitle />
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function Apptitle() {
    return (
        <>This is App component !</>
    )
}

function Rating() {
    console.log("Rating rendered")
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}

function Accordion() {
    console.log("Accordion rendered")
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

function Star() {
    console.log("Star rendered")
    return <div>star</div>

}


export default App;
