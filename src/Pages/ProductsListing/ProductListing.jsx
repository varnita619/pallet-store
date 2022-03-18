import { useState, useEffect } from "react";
import "../ProductsListing/ProductListing.css"
import { Link } from 'react-router-dom';
import "../../CSS/Reset.css"
import axios from "axios"
import { SideBar } from "../../Components/SideBar/SideBar"



function ProductListing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data: { products } } = await axios.get('/api/products');
        console.log(products);

        setData(products)

      } catch (error) {
        console.error(error);
      }
    }
    getProducts();

  }, [])
  console.log(data)

  return (
    <div>

      <div className="main-container">

        <SideBar />

        <main className="products-wrapper">
          <h2 className="products-heading">All Products</h2>


          {data.map(({ id, name, company, price, rating, imageURL }) => {
            return (
              <div key={id}>
                <div className="card">
                  <Link to='/wishlist'><span className="card-badge"><i className="far fa-heart"></i></span></Link>
                  <div className="card-image">
                    <img src={imageURL} alt="card-image" />
                  </div>

                  <div className="card-details">
                    <h5>{name}</h5>
                    <span>{company}</span>
                    <p>{rating} ⭐⭐⭐⭐</p>
                  </div>
                  <div className="card-pricing">
                    <h4>&#8377;{price}</h4>
                  </div>

                  <div className="card-buttons">
                    <Link to='/cart' className="btn1 cart-btn">
                      <i className="fas fa-shopping-cart"></i> Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

        </main>
      </div>
    </div>
  )
}

export { ProductListing };
