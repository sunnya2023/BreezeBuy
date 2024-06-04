import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2021/08/03/06/42/the-soap-6518625_1280.jpg",
      img2: "https://cdn.pixabay.com/photo/2016/11/21/12/27/blonde-1845052_640.jpg",
      title: "HAT",
      price: 12000,
      des: "Lorem ipsum dolor sit",
      isNew: true,
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg ",
      img2: "https://cdn.pixabay.com/photo/2021/08/03/06/47/perfume-6518634_1280.jpg",
      title: "Skirt",
      price: 32000,
      des: "Lorem ipsum dolor sit",
      isNew: true,
    },
  ];
  return (
    <div className="cart">
      <h1>장바구니</h1>
      {data.map((item) => (
        <div key={item.id} className="item">
          <img src={item.img} alt="" />
          <div className="detail">
            <h1>{item.title}</h1>
            <p>{item.des.substring(0, 100)}</p>
            <div className="price">1 x {item.price}원</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>합계</span>
        <span>32000원</span>
      </div>
      <button>결제하기</button>
      <span className="reset">장바구니 비우기</span>
    </div>
  );
};

export default Cart;
