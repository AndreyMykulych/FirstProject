import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
    debugger;
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
              
        <div className='app-wrapper-content'>
          <Routes>  
                  <Route path="/profile" element={<Profile
                      Profile={props.state.profilePage}
                     dispatch={props.dispatch}/>}></Route>
                  <Route path="/dialogs" element={<Dialogs
                       dispatch={props.dispatch}
                      Messages={props.state.messagesPage}
                                       />}></Route>        
          </Routes>
        </div>
      </div>
  );
}

export default App;
