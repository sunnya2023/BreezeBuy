import { useState } from "react";
import { slides } from "../../DB/Slides";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="header">
      <div
        className="header-contents"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div className={`slide `}>
            <div className="slide-left" key={index}>
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link to="/">
                <button>shop now</button>
              </Link>
            </div>
            <div className="slide-right">
              <img src={slide.img} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="slider-nav">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`nav-dot`}
            onClick={() => setCurrent(index)}
          >
            {current === index && <div className="inner-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
