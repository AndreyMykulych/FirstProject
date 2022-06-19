import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogName = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div ><img> src='https://dynamicmedia.livenationinternational.com/Media/z/d/d/93ededb5-9864-45ac-89b9-49861b4899f8.jpg'</img>
        className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className isActiveDialog={({ isActiveDialog }) => isActiveDialog ? s.activeLink : ''}>{props.name}</NavLink>
        </div>)
}

export default DialogName;