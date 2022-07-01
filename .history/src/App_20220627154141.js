import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
const App = (props) => {
    
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
              
        <div className='app-wrapper-content'>
          <Routes>  
                  <Route path="/profile" element={<Profile
                      store={props.store}
                     />}></Route>
                  <Route path="/dialogs" element={<DialogsContainer
                      store={props.store} 
                  />}></Route>      
                  <Route path="/users" element={<UsersContainer/>}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
