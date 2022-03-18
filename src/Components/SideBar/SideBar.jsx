import { useState, useEffect } from "react";
import "../SideBar/SideBar.css"
import { Link } from 'react-router-dom';
import "../../CSS/Reset.css"

function SideBar(){
    return(
        <>
          <div className="side-bar">
          <div className="side-list">
            <div className="sort-filters">
              <h3>Filters</h3>
              <p className="clear-btn">Clear</p>
            </div>
          </div>

          <div className="side-list">
            <h4 className="list-topic">Prices</h4>
            <div className="slide-container">
              <input type="range" min="0" max="1000" />
            </div>

            <h4 className="list-topic">Category</h4>

            <section className="checkbox-section">
              <label className="checkbox-title">
                <input type="checkbox" id="men" name="checkbox" />Men Clothing
              </label>

              <label className="checkbox-title">
                <input type="checkbox" id="women" name="checkbox" />Women Clothing
              </label>

              <label className="checkbox-title">
                <input type="checkbox" id="kids" name="checkbox" />Kids Clothing
              </label>
            </section>

            <h4 className="list-topic">Rating</h4>

            <section className="radio-section">
              <label className="radio-title">
                <input type="radio" id="4Stars" name="radio" /> 4 Stars & above
              </label>
            </section>

            <section className="radio-section">
              <label className="radio-title">
                <input type="radio" id="3Stars" name="radio" /> 3 Stars & above
              </label>
            </section>

            <section className="radio-section">
              <label className="radio-title">
                <input type="radio" id="2Stars" name="radio" /> 2 Stars & above
              </label>
            </section>

            <section className="radio-section">
              <label className="radio-title">
                <input type="radio" id="1Stars" name="radio" /> 1 Star & above
              </label>
            </section>

            <h4 className="list-topic">Sort by</h4>

            <section className="radio-section">
              <label className="radio-title">
                <input type="radio" id="lowToHigh" name="sort" /> Price - Low to
                High
              </label>
            </section>

            <section className="radio-section">
              <label className="radio-title">
                <input type="radio" id="highToLow" name="sort" /> Price - High to
                Low
              </label>
            </section>
          </div>
        </div>
        
        </>
    )
}

export {SideBar};
