import React, {useState} from 'react';
import './App.css';
import {Button, Counter} from "./Button";

function App() {
    let [count, setCount] = useState<number>(0);

    function inc() {
        if (count <= 4) {
            setCount(count + 1)
        }
    }

    function reset() {
        setCount(0)
    }


    return (
        <div className="App">
            <Counter count={count}/>
            <Button inc={inc} reset={reset} count={count}/>
        </div>
    );
}

export default App;
