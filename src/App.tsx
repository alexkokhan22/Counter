import React, {useState} from 'react';
import './App.css';
import {Button} from "./Buttons/Button";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {DisplaySettings} from "./DisplaySettings/DisplaySettings";

function App() {
    let [count, setCount] = useState<number>(0)
    let [count1, setCount1] = useState<string>('')
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [editMode, setEditMode] = useState<boolean>(true)

    const onChangeMaxValue = (value: number) => {
        setMaxValue(value)
    }


    const onChangeStartValue = (value: number) => {
        setStartValue(value)
    }


    function inc() {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    function reset() {
        setCount(startValue)
    }


    const set = () => {
        setEditMode(false)
        setCount(startValue)
    }

    function setDisplay() {
        if (startValue < 0) {
            setCount1('error')
        } else if (maxValue > 99 || maxValue < 0) {
            setCount1('error')
        } else if (startValue === maxValue) {
            setCount1('error')
        } else {
            setCount1('super')
        }
    }

    return (
        <div className="App">
            <CounterDisplay count={count} maxValue={maxValue} count1={count1} editMode={editMode}/>
            <Button inc={inc} reset={reset} count={count} maxValue={maxValue}/>
            <DisplaySettings
                maxValue={maxValue}
                startValue={startValue}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                set={set}
                setDisplay={setDisplay}
            />
        </div>
    );
}

export default App;
