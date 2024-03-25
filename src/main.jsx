// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./components/App/AppRouter";
import { BrowserRouter } from "react-router-dom";
// import AppMemo from "./components/App/AppMemo";
// import App from "./components/App/App.jsx"; //глобальний компонент
// import AppExampleHttps from "./components/App/AppExampleHttps.jsx";
// import AppHTTPS from "./components/App/AppHTTPS.jsx";

//вибираємо куди буде рендериться розмітка
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <AppHTTPS />
  // <AppExampleHttps />
  // <AppMemo />
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  // <App/>
  // </React.StrictMode>
);
