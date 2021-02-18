import React, {ChangeEvent} from "react";
import s from "../DisplaySettings/DisplaySettings.module.css";

type  DisplaySettingsType = {
    maxValue: number
    startValue: number
    onChangeStartValue: (value: number) => void
    onChangeMaxValue: (value: number) => void
    set: () => void
    setDisplay: () => void
}

export function DisplaySettings(props: DisplaySettingsType) {

    let onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(Number(e.currentTarget.value))
    }
    let onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(Number(e.currentTarget.value))
    }

    let onClickSet = () => props.set()

    let setDisplay = () => {props.setDisplay()}

    return (
        <div className={s.span}>
            <span>Max</span>
            <input type="number" value={props.maxValue} onChange={onChangeMax} onClick={setDisplay}/>
            <span>Start</span>
            <input type="number" value={props.startValue} onChange={onChangeMin} onClick={setDisplay}/>

            <div className={s.button} >
                <button className={s.set} onClick={onClickSet}>set</button>
            </div>
        </div>
    )
}