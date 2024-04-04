// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./components/App/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>

  // <App/>
  // </React.StrictMode>
);
