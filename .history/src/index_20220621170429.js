import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
 import store from './redux/reduxStore';

let rerenderTree = (state) => {
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
       
            <BrowserRouter>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
                store={stored}
            />
            </BrowserRouter>
      
    );
}

rerenderTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
})
reportWebVitals ()
