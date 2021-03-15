import React from "react";
import s from './Button.module.css'


type ButtonType = {
    onClick: () => void
    title: string
    disabled: boolean

}

export function Buttons(props: ButtonType) {

    return (
        <div className={s.buttons}>
            <div>
                <button className={s.button} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
            </div>


        </div>
    )
}