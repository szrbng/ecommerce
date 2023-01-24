import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/App/store'
import { getTotal } from './Redux/Features/cartSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));

// store.dispatch(getTotal());
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


