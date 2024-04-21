import { useSelector, useDispatch } from "react-redux";
import { decrementCounter, incrementCounter } from "../../redux/productDetailReducer";

//? з локальним сховищем в редакс працюють за допомогою бібліотеки react persist

const ReduxCounter = () => {
  //*ПЕРЕДАЄМО ДАНІ ІЗ СХОВИЩА ДО РОЗМІТКИ ЧЕРЕЗ useSelector
  const counter = useSelector((state) => state.productDetails.counter);
  //* сетер надсилаємо через dispatch
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Redux counter: {counter}</h2>
      <button onClick={() => dispatch(incrementCounter())}>Click to increment </button>
      <button onClick={() => dispatch(decrementCounter())}>Click to decrement</button>
    </div>
  );
};

export default ReduxCounter;
