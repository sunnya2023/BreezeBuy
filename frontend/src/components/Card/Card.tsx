import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <Link to="/product/${item.id}" className="link">
      <div className="card">
        <div className="card-img">
          <img src={item.img} alt={item.title} className="mainImg" />
          <img src={item.im2} alt={item.title} className="secondImg" />
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
  );
};

export default Card;
