import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";

import App from "./App";
import "./assets/sass/App.css";

const firebaseConfig = {
    apiKey: "AIzaSyAQgpuvBR4Q1yXIA7d5MYvEqa78uZsl178",
    authDomain: "sinteplastconstrucciononline.firebaseapp.com",
    projectId: "sinteplastconstrucciononline",
    storageBucket: "sinteplastconstrucciononline.appspot.com",
    messagingSenderId: "786799981580",
    appId: "1:786799981580:web:be0dd02433ae96f5daea29",
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
