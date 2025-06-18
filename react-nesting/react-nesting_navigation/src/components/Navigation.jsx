import Link from "../Link";

const Navigation = () => {
  return (
    <nav>
      <Link className='navigation__link' href='#home'>
        Home
      </Link>
      <Link className='navigation__link' href='#about'>
        About
      </Link>
      <Link className='navigation__link' href='#impressum'>
        Impressum
      </Link>
    </nav>
  );
};

export default Navigation;
