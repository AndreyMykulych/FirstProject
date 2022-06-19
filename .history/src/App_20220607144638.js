import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Switch, Link, Routes } from 'react-router-dom';


const App = (props) => {
    let dialogsData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andriy" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Olya" },
        { id: 6, name: "Valera" },
    ]
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile postData={props.postData}/>}></Route>
                      <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData}/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
