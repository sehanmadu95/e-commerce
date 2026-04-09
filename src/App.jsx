import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import Order from "./pages/Order";
import { Tracking } from "./pages/Tracking";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
