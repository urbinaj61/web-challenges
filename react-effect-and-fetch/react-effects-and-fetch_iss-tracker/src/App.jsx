import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    const getISSCoords = () => {
      const timer = setInterval(async () => {
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setCoords(data);
        } catch (error) {
          console.log(error);
        }
      }, 5000);

      return () => {
        clearInterval(timer);
      };
    };
    getISSCoords();
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls longitude={coords.longitude} latitude={coords.latitude} />
    </main>
  );
}
