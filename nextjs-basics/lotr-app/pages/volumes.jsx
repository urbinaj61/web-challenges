import Link from "next/link";

const Volumes = () => {
  return  (<>
  <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/the-fellowship-of-the-ring">The Fellowship of the Ring</Link>
        </li>
        <li>
          <Link href="/the-two-towers">The two towers</Link>
        </li>
        <li>
          <Link href="/the-return-of-the-king">The return of the king</Link>
        </li>
      </ul>
      </>
      )
      
      
  
};
export default Volumes;
