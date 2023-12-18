import React from "react";
import AppContext from "../../context";
import styles from "./Info.module.css";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={styles.cartEmpty}>
      <img className="mb-20" width={120} src={image} alt="img" />
      <h2 className="mb-20">{title}</h2>
      <p className="opacity-6 text-center">{description}</p>
      <button onClick={() => setCartOpened(false)} className={styles.btnGreen}>
        <img src="/img/back-arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
