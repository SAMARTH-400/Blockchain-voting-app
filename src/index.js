import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap.min.css";
import {initializeApp} from "firebase/app";

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   databaseURL: ""
// };

const firebaseConfig = {
  apiKey: "AIzaSyAt3HaOqgKd7pHMeyRr7MtBpqhrDwrlfug",
  authDomain: "voting-app-2511b.firebaseapp.com",
  databaseURL: "https://voting-app-2511b-default-rtdb.firebaseio.com",
  projectId: "voting-app-2511b",
  storageBucket: "voting-app-2511b.appspot.com",
  messagingSenderId: "305049291472",
  appId: "1:305049291472:web:eb440a545ac19380446cd5"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
