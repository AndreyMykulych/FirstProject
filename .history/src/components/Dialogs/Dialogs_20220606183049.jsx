import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";
import { dialogsData } from "../../index";
import { messagesData } from "../../index";
const Dialogs = (props) => {
 
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