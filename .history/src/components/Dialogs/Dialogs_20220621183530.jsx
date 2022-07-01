import React from "react";
import s from './Dialogs.module.css'

import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {
  
    
    let dialogElements = props.state.dialogs.map(d => <DialogName name={d.name} id={d.id} img={ d.img}/>)
    let messagesElements = props.state.messages.map(m => <DialogMessage message={m.message} />)
    let newMessageElement = React.createRef();
   
    debugger;
   
    let sendMessage = () => {
        props.onSendMessage()
    }
    let onChangeMessage = (text) => {
       props.onChangeMessage(text)
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
                    value={state.newDialogMessageText}
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