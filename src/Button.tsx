import React from "react";
import s from './Button.module.css'


type  CounterType = {
    count: number
}

export function Counter(props: CounterType) {
    return (
        <div className={s.span}>
            <span className={props.count === 5 ? s.spanText : ''}>{props.count}</span>
        </div>
    )
}

type ButtonType = {
    inc: () => void
    reset: () => void
    count: number
}

export function Button(props: ButtonType) {
    let inc = () => {
        props.inc()
    }

    let reset = () => {
        props.reset()
    }

    return (
        <div className={s.button}>
            <div>
                <button className={s.inc} onClick={inc} disabled={props.count === 5}>inc</button>
            </div>
            <div>
                <button className={s.reset} onClick={reset}>reset</button>
            </div>

        </div>
    )
}