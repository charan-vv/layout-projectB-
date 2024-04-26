import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem("user");
        console.log("clear local storage",localStorage.removeItem("user"));
        // Navigate to the root path ("/")
        navigate("/");
      };
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
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Home" ? "active" : ""}
                src={Home}
                alt="home"
                width={25}
                height={25}
                onClick={() => handleItemClick("Home")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Product" ? "active" : ""}
                src={Product}
                alt="product"
                width={25}
                height={25}
                onClick={() => handleItemClick("Product")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Cart" ? "active" : ""}
                src={Cart}
                alt="cart"
                width={25}
                height={25}
                onClick={() => handleItemClick("Cart")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Offer" ? "active" : ""}
                src={Offer}
                alt="offer"
                width={25}
                height={25}
                onClick={() => handleItemClick("Offer")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Profile" ? "active" : ""}
                src={Profile}
                alt="profile"
                width={25}
                height={25}
                onClick={() => handleItemClick("Profile")}
                style={{cursor:"pointer"}}
            />
             <img
                className={activeItem === "Home" ? "active" : ""}
                src={Home}
                alt="home"
                width={25}
                height={25}
                onClick={() => handleItemClick("Home")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Preference" ? "active" : ""}
                src={Preference}
                alt="set preferences"
                width={25}
                height={25}
                onClick={() => handleItemClick("Preference")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Support" ? "active" : ""}
                src={Support}
                alt="Support"
                width={25}
                height={25}
                onClick={() => handleItemClick("Support")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Report" ? "active" : ""}
                src={Report}
                alt="report"
                width={25}
                height={25}
                onClick={() => handleItemClick("Report")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Settings" ? "active" : ""}
                src={Settings}
                alt="Settings"
                width={25}
                height={25}
                onClick={() => handleItemClick("Settings")}
                style={{cursor:"pointer"}}
            />
            <img
                className={activeItem === "Logout" ? "active" : ""}
                src={Logout}
                alt="Logout"
                width={25}
                height={25}
                onClick={handleLogout}
                style={{cursor:"pointer"}}
            />
        </div>
    );
}

export default Sidebar;
