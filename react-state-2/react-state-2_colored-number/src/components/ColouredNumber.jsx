const ColouredNumber = ({ value }) => {
  return (
    <h2 style={{ color: `hsl(${230 - (value / 100) * 230}deg 100% 50%)` }}>
      {value}
    </h2>
  );
};

export default ColouredNumber;
