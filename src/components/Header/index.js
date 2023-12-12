import React from "react";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickOpenCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src="/img/favorites.svg"
            alt="favorites"
          />
          <span>Закладки</span>
        </li>
        <li className="cu-p">
          <img width={18} height={18} src="/img/user.svg" alt="user" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
