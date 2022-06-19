import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
const Navbar = (props) => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to ='/profile' className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='dialogs' className={ ({isActive})=> !isActive ?  '': s.activeLink}>Messages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='news' >News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='music' >Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='settings'>Settings</NavLink>
           </div>
           <div>
               <div className={s.sidebarBlock}>
                   <div className={s.friendsBtn}>
                       <h2>Friends</h2>
                   </div>
                   <img src={props.state.img} ></img>

               </div>
               </div>
      </nav>
   )
}
export default Navbar;