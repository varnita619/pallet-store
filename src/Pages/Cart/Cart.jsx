import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import {
  productQuantity,
  totalPrice,
  totalMRP,
} from "../../Utils/priceCalculations";
import { priceFormatter } from "../../Utils/priceFormatter";

function Cart() {
  const {
    state: { cart },
    incrementQuantity,
    decrementQuantity,
    deleteCartItem,
  } = useCartContext();

  //get total Product quantity
  const getTotalQuantity = cart.reduce(productQuantity, 0);

  // get total price
  const getTotalPrice = cart.reduce(totalPrice, 0);

  // get total MRP
  const getTotalMRP = cart.reduce(totalMRP, 0);

  //total discount from MRP
  const totalDiscount = (MRP, price) => MRP - price;
  const getTotalDiscount = totalDiscount(getTotalMRP, getTotalPrice);

  // Get delivery charges
  const deliveryCharge = (totalPrice) => (totalPrice >= 600 ? 200 : 0);
  const getDeliveryCharge = deliveryCharge(getTotalPrice);

  //get tax price
  const taxPrice = (totalPrice, tax) => (totalPrice * tax) / 100;
  const getTaxPrice = taxPrice(getTotalPrice, 10);

  //get final price
  const finalPrice = (totalPrice, deliveryCharge, tax) =>
    totalPrice + tax + deliveryCharge;
  const getFinalPrice = finalPrice(
    getTotalPrice,
    getDeliveryCharge,
    getTaxPrice
  );

  return (
    <div>
      <div className="main-container">
        <main className="cart-wrapper">
          <h4 className="heading">My Cart</h4>

          {cart?.map((eachProduct) => (
            <div className="horizontal-card" key={eachProduct._id}>
              <div className="horizontal-card-image">
                <img src={eachProduct.imageURL} alt="card-image" />
              </div>
              <div className="card-content">
                <div className="card-details">
                  <h3>{eachProduct.name}</h3>
                  <span>Ships in 3-4 working days</span>
                </div>
                <div className="card-pricing">
                  <h2>&#8377; {eachProduct.price}</h2>
                  <span className="price">
                    <strike>&#8377; 2200</strike>
                  </span>
                </div>
                <h6 className="discount">&#8377; 50% ff</h6>

                <div className="qty-btn">
                  <button
                    className="inc-btn"
                    onClick={() => incrementQuantity(eachProduct, "increment")}
                  >
                    +
                  </button>
                  <span className="qty-text">{getTotalQuantity}</span>
                  <button
                    className="dec-btn"
                    onClick={() => decrementQuantity(eachProduct, "decrement")}
                  >
                    -
                  </button>
                </div>
                <div className="horizontal-card-buttons">
                  <button
                    className="btn1"
                    onClick={() => deleteCartItem(eachProduct)}
                  >
                    {" "}
                    <i className="fas fa-shopping-cart"></i> Remove from cart
                  </button>
                  <button className="btn2">
                    {" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> Move to
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="price-details">
            <h3 className="price-heading">PRICE DETAILS</h3>

            <div className="product-details">
              <p>Total Quantity</p>
              <span>&#8377;{getTotalQuantity}</span>
            </div>
            <div className="product-details">
              <p>Total Price</p>
              <span>&#8377;{priceFormatter(getTotalPrice)}</span>
            </div>
            <div className="product-details border">
              <p>Delivery Charges</p>
              <span>&#8377;{getDeliveryCharge}</span>
            </div>

            <div className="product-details border">
              <p>TOTAL AMOUNT</p>
              <span>&#8377;{getTotalMRP}</span>
            </div>

            <div className="product-details border">
              <p>GST</p>
              <span>&#8377;{getTaxPrice}</span>
            </div>

            <div className="product-details border">
              <p>Payable AMOUNT</p>
              <span>&#8377;{getFinalPrice}</span>
            </div>

            <p className="save-amount">
              You will save &#8377;{getTotalDiscount} in this order
            </p>
            <button className="btn2">PLACE ORDER</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export { Cart };
