import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";
const Dialogs = (props) => {
   
    
    let dialogElements = props.state.dialogs.map(d => <DialogName name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <DialogMessage message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textBlock}>
                <textarea></textarea>
            </div>
            <div className={s.btnBlock}>
                <button>sendMessage</button>sendMessage
                </div>
        </div>


    )
}

export default Dialogs;