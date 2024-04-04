/**
 * Налаштування Редакс
 * 1. Встановлення
 * 2. Налаштовуємо стор -- в src створити папку з файлом redux/store.js
 * 3. Підключаємо дефтулзи
 * 4. Підключити до main.jsx (Provider)
 * 5. Підготувати прототип функції редьюсера та продумати початковий стан
 * 6. Підключити редьюсер до combineReducers
 * 7. Витягнути дані в компоненті зі стору за допомогою userSelector
 * 8. Описати логіку редьюсеру
 * 9. Постворювати actions - об'єкти інструкцій
 * 10. отримати dispatch за допомогою хука і задіспатчити sction
 *
 * //* Store  -- це глобальне сховище даних. Наше джерело істини
 *
 */ /* Reducer -- це чиста функція яка приймає двааргумента state та actions і повертає змінений або не змінений state (Дані в середині функції змінюються імутабельно)

 //* -- ? -- опціональне поле - поле не обов'язкове
 
 * //* Action -- це об'єкт в якого обов'язково має бути поле type такоє може бути поле payload => {type: 'some/typename', payload?: someData"}
 *  */
import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { productDetailsReducer } from "./productDetailReducer";

const rootReducer = combineReducers({
  productDetails: productDetailsReducer,
});

//devTools
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
