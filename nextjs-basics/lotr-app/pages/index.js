import { introduction } from "@/f25e013e-5e94-48da-9c90-a0e315ad4db1/lib/data";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
     <Link href="./volumes">All Volumes</Link>
    </div>
  );
};
export default HomePage;
