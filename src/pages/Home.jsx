import React from "react";
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
  errorText,
}) {
  const renderItems = () => {
    const filtredItems = items?.filter((item) =>
      item?.title?.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...new Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        {...item}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              className="cu-p"
              onClick={() => setSearchValue("")}
              src="/img/remove.svg"
              alt="clear"
            />
          )}
        </div>
      </div>
      {errorText && <h2 className="error">{errorText}</h2>}
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
