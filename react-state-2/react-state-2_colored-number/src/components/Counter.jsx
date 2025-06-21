import { useState } from "react";
import ColouredNumber from "./ColouredNumber";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h1>Coloured Number</h1>
      <ColouredNumber value={count} />
      <div className='counter__buttons-container'>
        <button
          type='button'
          className='counter__button'
          aria-label='increment count'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          type='button'
          className='counter__button'
          aria-label='decrement count'
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
