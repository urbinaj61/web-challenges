const Card = ({ name, craft, image }) => {
  return (
    <section className='container'>
      <aside className='card'>
        <div className='box'>
          <div className='content'>
            <h2>{craft}</h2>
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Card;
