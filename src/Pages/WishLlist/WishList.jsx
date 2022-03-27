import React from "react";
import "./WishList.css";
import { useCartContext } from "../../Context/CartContext";
import { useWishlistContext } from "../../Context/WishlistContext";
import { priceFormatter } from "../../Utils/priceFormatter";

function WishList() {

  const { addToCart } = useCartContext();

  const {
    state: { wishlist },
    removeFromWishlist,
  } = useWishlistContext();
  return (
    <>
      <div className="main-container">
        <main className="products-wrapper">
          <h1 className="heading">My Wishlist</h1>

          {wishlist?.map((eachProduct) => (
            <div className="card" key={eachProduct._id}>
              <span className="card-badge trash-icon">
                <button
                  onClick={() => {
                    removeFromWishlist(eachProduct);
                  }}
                  className="like-btn"
                >
                 <i className="far fa-trash-alt"></i>
                </button>
              </span>
              <div className="card-image">
                <img src={eachProduct.imageURL} alt="card-image" />
              </div>

              <div className="card-details">
                <h3>{eachProduct.title}</h3>
                <span>Ships in 3-4 working days</span>
              </div>
              <div className="card-pricing">
                <h2>&#8377;{eachProduct.price}</h2>
                <span className="price">
                  <strike>&#8377; 2200</strike>
                </span>
              </div>
              <h6 className="discount">&#8377; 50% ff</h6>

              <div className="card-buttons">
                <button
                  className="btn1 cart-btn"
                  onClick={() => {
                    addToCart(eachProduct), removeFromWishlist(eachProduct);
                  }}
                >
                  <i className="fas fa-shopping-cart"></i> Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export { WishList };
