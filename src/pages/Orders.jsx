import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { API_URL } from "../constants";
import Info from "../components/Info";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await axios.get(API_URL + "/cart");
  //       setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
  //       setIsLoading(false);
  //     } catch (error) {
  //       alert("Ошибка при запросе заказов");
  //       console.error(error);
  //     }
  //   })();
  // }, []);
  // Ресурс mockapi.io установил лимит бесплатных запросов (2 шт.) для одного проекта

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>
      {orders.length > 0 ? (
        (isLoading ? [...new Array(4)] : orders).map((item, index) => (
          <div className="d-flex flex-wrap">
            <Card key={index} {...item} loading={isLoading} />
          </div>
        ))
      ) : (
        <Info
          title="У вас нет заказов"
          image="/img/smile2.png"
          description="Оформите хотя бы один заказ."
          cartMode={false}
        />
      )}
    </div>
  );
}

export default Orders;
