import { useState } from "react";
import Title from "../Title"; 
import Button from "../Button";
import "./index.css";


const Counter = () => {
let [counter, setCounter]= useState(0);
const handleIncrease = () => setCounter(++counter);
const handleDecrease = () => setCounter(--counter);

    return (
        <div>
            <Title className="title-counter" heading="h4" text="Agregar"/>
            <Button className="button-counter" action={handleDecrease} text='-'></Button>
            <p>Cantidad: <span>{counter}</span></p>
            <Button className="button-counter" action={handleIncrease} text='+'></Button>
        </div>
    )
};

export default Counter;