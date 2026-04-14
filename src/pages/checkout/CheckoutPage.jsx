import "./CheckoutPage.css";
import "./checkout-header.css";
import { Link } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

const CheckoutPage = ({ cartItems, loadCart }) => {
  const [deliveryOption, setDeliveryOption] = useState([]);

  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    // axios
    //   .get("/api/delivery-options?expand=estimatedDeliveryTime")
    //   .then((response) => {
    //     setDeliveryOption(response.data);
    //   });

    // axios.get("/api/payment-summary").then((response) => {
    //   console.log("Payment summary: ", response.data);
    //   setPaymentSummary(response.data);
    // });

    const getCheckoutData = async () => {
      const deliveryResponse = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOption(deliveryResponse.data);

      const paymentResponse = await axios.get("/api/payment-summary");
      setPaymentSummary(paymentResponse.data);
    };

    getCheckoutData();
  }, [cartItems]);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cartItems={cartItems}
            deliveryOption={deliveryOption}
            loadCart={loadCart}
          />

          {paymentSummary && <PaymentSummary paymentSummary={paymentSummary} />}
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
