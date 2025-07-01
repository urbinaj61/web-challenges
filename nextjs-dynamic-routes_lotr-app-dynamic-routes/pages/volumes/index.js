import Link from "next/link";

const Volumes = ({ volumes }) => {
  return (
    <>
      <h1>List of Volumes</h1>
      <ul>
        {volumes.map(volume => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Volumes;
