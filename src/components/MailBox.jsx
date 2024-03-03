//СИНТЕТИЧНА ПОДІЯ (evt) - ЩОБ РЕАКТ ПРАЦЮВАВ У ВСІХ БРАУЗЕРАХ ОДНАКОВО

const MailBox = ({ onLogEmail, onDeleteEmail }) => {
  // const handleClick = (evt) => {
  //   console.log(evt);
  //   console.log("Email has been successfully sent");
  // };

  // const deleteById = (id) => {
  //   console.log(id);
  // };

  return (
    <div>
      <h2>MailBox</h2>
      <ul>
        <li>
          Mail 1 <button onClick={() => onDeleteEmail(1)}>&times;</button>
        </li>
        <li>
          Mail 2 <button onClick={() => onDeleteEmail(2)}>&times;</button>
        </li>
        <li>
          Mail 3 <button onClick={() => onDeleteEmail(3)}>&times;</button>
        </li>
      </ul>
      <button onClick={onLogEmail} type="button">
        Send mail
      </button>
    </div>
  );
};

export default MailBox;
