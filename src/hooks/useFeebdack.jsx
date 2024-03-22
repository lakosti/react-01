import { useMemo, useState } from "react";

const useFeebdack = () => {
  const [feedback, setFeedback] = useState({
    good: 5,
    neutral: 10,
    bad: 15,
  });
  const totalFeedback = useMemo(
    () =>
      Object.values(feedback).reduce((acc, item) => {
        for (let i = 0; i < 1_000_000_000; i++) {}
        return acc + item;
      }, 0),
    [feedback]
  );
  return { feedback, setFeedback, totalFeedback };
};

export default useFeebdack;
