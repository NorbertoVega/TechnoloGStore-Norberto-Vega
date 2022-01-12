import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeXDFUlvzspCTyulccT4qhAPWyoA90rds",
  authDomain: "tecnologstore-ee448.firebaseapp.com",
  projectId: "tecnologstore-ee448",
  storageBucket: "tecnologstore-ee448.appspot.com",
  messagingSenderId: "301746672495",
  appId: "1:301746672495:web:43b0da65e48c23078b0e9a"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
