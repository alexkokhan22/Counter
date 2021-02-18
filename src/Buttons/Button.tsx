import React from "react";
import s from './Button.module.css'


type ButtonType = {
    inc: () => void
    reset: () => void
    count: number
    maxValue: number
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
                <button className={s.inc} onClick={inc} disabled={props.count === props.maxValue}>inc</button>
            </div>
            <div>
                <button className={s.reset} onClick={reset}>reset</button>
            </div>

        </div>
    )
}