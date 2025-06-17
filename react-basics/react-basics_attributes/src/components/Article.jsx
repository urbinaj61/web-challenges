const article = () => {
  return (
    <article className='article'>
      <h2 className='article__title'>This is a H2 heading</h2>
      <label htmlFor='input'>Please enter whatever</label>
      <input type='text' id='input' />
      <a
        className='article__link'
        href='https://en.wikipedia.org/wiki/Help:Introduction_to_Wikipedia'
      >
        Wikipedia article
      </a>
    </article>
  );
};

export default article;
