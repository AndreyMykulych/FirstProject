import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogName = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>

            <NavLink to={path} className isActiveDialog={({ isActiveDialog }) => isActiveDialog ? s.activeLink : ''}>{props.name}</NavLink>
        </div>)
}

export default DialogName;