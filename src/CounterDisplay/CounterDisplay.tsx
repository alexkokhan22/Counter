import React, {ChangeEvent, useState} from "react";
import s from '../CounterDisplay/Counter.module.css'


type  CounterDisplayType = {
    count: number
    count1: string
    maxValue: number
    editMode: boolean
}

export function CounterDisplay(props: CounterDisplayType) {

    return (
        <div className={s.span}>
            <span
                className={props.count === props.maxValue ? s.spanText : ''}
            >
                {
                    props.editMode
                        ? props.count1
                        : props.count

                }

            </span>
        </div>
    )
}