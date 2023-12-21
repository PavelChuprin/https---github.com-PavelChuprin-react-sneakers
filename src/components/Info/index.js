import React from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../context";

import styles from "./Info.module.css";

const Info = ({ title, image, description, cartMode }) => {
  const { setCartOpened } = React.useContext(AppContext);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.cartEmpty}>
      <img className="mb-20" width={70} src={image} alt="img" />
      <h2 className="mb-20">{title}</h2>
      <p className="opacity-6 text-center">{description}</p>

      {cartMode ? (
        <button
          onClick={() => setCartOpened(false)}
          className={styles.btnGreen}
        >
          <img src="/img/back-arrow.svg" alt="arrow" />
          Закрыть корзину
        </button>
      ) : (
        <button onClick={goBack} className={styles.btnGreen}>
          <img src="/img/back-arrow.svg" alt="arrow" />
          Вернуться назад
        </button>
      )}
    </div>
  );
};

export default Info;
