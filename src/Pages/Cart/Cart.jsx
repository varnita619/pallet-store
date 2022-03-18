import React from "react";
import "./Cart.css"
import { Link } from 'react-router-dom';
import "../../CSS/Reset.css"

function Cart() {
    return (
        <div>

        <div className="main-container">
            {/* <!-- Wishlist Section Start --> */}

            <main className="cart-wrapper">
            <h1 className="heading">My Cart</h1> 

                <div className="horizontal-card">
                    <div className="horizontal-card-image">
                        <img src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg" alt="card-image" />
                    </div>
                    <div className="card-content">
                        <div className="card-details">
                            <h3>Men's Premium Jacket</h3>
                            <span>Ships in 3-4 working days</span>
                        </div>
                        <div className="card-pricing">
                            <h2>&#8377; 2000</h2><span className="price">
                                <strike>&#8377; 3999</strike>

                            </span>

                        </div>
                        <h6 className="discount">&#8377; 50% ff</h6>
                        <div className="horizontal-card-buttons">
                            <button className="btn1"> <i className="fas fa-shopping-cart"></i> Remove from cart</button>
                            <button className="btn2"> <i className="fa fa-heart" aria-hidden="true"></i> Move to Wishlist</button>
                        </div>

                    </div>
                </div>

                <div className="price-details">
                    <h3 className="price-heading">PRICE DETAILS</h3>

                    <div className="product-details">
                        <p>Price (2 items)</p>
                        <span>&#8377;4999</span>
                    </div>
                    <div className="product-details">
                        <p>Discount</p>
                        <span>-&#8377;1999</span>
                    </div>
                    <div className="product-details border">
                        <p>Delivery Charges</p>
                        <span>&#8377;499</span>
                    </div>

                    <div className="product-details border">
                        <p>TOTAL AMOUNT</p>
                        <span>&#8377;3499</span>
                    </div>

                    <p className="save-amount">You will save &#8377;3499 in this order</p>
                    <button className="btn2">PLACE ORDER</button>
                </div>


            </main>
        </div>

            
        </div >
    )
}

export { Cart };
