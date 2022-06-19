import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";
const Dialogs = (props) => {
   
    debugger;
    let dialogElements = props.state.dialogs.map(d => <DialogName name={d.name} id={d.id} img={ d.img}/>)
    let messagesElements = props.state.messages.map(m => <DialogMessage message={m.message} />)
    let messages = React.createRef();
    let sendMessage = () => {
       
        props.dispatch({ type: 'SEND-MESSAGE' })
    }
    let onChangeMessage = () => {
        let text = messages.current.value;
        props.dispatch({ type: 'ON-CHANGE-MESSAGE', newMessageText: text })
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
          
               <div>{} {dialogElements}</div> 
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textBlock}>
                <textarea
                    ref={messages}
                    value={props.Messages.newDialogMessage}
                    onChange={onChangeMessage}>
                </textarea>
                <div className={s.btnBlock}>
                    <button onClick={sendMessage}
                           
                    >send</button>
                </div>
            </div>
            
        </div>


    )
}

export default Dialogs;