import { useRouter } from "next/router";
import useSWR from "swr";
import Product from "@/components/products/Product";

const fetcher = (...args) => fetch(...args).then(response => response.json());

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) console.log("There is an error");
  if (isLoading) return <h1>Loading.....</h1>;

  return (
    <ul>
      <Product product={data} />
    </ul>
  );
};

export default SingleProduct;
