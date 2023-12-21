import React from "react";
import Card from "../components/Card";
import AppContext from "../context";
import Info from "../components/Info";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.length > 0 &&
          favorites.map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
      {favorites.length === 0 && (
        <Info
          title="Закладок нет"
          image="/img/smile1.png"
          description="Вы ничего не добавили в закладки"
          cartMode={false}
        />
      )}
    </div>
  );
}

export default Favorites;
