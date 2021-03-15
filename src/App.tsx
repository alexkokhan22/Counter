import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {DisplaySettings} from "./DisplaySettings/DisplaySettings";
import {Buttons} from "./Buttons/Buttons";

function App() {
    let [count, setCount] = useState<number>(0)
    let [count1, setCount1] = useState<string>('')
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [editMode, setEditMode] = useState<boolean>(true)
    let disabledSet = startValue < 0 || maxValue > 99 || maxValue === startValue || maxValue < startValue


    useEffect(() => {
        let valueASString = localStorage.getItem('startValue')
        if (valueASString) {
            let newValue = JSON.parse(valueASString)
            setStartValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        let valueASString = localStorage.getItem('maxValue')
        if (valueASString) {
            let newValue = JSON.parse(valueASString)
            setMaxValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('Value', JSON.stringify(maxValue))
    }, [maxValue])


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
        setEditMode(true)
    }

    const set = () => {
        setEditMode(false)
        setCount(startValue)
    }

    function setDisplay() {
        if (startValue < 0) {
            setCount1('incorrect value!')
        } else if (maxValue > 99 || maxValue < 0) {
            setCount1('incorrect value!')
        } else if (startValue === maxValue) {
            setCount1('incorrect value!')
        } else if (startValue > maxValue) {
            setCount1('incorrect value!')
        } else {
            setCount1('enter values and press "set"')
        }
    }


    return (
        <div className="App">
            <CounterDisplay
                count={count}
                startValue={startValue}
                maxValue={maxValue} count1={count1}
                editMode={editMode}/>
            <Buttons onClick={inc} title={'inc'} disabled={count === maxValue ? true : false}/>
            <Buttons onClick={reset} title={'reset'} disabled={false}/>


            <DisplaySettings
                maxValue={maxValue}
                startValue={startValue}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                set={set}
                setDisplay={setDisplay}
            />
            <Buttons onClick={set} title={'set'} disabled={disabledSet ? true : false}/>
        </div>
    );
}

export default App;
