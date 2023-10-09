import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://65239b78ea560a22a4e88b1b.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickOpenCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавляем в избранное")}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
