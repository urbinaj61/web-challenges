import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton({ onToggleFavorite, id, isFavorite }) {
  return (
    <button
      className='favorite-button'
      onClick={() => onToggleFavorite(id)}
      aria-label='favorite'
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
