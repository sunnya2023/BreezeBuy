import { Link } from "react-router-dom";
import "./card.scss";
import { IitemProps } from "../FeaturedProducts/FeaturedProduct";

interface Iitem {
  item: IitemProps;
}

const Card = ({ item }: Iitem) => {
  return (
    <div className="wrapper">
      <Link to={`/product/${item.id}`} className="link">
        <div className="card">
          <div className="card-img">
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt={item.title} className="mainImg" />
            <img src={item.img2} alt={item.title} className="secondImg" />
          </div>
          <div className="price-info">
            <div className="price">
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
            <span>{item.des}</span>
          </div>
        </div>
      </Link>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
