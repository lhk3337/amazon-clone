import React from "react";
import "./css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      //remove item from basket...
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
