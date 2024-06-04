import Categories from "../../components/Categories/Categories";
import FeaturedProduct from "../../components/FeaturedProducts/FeaturedProduct";
import Header from "../../components/Header/Header";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedProduct type={"Best product"} />
      <Categories />
      <FeaturedProduct type={"New Product"} />
    </div>
  );
};

export default Home;
