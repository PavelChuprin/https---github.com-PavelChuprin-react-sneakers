import React from "react";
import styles from "./Drawer.module.css";

const Drawer = ({ onClose, items = [] }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className={styles.removeBtn}
            src="/img/remove.svg"
            alt="remove"
            onClick={onClose}
          />
        </h2>

        <div className={styles.items}>
          {items.map((obj) => (
            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className={styles.cartItemImg}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>

        <div className={styles.cartTotalBlock}>
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div className={styles.cartTotalBlockDiv}></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div className={styles.cartTotalBlockDiv}></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.btnGreen}>
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
