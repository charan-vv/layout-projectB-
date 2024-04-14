import React from "react";

import Button from "../Button/button";
import "../Header/header.css";
function footer() {
  return (
    
      <div className=" footer p-3 d-flex justify-content-end" style={{ gap: 20 }}>
        <Button
          text="Go Back"
          backgroundColor=" #FFFFFF"
          color="#FE7720"
          border=""
          borderColor="#FE7720"
          borderRadius="5px"
        />
        <Button
          text="Save"
          backgroundColor="  #FE7720"
          color="#FFFFFF"
          border="none"
          borderColor="none"
          borderRadius="5px"
        />
      </div>
    
  );
}
export default footer;


