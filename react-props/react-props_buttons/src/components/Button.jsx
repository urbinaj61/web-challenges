const button = ({ colour, disabled, text }) => {
  return (
    <button disabled={disabled} style={{ color: colour }}>
      {text}
    </button>
  );
};

export default button;
