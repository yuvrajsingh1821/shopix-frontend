import "./Header.scss";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    
    const [showCart, setShowCart] = useState(false); 
    const [showSearch, setShowSearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    
    return(
        <>
        <header className="main-header">
        <div className="nav">
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
        </div>

        <div className="logo">
            <p>SHOPIX</p>
        </div>

        <div className="icons">
            <TbSearch className="search-icon" onClick={() => setShowSearch(true)}/>
            <AiOutlineHeart/>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
            <CgShoppingCart/>
              {!!cartCount && <span>{cartCount}</span>}
            </span>

        </div>

    </header>
    { showCart && <Cart setShowCart = {setShowCart} />}
    { showSearch && <Search setShowSearch = {setShowSearch}/>}
    </>
    );
};

export default Header;
