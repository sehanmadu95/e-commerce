import CheckoutPage from "./pages/checkout/CheckoutPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import Order from "./pages/order/Order";
import { Tracking } from "./pages/tracking/Tracking";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getLoadCartItems = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCartItems(response.data);
  };

  useEffect(() => {
    // axios.get("/api/cart-items?expand=product").then((response) => {
    //   setCartItems(response.data);
    // });
    getLoadCartItems();
  }, []);

  // const appVesion = import.meta.env.VITE_APP_VERSION;
  // console.log("App version: ", appVesion);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <HomePage cartItems={cartItems} loadCart={getLoadCartItems} />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage cartItems={cartItems} loadCart={getLoadCartItems} />
          }
        />
        <Route path="/orders" element={<Order cartItems={cartItems} />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
