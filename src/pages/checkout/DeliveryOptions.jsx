import React from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

const DeliveryOptions = ({ deliveryOption, item, loadCart }) => {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOption.map((deliveryOption) => {
        const handleDeliveryOptionChange = async () => {
          await axios.put(`/api/cart-items/${item.productId}`, {
            deliveryOptionId: deliveryOption.id,
          });

          await loadCart();
        };

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            onClick={handleDeliveryOptionChange}
          >
            <input
              type="radio"
              checked={deliveryOption.id === item.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${item.productId}`}
              onChange={() => {}}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D",
                )}
              </div>
              <div className="delivery-option-price">
                {deliveryOption.priceCents > 0
                  ? formatMoney(deliveryOption.priceCents)
                  : "FREE Shipping"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryOptions;
