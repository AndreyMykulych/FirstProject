import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Switch, Link, Routes } from 'react-router-dom';


const App = (props) => {
    let postData = [
        { id: 1, message: 'Hi,how are u?', likescount: 15 },
        { id: 2, message: 'its my first post ', likescount: 11 },
     ]
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
                      <Route path="/profile" element={<Profile postData={postData}/>}></Route>
            <Route path="/dialogs" element={<Dialogs />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
