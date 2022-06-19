import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost,sendMessage, subscribe, updateNewPostText,updateNewMessageText} from './redux/state';
 import state from './redux/state';

let rerenderTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
       
            <BrowserRouter>
            <App state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                sendMessage={sendMessage}
                updateNewMessageText={updateNewMessageText}
            />
            </BrowserRouter>
      
    );
}

rerenderTree(state)
subscribe(rerenderTree)
reportWebVitals ()
