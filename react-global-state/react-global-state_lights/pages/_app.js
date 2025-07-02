import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const lights = [
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];

  const [lightsState, setLightsState] = useState(lights);
  const [isDimmed, setIsDimmed] = useState(true);

  const handleToggle = lightID => {
    setLightsState(
      lightsState.map(light =>
        light.id === lightID ? { ...light, isOn: !light.isOn } : light
      )
    );
  };

  const handleLightsOff = () => {
    setLightsState(lightsState.map(light => ({ ...light, isOn: false })));
  };

  const handleLightsOn = () => {
    setLightsState(lightsState.map(light => ({ ...light, isOn: true })));
  };

  const lightsOnCount = lightsState.reduce(
    (count, light) => count + (light.isOn ? 1 : 0),
    0
  );

  useEffect(() => {
    setIsDimmed(lightsOnCount === 0);
  }, [lightsOnCount]);

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lightsState={lightsState}
        handleToggle={handleToggle}
        lightsOnCount={lightsOnCount}
        handleLightsOff={handleLightsOff}
        handleLightsOn={handleLightsOn}
      />
    </Layout>
  );
}
