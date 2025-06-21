import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  const handleAddPeople = () => {
    setPeople(people + 1);
  };

  const handleRemovePeople = () => {
    setPeople(people - 1);
  };

  return (
    <div className='container'>
      <h1>Place a Table Reservation</h1>
      <Counter
        onHandleAddPeople={handleAddPeople}
        onHandleRemovePeople={handleRemovePeople}
      />
      <p>
        You are going to reserve a table for {people}{" "}
        {people > 1 ? "people" : "person"}
      </p>
    </div>
  );
}
