const ALink = ({ children, className, href }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default ALink;
