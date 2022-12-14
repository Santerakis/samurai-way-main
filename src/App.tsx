import React from 'react';
import './App.css';
import Accordion___EDIT from "./components/Accordion";
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
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion___EDIT title={"Menu"} collapsed={true}/>
            <Accordion___EDIT title={"Friends"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
