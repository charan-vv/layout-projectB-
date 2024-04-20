import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Header/sidebar";
import Basic from "./Component/Addcustomer/Basic";
import Table from "./Component/Viewcustomers/Table";
import Edit from "./Component/Viewcustomers/Edit"
import Read from "./Component/Viewcustomers/Read"

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
 

  return (
    <div className='d-flex'>
      <Sidebar/>
      <div className='section'>
        <div className='main'><Header /></div>
        <section>
          <Routes>
            <Route path="/details" element={<Basic/>} />
            <Route path="/" element={<Table/>} />
            <Route path="/details/:id" element={<Read />} />
            <Route path="/edit/:id" element={<Edit/>} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
