import React from "react";
import { Routes, Route } from "react-router-dom";
import Basic from "../Pages/Addcustomer/Basic";
import Table from "../Pages/Viewcustomers/Table";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

function RouteComponent() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id?" element={<Basic />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  );
}
export default RouteComponent;
