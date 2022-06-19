import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";
import { sendMessageActionCreator , updateNewMessageTextActionCreator } from "../../redux/state";
const Dialogs = (props) => {
   
    
    let dialogElements = state.dialogs.map(d => <DialogName name={d.name} id={d.id} img={ d.img}/>)
    let messagesElements = state.messages.map(m => <DialogMessage message={m.message} />)
    let newMessageElement = state.newDialogMessage;
    let state = props.store.getState().messagesPage;
   
   
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onChangeMessage = (e) => {
        let body = e.target.value
       props.store.dispatch(updateNewMessageTextActionCreator(body))
    }
   
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
          
               <div> {dialogElements}</div> 
            </div>
            
            
            <div className={s.messages}>
               <div>{messagesElements}</div> 
            </div>
            <div className={s.textBlock}>
                <textarea
                    placeholder="Enter your message"
                    ref={newMessageElement}
                    value={props.state.newDialogMessage}
                    onChange={onChangeMessage}>
                </textarea>
                
                <div className={s.btnBlock}>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
            
        </div>


    )
}

export default Dialogs;