import React from "react";
import "./header.css";
import Notification from "../../assets/photo/notifications.svg";
import Profilepic from "../../assets/photo/_Avatar_.svg";

function header() {
 
  return (
    <>
        <div className="header d-flex justify-content-between   ">
          <h2 style={{padding:20}}>Customers</h2>
          <div className="d-flex justify-content-end" style={{ gap: 20,marginRight:30 }}>
            <img src={Notification} alt="Logo" />
            <img src={Profilepic} alt="Logo" />
          </div>
        </div>
    </>
  );
}
export default header;
