const MemoExample = ({ total, good, neutral, bad }) => {
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default MemoExample;
