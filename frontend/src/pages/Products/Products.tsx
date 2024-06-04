import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./products.scss";
import { useState } from "react";

const Products = () => {
  const { id } = useParams<string>();
  const catId = id ? parseInt(id) : null;

  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sort, setSort] = useState("");
  const onchangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">skirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">hat</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={onchangePrice} />
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="high"
              value="high"
              name="price"
              onChange={(e) => setSort("high")}
            />
            <label htmlFor="high">높은 가격 순</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="low"
              value="low"
              name="price"
              onChange={(e) => setSort("low")}
            />
            <label htmlFor="low">낮은 가격 순</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/05/06/15/bouquet-1571668_640.jpg"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
