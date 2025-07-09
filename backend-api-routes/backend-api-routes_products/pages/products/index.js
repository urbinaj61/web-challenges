import useSWR from "swr";

import Product from "../../components/products/Product.jsx";

const fetcher = (...args) => fetch(...args).then(response => response.json());

const HomePage = () => {
  const { data, error, isLoading } = useSWR(`/api/products/`, fetcher);

  if (error) console.log("There is an error");
  if (isLoading) return <h1>Loading.....</h1>;

  return (
    <ul>
      {data?.map(product => {
        return <Product product={product} />;
      })}
    </ul>
  );
};

export default HomePage;
