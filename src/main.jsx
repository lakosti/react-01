// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./components/App/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>

  // <App/>
  // </React.StrictMode>
);
