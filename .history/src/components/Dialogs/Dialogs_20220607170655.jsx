import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";
const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andriy" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Olya" },
        { id: 6, name: "Valera" },
    ]
    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "yo" },
    ]
    let dialogElements = dialogsData.map(d => <DialogName name={d.name} id={d.id} />)
    let messagesElements = messagesData.map(m => <DialogMessage message={m.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>


    )
}

export default Dialogs;