import './App.css';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {DisplaySettings} from "./DisplaySettings/DisplaySettings";
import {Buttons} from "./Buttons/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store";
import {
    incAC,
    onChangeMaxValueAC,
    onChangeStartValueAC,
    resetAC,
    setAC,
    setDisplayAC,
    statePropsType
} from "./redux/counter-reducer";

function App() {

    const counter = useSelector<AppRootState, statePropsType>(state => state.counter)
    const dispatch = useDispatch()
    let disabledSet = counter.startValue < 0
        || counter.maxValue > 99
        || counter.maxValue === counter.startValue
        || counter.maxValue < counter.startValue

    {/* let [count, setCount] = useState<number>(0)
    let [count1, setCount1] = useState<string>('')
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [editMode, setEditMode] = useState<boolean>(true)
    */
    }


    {/* useEffect(() => {
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
    }, [maxValue])*/
    }


    const onChangeMaxValue = (value: number) => {
        const action = onChangeMaxValueAC(value)
        dispatch(action)
    }

    const onChangeStartValue = (value: number) => {
        const action = onChangeStartValueAC(value)
        dispatch(action)
    }

    function inc() {
        const action = incAC()
        dispatch(action)
    }

    function reset() {
        const action = resetAC()
        dispatch(action)
    }

    const set = () => {
        const action = setAC()
        dispatch(action)
    }

    function setDisplay() {
        const action = setDisplayAC()
        dispatch(action)

    }


    return (
        <div className="App">
            <CounterDisplay
                count={counter.countNumber}
                startValue={counter.startValue}
                maxValue={counter.maxValue} count1={counter.countString}
                editMode={counter.editMode}/>
            <Buttons onClick={inc} title={'inc'} disabled={counter.countNumber === counter.maxValue ? true : false}/>
            <Buttons onClick={reset} title={'reset'} disabled={false}/>


            <DisplaySettings
                maxValue={counter.maxValue}
                startValue={counter.startValue}
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
