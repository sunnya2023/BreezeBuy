import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProduct = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2021/08/03/06/42/the-soap-6518625_1280.jpg",
      img2: "https://cdn.pixabay.com/photo/2016/10/07/08/56/woman-1721065_640.jpg",
      title: "HAT",
      price: 12,
      des: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg ",
      img2: "https://cdn.pixabay.com/photo/2021/08/03/06/47/perfume-6518634_1280.jpg",
      title: "Skirt",
      price: 32,
      des: "Lorem ipsum dolor sit",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2021/11/05/12/27/woman-6771288_960_720.jpg",
      img2: "https://cdn.pixabay.com/photo/2016/10/07/08/56/woman-1721065_640.jpg",
      title: "Coat",
      price: 28,
      des: "Lorem ipsum dolor sit",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2016/11/21/16/01/woman-1846127_640.jpg",
      img2: "https://cdn.pixabay.com/photo/2016/10/07/08/56/woman-1721065_640.jpg",
      title: "HAT",
      price: 8,
      des: "Lorem ipsum dolor sit",
    },
  ];
  return (
    <div className="item-list">
      <h1>추천 제품</h1>
      <div className="items">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
