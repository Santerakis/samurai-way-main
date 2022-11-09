import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";

function hello() {
    debugger
    alert("Hello it-kamasutra")
}

//hello();

function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle />
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return (
        <>This is App component !</>
    )
}



export default App;
