import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Character({ data }) {
  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/`
  );

  if (error) throw new Error("This is an error");
  if (isLoading) return <p>Loading.....</p>;

  console.log(data);

  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
