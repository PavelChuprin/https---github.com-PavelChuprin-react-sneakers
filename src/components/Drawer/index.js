import React from "react";
import styles from "./Drawer.module.css";

const Drawer = ({ onClose, onRemove, items = [] }) => {
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

        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className={styles.cartItemImg}
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
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
          </>
        ) : (
          <div className={styles.cartEmpty}>
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty.png"
              alt="empty"
            />
            <h2 className="mb-20">Корзина пустая</h2>
            <p className="opacity-6 text-center">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className={styles.btnGreen}>
              <img src="/img/back-arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
