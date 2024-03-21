import { useMemo, useState } from "react";
import MemoExample from "../MemoExample/MemoExample";

//?useMemo -- використовується для опитимізації складних обчислень (воно слідкує за масивом залежностей певного елемента, я до поки він не змінитсья воно ці дані закешовує і не виконує перерендинг)

//! коли інтерфйс починає підвисати тоді можемо використати useMemo

const AppMemo = () => {
  const [counter, setCounter] = useState(0);
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

  return (
    <>
      <MemoExample
        total={totalFeedback}
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>Click to count</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      {/* //*більшення одного фідбеку */}
      <button onClick={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}>
        Click to increase bad
      </button>
    </>
  );
};

export default AppMemo;
