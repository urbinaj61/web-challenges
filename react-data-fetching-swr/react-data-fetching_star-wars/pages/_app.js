import GlobalStyle from "../styles";

import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/`,
    fetcher
  );

  if (error) throw new Error("This is an error");
  if (isLoading) return <p>Loading.....</p>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </>
  );
}
