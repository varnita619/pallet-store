import "../SideBar/SideBar.css";
import "../../CSS/Reset.css";
import { useProductsContext } from "../../Context/ProductsContext";

function SideBar() {
  const { state, dispatch, getUniqueCategory } = useProductsContext();
  const { priceRange, sortBy, category, rating } = state;
  return (
    <>
      <div className="side-bar">
        <div className="side-list">
          <div className="sort-filters">
            <h3>Filters</h3>
            <p
              className="clear-btn"
              onClick={() => dispatch({ type: "CLEAR_ALL" })}
            >
              Clear
            </p>
          </div>
        </div>

        <div className="side-list">
          <h4 className="list-topic">Prices</h4>
          <div className="slide-container">
            <input
              type="range"
              min="194"
              max="30000"
              onChange={(e) =>
                dispatch({
                  type: "FILTER_BY_PRICE_RANGE",
                  payload: e.target.value,
                })
              }
            />
            <p>{priceRange}</p>
          </div>

          <h4 className="list-topic">Category</h4>

          <section className="checkbox-section">
            {getUniqueCategory.map((eachCategory, i) => {
              return (
                <label className="checkbox-title" key={i}>
                  <input
                    type="checkbox"
                    name="checkbox"
                    checked={category.includes(eachCategory)}
                    onChange={() =>
                      dispatch({ type: "GET_CATEGORY", payload: eachCategory })
                    }
                  />
                  {eachCategory}
                </label>
              );
            })}
          </section>

          <h4 className="list-topic">Rating</h4>

          <section className="radio-section">
            <label className="radio-title">
              <input
                type="radio"
                id="4Stars"
                name="radio"
                value="4"
                checked={rating === "4"}
                onChange={(e) =>
                  dispatch({ type: "SORT_BY_RATING", payload: e.target.value })
                }
              />{" "}
              4 Stars & above
            </label>
          </section>

          <section className="radio-section">
            <label className="radio-title">
              <input
                type="radio"
                id="3Stars"
                name="radio"
                value="3"
                checked={rating === "3"}
                onChange={(e) =>
                  dispatch({ type: "SORT_BY_RATING", payload: e.target.value })
                }
              />{" "}
              3 Stars & above
            </label>
          </section>

          <section className="radio-section">
            <label className="radio-title">
              <input
                type="radio"
                id="2Stars"
                name="radio"
                value="2"
                checked={rating === "2"}
                onChange={(e) =>
                  dispatch({ type: "SORT_BY_RATING", payload: e.target.value })
                }
              />{" "}
              2 Stars & above
            </label>
          </section>

          <section className="radio-section">
            <label className="radio-title">
              <input
                type="radio"
                id="1Stars"
                name="radio"
                value="1"
                checked={rating === "1"}
                onChange={(e) =>
                  dispatch({ type: "SORT_BY_RATING", payload: e.target.value })
                }
              />{" "}
              1 Star & above
            </label>
          </section>

          <h4 className="list-topic">Sort by</h4>

          <section className="radio-section">
            <label className="radio-title">
              <input
                type="radio"
                name="sort"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  dispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
                }
              />
              Low to High{" "}
            </label>
          </section>

          <section className="radio-section">
            <label className="radio-title">
              <input
                type="radio"
                name="sort"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  dispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
                }
              />
              High to Low{" "}
            </label>
          </section>
        </div>
      </div>
    </>
  );
}

export { SideBar };
