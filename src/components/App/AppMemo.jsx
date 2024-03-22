import { useMemo, useRef, useState } from "react";
import MemoExample from "../MemoExample/MemoExample";
import ForwardRef from "../ForwardRef/ForwardRef";
// import useFeebdack from "../../hooks/useFeebdack";

//?useMemo -- використовується для опитимізації складних обчислень (воно слідкує за масивом залежностей певного елемента, я до поки він не змінитсья воно ці дані закешовує і не виконує перерендинг)

//! коли інтерфйс починає підвисати тоді можемо використати useMemo

//? Доступ до ДОМ елементів - useRef()

const AppMemo = () => {
  const [counter, setCounter] = useState(0);
  //!КОСТОМНИЙ ХУК
  //? const { feedback, totalFeedback, setFeedback } = useFeebdack();
  const [feedback, setFeedback] = useState({
    good: 5,
    neutral: 10,
    bad: 15,
  });
  //*ДВІ УМОВИ ЗМІНИ ДАНИХ КОМПОНЕТА: ПРОПСИ І СТЕЙТ
  //   const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const totalFeedback = useMemo(
    () =>
      Object.values(feedback).reduce((acc, item) => {
        for (let i = 0; i < 1_000_000_000; i++) {}
        return acc + item;
      }, 0),
    [feedback]
  );

  //! Посилання на дом елемент -- використовується для координат, для скролу, стилів, фокусу, на скільки здвинувся елемент, для анімацій

  // const btnRef = useRef();
  const inputRef = useRef();

  const onCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  const onFocus = () => {
    // console.log(btnRef.current); //доступ до DOM елемента
    // console.log(btnRef.current.textContent); //доступ до тексту
    // console.log(btnRef.current.classList); //доступ до класів
    // console.log(getComputedStyle(btnRef.current).width); //доступ до стилів (width)
    // console.log(btnRef.current.getBoundingClientRect()); // коордтинати
    inputRef.current.focus(); // фокус на елементі (при кліці на кнопку фокус на інтуп)
  };
  return (
    <>
      <button onClick={onFocus}>Click to focus</button>
      <MemoExample
        total={totalFeedback}
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
      <ForwardRef ref={inputRef} />
      <h2>Counter: {counter}</h2>
      <button className="btn" onClick={onCounter}>
        Click to count
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
      {/* //*більшення одного фідбеку */}
      <button onClick={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}>
        Click to increase bad
      </button>
      <input ref={inputRef} type="text" />
    </>
  );
};

export default AppMemo;
