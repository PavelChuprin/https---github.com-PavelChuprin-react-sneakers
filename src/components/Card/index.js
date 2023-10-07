import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/dislike.svg" alt="dislike" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt={props.id} />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={styles.button} onClick={props.onClick}>
          <img src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
