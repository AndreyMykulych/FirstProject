import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
 import store from './redux/reduxStore';
import storeContext from './StoreContext';

let rerenderTree = (state) => {
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
       
        <BrowserRouter>
            <storeContext.Provider value ={store}>
            <App //state={state}
               // dispatch={store.dispatch.bind(store)}
                //store={store}
            />
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
