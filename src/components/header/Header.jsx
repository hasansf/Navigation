import { Link } from "react-router-dom";
import logo from "../../../public/image/logo.jpg";
import "./Header.css";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
const Header = () => {
  return (
    <div className="header_area">
      <div className="container">
        <div className="elements">
            <div className="logo">
                <Link to = '/'>
                <img src={logo} alt="" />
                </Link>
            </div>
            <div className="icons-wraper">
              <div className="icons">
                <div className="search">
                  <HiOutlineSearch/>
                </div>
                <div className="wishlist">
                  <span><IoIosHeart/></span>
                  <p>Wishlist</p>
                </div>
                <div className="cart">
                  <span><LuShoppingCart/></span> 
                  <p>Cart</p>
                </div>
                <div className="user">
                  <span><FaUser/></span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
