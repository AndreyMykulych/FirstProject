import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Switch, Link, Routes } from 'react-router-dom';

const App = (props) => {
  
  return (
      <div className='app-wrapper'>
        <Header />
              <Navbar state={props.state.sidebar}/>
              
        <div class='app-wrapper-content'>
          <Routes>  
                  <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}></Route>
                      <Route path="/dialogs" element={<Dialogs state={props.state.messagesPage} />}></Route> 
                    
          </Routes>
        </div>
      </div>
  );
}

export default App;
