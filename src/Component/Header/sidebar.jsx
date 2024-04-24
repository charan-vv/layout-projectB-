import React, { useState } from "react";
import Logo from "../../assets/photo/Logo.svg";
import Cart from "../../assets/photo/cart.svg";
import Home from "../../assets/photo/HOME MENU.svg";
import Logout from "../../assets/photo/logout.svg";
import Offer from "../../assets/photo/offfer.svg";
import Product from "../../assets/photo/product.svg";
import Profile from "../../assets/photo/profile.svg";
import Report from "../../assets/photo/report.svg";
import Preference from "../../assets/photo/set prefernce.svg";
import Settings from "../../assets/photo/settings.svg";
import Support from "../../assets/photo/support.svg";
import "./header.css";

function Sidebar() {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="side d-flex flex-column p-4" style={{ gap: 21 }}>
            <img
                className={activeItem === "Logo" ? "active" : ""} 
                src={Logo}
                alt="logo"
                width={35}
                height={35}
                onClick={() => handleItemClick("Logo")}
            />
            <img
                className={activeItem === "Home" ? "active" : ""}
                src={Home}
                alt="home"
                width={25}
                height={25}
                onClick={() => handleItemClick("Home")}
            />
            <img
                className={activeItem === "Product" ? "active" : ""}
                src={Product}
                alt="product"
                width={25}
                height={25}
                onClick={() => handleItemClick("Product")}
            />
            <img
                className={activeItem === "Cart" ? "active" : ""}
                src={Cart}
                alt="cart"
                width={25}
                height={25}
                onClick={() => handleItemClick("Cart")}
            />
            <img
                className={activeItem === "Offer" ? "active" : ""}
                src={Offer}
                alt="offer"
                width={25}
                height={25}
                onClick={() => handleItemClick("Offer")}
            />
            <img
                className={activeItem === "Profile" ? "active" : ""}
                src={Profile}
                alt="profile"
                width={25}
                height={25}
                onClick={() => handleItemClick("Profile")}
            />
             <img
                className={activeItem === "Home" ? "active" : ""}
                src={Home}
                alt="home"
                width={25}
                height={25}
                onClick={() => handleItemClick("Home")}
            />
            <img
                className={activeItem === "Preference" ? "active" : ""}
                src={Preference}
                alt="set preferences"
                width={25}
                height={25}
                onClick={() => handleItemClick("Preference")}
            />
            <img
                className={activeItem === "Support" ? "active" : ""}
                src={Support}
                alt="Support"
                width={25}
                height={25}
                onClick={() => handleItemClick("Support")}
            />
            <img
                className={activeItem === "Report" ? "active" : ""}
                src={Report}
                alt="report"
                width={25}
                height={25}
                onClick={() => handleItemClick("Report")}
            />
            <img
                className={activeItem === "Settings" ? "active" : ""}
                src={Settings}
                alt="Settings"
                width={25}
                height={25}
                onClick={() => handleItemClick("Settings")}
            />
            <img
                className={activeItem === "Logout" ? "active" : ""}
                src={Logout}
                alt="Logout"
                width={25}
                height={25}
                onClick={() => handleItemClick("Logout")}
            />
        </div>
    );
}

export default Sidebar;
