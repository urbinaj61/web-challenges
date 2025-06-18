import { useState } from "react";
import "./FavouriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <button
      className='favourite-button'
      onClick={() => {
        setIsFavourite(!isFavourite);
      }}
      aria-label='favourite'
    >
      {isFavourite ? <StarFilled /> : <Star />}
    </button>
  );
}
