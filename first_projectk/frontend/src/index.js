import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from './redux/store';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './redux/store.js'

// const store = configureStore({
//   reducer: rootReducer, 
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
    

);


