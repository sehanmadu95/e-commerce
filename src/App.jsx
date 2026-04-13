import CheckoutPage from "./pages/checkout/CheckoutPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import Order from "./pages/order/Order";
import { Tracking } from "./pages/tracking/Tracking";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCartItems(response.data);
    };
    // axios.get("/api/cart-items?expand=product").then((response) => {
    //   setCartItems(response.data);
    // });
    getCartItems();
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <HomePage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} />}
        />
        <Route path="/orders" element={<Order cartItems={cartItems} />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
