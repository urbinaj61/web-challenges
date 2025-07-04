import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Character({ fetcher }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );

  console.log(data);
  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <p>Loading.....</p>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
