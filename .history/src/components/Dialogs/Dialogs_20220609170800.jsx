import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";
const Dialogs = (props) => {
   
    
    let dialogElements = props.state.dialogs.map(d => <DialogName name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <DialogMessage message={m.message} />)
    let messages = React.createRef();
    let sendMessage = () => {
        let text = messages.current.value;
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textBlock}>
                <textarea ref={text}></textarea>
            </div>
            <div className={s.btnBlock}>
                <button onClick={sendMessage}>sendMessage</button>
                </div>
        </div>


    )
}

export default Dialogs;