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
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
                  <Routes>
                       
                      
                      <Route path="/dialogs" element={<Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages} />}></Route>
                      <Route path="/dialogs" element={<Dialogs  messages={props.appState.messages}/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
