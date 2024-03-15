// import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx"; //глобальний компонент
import "./index.css";
import AppHTTPS from "./AppHTTPS.jsx";

//вибираємо куди буде рендериться розмітка
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppHTTPS />
  // <App/>
  // </React.StrictMode>
);
