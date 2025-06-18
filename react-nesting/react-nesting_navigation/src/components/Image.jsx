const Image = ({ className, src, alt }) => {
  console.log(src);
  return <img className={className} src={src} alt={alt} />;
};

export default Image;
