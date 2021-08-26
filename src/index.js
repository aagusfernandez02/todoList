import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRjCnMiE3hJOv-tjOViNO44QVKXFciCSs",
  authDomain: "todolist-99f59.firebaseapp.com",
  projectId: "todolist-99f59",
  storageBucket: "todolist-99f59.appspot.com",
  messagingSenderId: "936252916382",
  appId: "1:936252916382:web:c7dd14492f8df0f5fbf18f",
  measurementId: "G-F2SXMN3NG7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
