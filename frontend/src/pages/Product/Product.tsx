import "./product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [seletImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://cdn.pixabay.com/photo/2016/07/28/10/45/woman-1547507_640.jpg",
    "https://cdn.pixabay.com/photo/2022/06/21/23/11/asian-7276658_640.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>

        <div className="mainImg">
          <img src={images[seletImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          voluptatum facilis officia hic itaque eum repudiandae ratione placeat
          suscipit doloremque eligendi, sed odit dignissimos ducimus explicabo
          ab enim eaque et.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>

        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor:Polo</span>
          <span>Product Type:T-Shirt</span>
          <span>Tag:T-Shirt, Women, Top</span>
        </div>
        <hr />

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
