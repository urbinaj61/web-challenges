import Card from "./components/Card.jsx";
import fruits from "./data/fruits.js";

export default function App() {
  const fruitData = fruits.map(fruit => {
    return (
      <div key={fruit.id} className='app'>
        <Card fruit={fruit} />
      </div>
    );
  });

  return fruitData;
}
