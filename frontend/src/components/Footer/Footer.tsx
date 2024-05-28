import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="item footer-left">
          <Link to={"/"}>
            <h1 className="logo">BreezeBuy</h1>
          </Link>
          <p>서울시 구로구 경인로 276길</p>
          <span>breezeBuy@breezebuy.com</span>
          <span>T. 010-1234-5678</span>
          <div className="sns-icons">
            <a href="https://www.facebook.com/">
              <img src="/facebook.png" alt="페이스북" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/instagram.png" alt="인스타그램" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="/youtube.png" alt="유튜브" />
            </a>
            <a href="https://x.com/">
              <img src="/x.png" alt="엑스" />
            </a>
          </div>
        </div>

        <div className="item center-link">
          <h1>Links</h1>
          <Link to="/">
            <span>FAQ</span>
          </Link>
          <Link to="/">
            <span>About us</span>
          </Link>
          <Link to="/">
            <span>Privacy Policy</span>
          </Link>
        </div>
        <div className="item center-about">
          <h1>About</h1>
          <span>
            BreezeBuy에 오신 것을 환영합니다. <br />
            저희는 쉽고 즐거운 쇼핑 경험을 제공하는 쇼핑몰입니다.
            <br />
            다양한 고품질 제품을 합리적인 가격에 제공하여 <br />
            여러분의 쇼핑이 산들바람처럼 가볍고 편안하게 만듭니다.
            <br />
            BreezeBuy에서 편리함과 탁월함을 경험해보세요.
          </span>
        </div>

        <div className="item footer-right">
          <h1>고객센터</h1>
          <span>T. 1234-5678</span>
          <span>contact@breezebuy.com</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Copyright 2024. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
