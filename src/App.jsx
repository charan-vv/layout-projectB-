import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Header/sidebar";
import Basic from "./Component/Addcustomer/Basic";
import Table from "./Component/Viewcustomers/Table";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Check if the current path is not '/' or '/register'
  const shouldDisplayHeader = location.pathname !== '/' && location.pathname !== '/register';

  return (
    <div className="">
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <div className="" style={{ position: "fixed" }}>
        <Sidebar />
      </div>
      <div className="section">
        <div className="main">
          {shouldDisplayHeader && <Header />}
        </div>
        <section>
          <Routes>
            <Route path="/details/:id?" element={<Basic />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
