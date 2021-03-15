import React, {ChangeEvent, useState} from "react";
import s from '../CounterDisplay/Counter.module.css'



type  CounterDisplayType = {
    count: number
    count1: string
    maxValue: number
    editMode: boolean
    startValue: number
}

export function CounterDisplay(props: CounterDisplayType) {
    let errorSpan = props.startValue < 0
        || props.maxValue <= props.startValue
        || props.maxValue > 99
        || props.maxValue === props.startValue




    return <div className={s.span}>
        {
            props.editMode
                ? <span className={errorSpan ? s.spanText : ''}>{props.count1}</span>
                : <span className={props.count === props.maxValue ? s.spanText : ''}>{props.count}</span>
        }
    </div>
}



