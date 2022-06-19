import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import Sidebar from './Sidebar/Sidebar';
const Navbar = (props) => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to ='/profile' className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/dialogs' className={ ({isActive})=> !isActive ?  '': s.activeLink}>Messages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/news' >News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/music' >Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/settings'>Settings</NavLink>
           </div>
           <div>
               <div className={s.item}>
                   <div className={s.friendsBtn}>
                       <NavLink to='/friends'> <h2>Friends</h2> </NavLink>
                       <div>
                           <Sidebar/>
                           </div>
                           
                   </div>
                   

               </div>
               </div>
      </nav>
   )
}
export default Navbar;