import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore';
 import { Provider } from 'react-redux';
import storeContext from './StoreContext';

let rerenderTree = (state) => {
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
       
        <BrowserRouter>
            <storeContext.Provider value ={store}>
            <App />
            </storeContext.Provider>
            </BrowserRouter>
      
    );
}

rerenderTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
})
reportWebVitals ()
