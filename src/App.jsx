import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./Component/Header/Header";
 import Sidebar from "./Component/Header/sidebar";
import Basic from "./Component/Addcustomer/Basic";
import "../src/index.css"
import Address from "./Component/Addcustomer/Address"
import Footer from "./Component/Footer/footer";
import Table from "./Component/Viewcustomers/Table"

function App() {
  
  return (
    <>
        <div className= ' d-flex'>  
         <Sidebar/>
        <div className='section'>
          <div className='main'><Header/></div>
          {/* <section>
          <Basic/>
          <Address/>
          <div className='main'><Footer/></div>
          </section> */}
          <Table/>
          </div>
       </div> 
       
         
    </>
  )
}

export default App
