import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';



const DialogMessage = (props) => {
    return (
        <div className={s.message}>{props.message}</div>)

}



export default DialogMessage;