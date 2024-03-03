const MailBox = () => {
  const handleClick = () => {
    console.log("Email has been successfully sent");
  };

  return (
    <div>
      <h2>MailBox</h2>
      <ul>
        <li>Mail 1</li>
        <li>Mail 2</li>
        <li>Mail 3</li>
      </ul>
      <button onClick={handleClick} type="button">
        Send mail
      </button>
    </div>
  );
};

export default MailBox;
