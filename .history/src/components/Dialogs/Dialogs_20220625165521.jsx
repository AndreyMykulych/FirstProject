import React from "react";
import s from './Dialogs.module.css'

import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {
  
    
    let dialogElements = props.messagesPage.dialogs.map(d => <DialogName name={d.name} key={d.id} id={d.id} img={ d.img}/>)
    let messagesElements = props.messagesPage.messages.map(m => <DialogMessage message={m.message} key={m.id}/>)
    let newMessageElement = React.createRef();
   
   
    let sendMessage = () => {
        props.onSendMessage()
    }
    let onChangeMessage = () => {
        let body = newMessageElement.current.value;
       props.onChangeMessage(body)
    }
    debugger;
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
                   /* placeholder="Enter your message"*/
                    ref={newMessageElement}
                    value={props.messagesPage.newDialogMessage}
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