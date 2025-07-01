import { GlobalStyle } from "../styles";
import { volumes } from "../lib/data.js";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} volumes={volumes} />
    </>
  );
};

export default App;
