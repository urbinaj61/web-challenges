import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character/`, fetcher);

  if (error) console.log("There is an error");
  if (isLoading) return <h1>Loading.....</h1>;

  const { firstName, lastName, twitter, geohash } = data;

  return (
    <>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{twitter}</p>
      <p>{geohash}</p>
    </>
  );
}
