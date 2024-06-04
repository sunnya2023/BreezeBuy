import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`}>coat</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/05/14/21/girl-7571916_640.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`}>skirt</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614_1280.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`}>Accesories</Link>
          </button>
        </div>
      </div>
      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.pixabay.com/photo/2014/09/14/14/27/girl-445042_640.jpg"
                alt=""
              />
              <button>
                <Link to={`/products/1`}>skirt</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/21/07/08/bag-8777183_640.jpg"
                alt=""
              />
              <button>
                <Link to={`/products/1`}>bags</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/25/12/57/blue-2537963_1280.jpg"
            alt=""
          />
          <button>
            <Link to={`/products/1`}>shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
