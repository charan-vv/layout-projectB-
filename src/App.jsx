import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./Layout/MainLayout";
import "./App.css";


function App() {
  return (
    <Router>
      <MainLayout/>
    </Router>
  );
}



export default App;
