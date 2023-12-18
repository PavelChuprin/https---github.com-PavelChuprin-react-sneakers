import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        {/* <Link to="/card"> */}
          <li className="mr-30 cu-p" onClick={props.onClickOpenCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
        {/* </Link> */}
        <Link to="/favorites">
          <li className="mr-30 cu-p">
            <img
              width={18}
              height={18}
              src="/img/favorites.svg"
              alt="favorites"
            />
            <span>Закладки</span>
          </li>
        </Link>
        <Link to="/user">
          <li className="cu-p">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
            <span>Профиль</span>
          </li>
        </Link>

      </ul>
    </header>
  );
};

export default Header;
