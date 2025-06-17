const button = ({ colour, disabled, text, onClickHandler }) => {
  return (
    <button
      disabled={disabled}
      style={{ color: colour }}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default button;
