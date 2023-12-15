import React from "react";
import styles from "./Card.module.css";

const Card = ({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/like.svg" : "/img/dislike.svg"}
          alt={isFavorite ? "like" : "dislike"}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className="cu-p"
          src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}
          alt={isAdded ? "checked" : "plus"}
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
};

export default Card;
