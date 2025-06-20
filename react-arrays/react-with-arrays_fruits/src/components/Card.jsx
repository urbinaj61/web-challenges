import "./Card.css";

const Card = ({ fruit }) => {
  const { fruitName, colour } = fruit;
  return <p className={`card  ${colour}`}>{fruitName}</p>;
};

export default Card;
