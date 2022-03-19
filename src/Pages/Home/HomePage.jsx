import React from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <div className="banner">
                <img src="https://res.cloudinary.com/dqgqdj4jf/image/upload/v1647587862/banner/home_xci4gu.gif"
                    alt="banner" />
                <div className="btn-container">

                    <Link to='/productlisting'><button className="twin-btn">Shop Now</button></Link>
                </div>
            </div>

            <h2 className="home-heading">Featured Products</h2>
            <div className="container">
                <div className="horizontal-card">
                    <div className="horizontal-card-image">
                        <img src="https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083402__340.jpg" alt="card-image" />

                    </div>
                    <div className="card-content">
                        <div className="card-details">
                            <h3>Summer Arrivals</h3>
                            <span>New collection</span>
                        </div>
                        <div className="brand-image-container">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png' className='brand-image'></img>

                        </div>
                        <span className='discount-details'>Upto 30% Off</span>

                        <div className="card-description">
                            <p>Check out our best summer collection to stay gorgeous this season.</p>

                        </div>
                    </div>
                </div>

                <div className="horizontal-card">
                    <div className="horizontal-card-image">
                        <img src="https://i.pinimg.com/originals/ba/97/c1/ba97c196f9aefc9513c9bc05039cb336.jpg" alt="card-image" />
                    </div>
                    <div className="card-content">
                        <div className="card-details">
                            <h3>Summer Arrivals</h3>
                            <span>New collection</span>
                        </div>
                        <div className="brand-image-container">
                            <img src='https://pngimg.com/uploads/gucci/gucci_PNG22.png' className='brand-image'></img>

                        </div>
                        <span className='discount-details'>Upto 30% Off</span>

                        <div className="card-description">
                            <p>Check out our best summer collection to stay cool and gorgeous this season.</p>
                        </div>

                    </div>
                </div>


                <div className="horizontal-card">
                    <div className="horizontal-card-image">
                        <img src="https://images.unsplash.com/photo-1544610280-5265bdceba0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGV2aXN8ZW58MHx8MHx8&w=1000&q=80" alt="card-image" />
                    </div>
                    <div className="card-content">
                        <div className="card-details">
                            <h3>Summer Arrivals</h3>
                            <span>New collection</span>
                        </div>
                        <div className="brand-image-container">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png' className='brand-image'></img>
                        </div>
                        <span className='discount-details'>Upto 30% Off</span>
                        <div className="card-description">
                            <p>Check out our best summer collection to stay cool and gorgeous this season.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export { Home };
