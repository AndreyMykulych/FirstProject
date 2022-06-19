import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andriy" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Olya" },
    { id: 6, name: "Valera" },
]
let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "yo" },
]
let postData = [
    { id: 1, message: 'Hi,how are u?', likescount: 15 },
    { id: 2, message: 'its my first post ', likescount: 11 },
 ]
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { dialogsData }
export { messagesData }
export {postData}