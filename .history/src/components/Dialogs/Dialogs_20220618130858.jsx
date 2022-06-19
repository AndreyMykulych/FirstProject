import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from "./DialogName/DialogName";
import DialogMessage from "./DialogMessage/DialogMessage";
import { sendMessageActionCreator , updateNewMessageTextActionCreator } from "../../redux/state";
const Dialogs = (props) => {
   
    let img='https://dynamicmedia.livenationinternational.com/Media/z/d/d/93ededb5-9864-45ac-89b9-49861b4899f8.jpg'
    let dialogElements = props.state.dialogs.map(d => <DialogName name={d.name} id={d.id} img={ d.img}/>)
    let messagesElements = props.state.messages.map(m => <DialogMessage message={m.message} />)
    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action)
    }
    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action)
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
                    ref={newMessageElement}
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