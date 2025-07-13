export default function Comments({ reviews }) {
  console.log({ reviews });
  return (
    <>
      <h3>comments</h3>
      <ul>
        {reviews?.map(({ _id, rating, text, title }) => (
          <li key={_id}>
            <p>{title}</p>
            <p>{text}</p>
            <p>{rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
