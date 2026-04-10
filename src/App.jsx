import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import Order from "./pages/Order";
import { Tracking } from "./pages/Tracking";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
       axios.get("/api/cart-items?expand=product").then((response) => {
      setCartItems(response.data);
    });
    },[])
  
  return (
    <>
      <Routes>
        <Route index element={<HomePage  cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
        <Route path="/orders" element={<Order cartItems={cartItems} />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
