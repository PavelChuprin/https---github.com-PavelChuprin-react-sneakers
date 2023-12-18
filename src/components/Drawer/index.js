import React from "react";
import AppContext from "../../context";
import Info from "../Info";
import styles from "./Drawer.module.css";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onRemove, items = [] }) => {
  const { setCartOpened, setCartItems, cartItems } =
    React.useContext(AppContext);

  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://65239b78ea560a22a4e88b1b.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа!");
    }
    setIsLoading(false);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className={styles.removeBtn}
            src="/img/remove.svg"
            alt="remove"
            onClick={() => setCartOpened(false)}
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
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
              <button
                disabled={isLoading}
                className={styles.btnGreen}
                onClick={onClickOrder}
              >
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            image={isOrderComplete ? "/img/complete.png" : "/img/empty.png"}
            description={
              isOrderComplete
                ? "Ваш заказ скоро будет передан курьерской доставке"
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
          />
        )}

      </div>
    </div>
  );
};

export default Drawer;
