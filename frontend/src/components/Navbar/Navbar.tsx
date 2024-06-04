import { useState } from "react";
import Search from "../Search/Search";
import "./navbar.scss";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setMenuOpen] = useState(false);
  const [user, setUser] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/logo2.png" alt="로고" className="logo" />
        <div className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/products/${id}"
            onClick={() => setMenu("shop")}
            className={menu === "shop" ? "active" : ""}
          >
            Shop
          </Link>
          <Link
            to="/"
            onClick={() => setMenu("About")}
            className={menu === "About" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/"
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <Search />

        <div className="cart-icons" onClick={() => setCartOpen(!cartOpen)}>
          <ShoppingCartOutlinedIcon />
          <div className="dot"></div>
        </div>

        {user ? (
          <Link to="/profile" className="navbar-icons">
            <AccountCircleOutlinedIcon className="user" />
          </Link>
        ) : (
          <Link to="/login" className="navbar-icons login">
            로그인
          </Link>
        )}
      </div>

      <div className="menuIcon">
        <img src="/menu.png" alt="메뉴" onClick={() => setMenuOpen(!open)} />
      </div>

      {open && (
        <div className={open ? "menu active" : "menu"}>
          <div className="close">
            <CloseOutlinedIcon onClick={() => setMenuOpen(!open)} />
          </div>
          <div className="menu-list">
            <a href="/">로그인</a>
            <a href="/">Home</a>
            <a href="/">Shop</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">장바구니</a>
            <a href="/">검색하기</a>
          </div>
        </div>
      )}

      {cartOpen && <Cart />}
    </div>
  );
};

export default Navbar;
