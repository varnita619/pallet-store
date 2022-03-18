import React from 'react';
import "./WishList.css";
import { Link } from 'react-router-dom';

 function WishList(){
    return(
        <>
         <div className="main-container">
      {/* <!-- Wishlist Section Start --> */}

      <main className="products-wrapper">
        <h1 className="heading">My Wishlist</h1>

        <div className="card">
          <span className="card-badge"
            ><i className="fas fa-heart heart-icon"></i
          ></span>
          <div className="card-image">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg"
              alt="card-image"
            />
          </div>

          <div className="card-details">
            <h3>Men's Premium Jacket</h3>
            <span>Ships in 3-4 working days</span>
          </div>
          <div className="card-pricing">
            <h2>$20</h2>
          </div>

          <div className="card-buttons">
            <button className="btn1 cart-btn">
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>

        <div className="card">
          <span className="card-badge"
            ><i className="fas fa-heart heart-icon"></i
          ></span>
          <div className="card-image">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg"
              alt="card-image"
            />
          </div>

          <div className="card-details">
            <h3>Men's Premium Jacket</h3>
            <span>Ships in 3-4 working days</span>
          </div>
          <div className="card-pricing">
            <h2>$20</h2>
          </div>

          <div className="card-buttons">
            <button className="btn1 cart-btn">
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>

        <div className="card">
          <span className="card-badge"
            ><i className="fas fa-heart heart-icon"></i
          ></span>
          <div className="card-image">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg"
              alt="card-image"
            />
          </div>

          <div className="card-details">
            <h3>Men's Premium Jacket</h3>
            <span>Ships in 3-4 working days</span>
          </div>
          <div className="card-pricing">
            <h2>$20</h2>
          </div>

          <div className="card-buttons">
            <button className="btn1 cart-btn">
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>

        <div className="card">
          <span className="card-badge"
            ><i className="fas fa-heart heart-icon"></i
          ></span>
          <div className="card-image">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg"
              alt="card-image"
            />
          </div>

          <div className="card-details">
            <h3>Men's Premium Jacket</h3>
            <span>Ships in 3-4 working days</span>
          </div>
          <div className="card-pricing">
            <h2>$20</h2>
          </div>

          <div className="card-buttons">
            <button className="btn1 cart-btn">
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>
      </main>
    </div>

        </>
    )
}

export {WishList};
