import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

 import store from './redux/state';

let rerenderTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
       
            <BrowserRouter>
            <App state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
                sendMessage={store.sendMessage}
                updateNewMessageText={store.updateNewMessageText}
            />
            </BrowserRouter>
      
    );
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)
reportWebVitals ()
