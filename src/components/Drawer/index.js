import React from "react";
import axios from "axios";

import Info from "../Info";
import AppContext from "../../context";
import { API_URL } from "../../constants";
import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.css";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onRemove, items = [], opened }) => {
  const { setCartOpened } = React.useContext(AppContext);
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      // const { data } = await axios.post(API_URL + "/orders", {
      //   items: cartItems,
      // });
      // setOrderId(data.id);
      // Ресурс mockapi.io установил лимит бесплатных запросов (2) для одного проекта
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(API_URL + "/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа!");
    }
    setIsLoading(false);
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
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
              {items.map((obj, index) => (
                <div key={index} className={styles.cartItem}>
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
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%</span>
                  <div className={styles.cartTotalBlockDiv}></div>
                  <b>{Math.round(totalPrice * 0.05)} руб.</b>
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
            cartMode
          />
        )}

      </div>
    </div>
  );
};

export default Drawer;
