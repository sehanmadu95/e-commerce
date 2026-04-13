import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./Orders.css";
import { Link } from "react-router";
import axios from "axios";
import dayjs from "dayjs";
import OrderHeader from "./OrderHeader";

const Order = ({ cartItems }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // axios.get("/api/orders?expand=products").then((response) => {
    //   setOrders(response.data);
    // });

    const getOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    getOrders();
  }, []);
  return (
    <>
      {" "}
      <title>Orders</title>
      <Header cartItems={cartItems} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <OrderHeader order={order} />

                {order.products.map((orderProduct) => {
                  console.log("OrderProduct", orderProduct);

                  return (
                    <div
                      key={orderProduct.product.productId}
                      className="order-details-grid"
                    >
                      <div className="product-image-container">
                        <img src={orderProduct.product.image} />
                      </div>

                      <div className="product-details">
                        <div className="product-name">
                          {orderProduct.product.name}
                        </div>
                        <div className="product-delivery-date">
                          Arriving on:{" "}
                          {dayjs(
                            orderProduct.product.estimatedDeliveryTimeMs,
                          ).format("MMMM D")}
                        </div>
                        <div className="product-quantity">
                          Quantity: {orderProduct.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                          <img
                            className="buy-again-icon"
                            src="images/icons/buy-again.png"
                          />
                          <span className="buy-again-message">Add to Cart</span>
                        </button>
                      </div>

                      <div className="product-actions">
                        <Link to="/tracking">
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};

export default Order;
