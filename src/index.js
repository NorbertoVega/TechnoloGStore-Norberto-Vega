import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3wJY_PbdYCFwpY0KRAEOACyA2zFpGd9A",
  authDomain: "tecnolog-store.firebaseapp.com",
  projectId: "tecnolog-store",
  storageBucket: "tecnolog-store.appspot.com",
  messagingSenderId: "825300200512",
  appId: "1:825300200512:web:0538c354b8fb77321643a5"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
