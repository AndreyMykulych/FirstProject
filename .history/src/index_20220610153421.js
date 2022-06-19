import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import { rerenderTree } from './render';

rerenderTree(state)
