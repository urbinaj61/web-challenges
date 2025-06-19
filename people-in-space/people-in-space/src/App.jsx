import { useEffect, useState } from "react";
import Oleg from "./assets/Oleg.jpeg";
import Nikolai from "./assets/Nikolai.jpeg";
import Tracey from "./assets/Tracey.jpeg";
import Matthew from "./assets/Matthew.jpeg";
import Michael from "./assets/Michael.jpeg";
import Jeanette from "./assets/Jeanette.jpeg";
import Alexander from "./assets/Alexander.jpeg";
import Butch from "./assets/Butch.jpeg";
import Sunita from "./assets/Sunita.jpeg";
import LiOne from "./assets/LiOne.jpeg";
import LiTwo from "./assets/LiTwo.jpeg";
import Ye from "./assets/Ye.jpeg";

import "./App.css";
import Card from "./components/Card.jsx";

const App = () => {
  const [data, setData] = useState([]);

  const names = [
    Oleg,
    Nikolai,
    Tracey,
    Matthew,
    Michael,
    Jeanette,
    Alexander,
    Butch,
    Sunita,
    LiOne,
    LiTwo,
    Ye,
  ];

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch("http://api.open-notify.org/astros.json");
        const results = await response.json();
        setData(results);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  const cards = data.people?.map(({ name, craft }, index) => {
    return (
      <Card
        key={index}
        name={name}
        craft={craft}
        index={index}
        image={names[index]}
      />
    );
  });

  return (
    <>
      <h1>People in Space</h1>
      <main>{cards}</main>
    </>
  );
};

export default App;
