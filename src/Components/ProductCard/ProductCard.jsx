import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { useCartContext } from "../../Context/CartContext";
import { priceFormatter } from "../../Utils/priceFormatter";
import "../ProductCard/ProductCard.css";

function ProductCard({eachProduct}) {
  const  { _id, name, company, imageURL, rating, price, category, inStock } = eachProduct;

  const {token} = useAuthContext();
  const navigate = useNavigate();
  const {state: {cart}, addToCart} = useCartContext();
  const addToCartHandler = (eachProduct)=>{
    addToCart(eachProduct);
    console.log(eachProduct)
  }
  return (
    <>
      <div key={_id}>
        <div className="card">
            <span className="card-badge">
              <i className="far fa-heart"></i>
            </span>
      
          { !inStock && <button className="outOfStock-btn">Out Of Stock</button>}
          <div className="card-image">
            <img src={imageURL} alt="card-image" />
          </div>

          <div className="card-details">
            <h5>{name}</h5>
            <span>{company}</span>
            <p>{category}</p>
            <p>⭐{rating}/5</p>
            
          </div>
          <div className="card-pricing">
            <h4>&#8377;{priceFormatter(price)}</h4>
            <span className="price">
                    <strike>&#8377; {priceFormatter(2200)}</strike>
                  </span>
          </div>

          <div className="card-buttons">
            {cart.find((eachItem) => eachItem._id === eachProduct._id ) ?
            <button className="btn1 cart-btn" onClick={() => navigate('/cart')}>
              <i className="fas fa-shopping-cart"></i> Go to cart
            </button> :<button className="btn1 cart-btn" onClick={() => addToCartHandler(eachProduct)}>
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>}
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductCard };
