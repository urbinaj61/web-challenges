import Navigation from "./Navigation.jsx";
import Image from "./Image.jsx";
import Avatar from "./Avatar.jsx";
import Logo from "./Logo.jsx";

const Header = () => {
  return (
    <header className='header'>
      <a href='#'>
        <img className='round-image' src={Logo()} alt='logo' />
      </a>
      <Navigation />

      <button
        type='button'
        onClick={() => console.log("I could toggle a profile!")}
        aria-label='toggle profile'
      >
        <Image className='round-image' src={Avatar()} alt='avatar' />
      </button>
    </header>
  );
};

export default Header;
