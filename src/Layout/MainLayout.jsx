import {  useLocation } from "react-router-dom";
import RouteComponent from "./Route";
import Header from "../Component/Header/header";
import Sidebar from "../Component/Header/sidebar";
import "../App.css"

function MainLayout() {
  const location = useLocation();

  const SideBarDisable=
  location.pathname !== "/" && location.pathname !== "/register";;
  // Check if the current path is not '/' or '/register'
  const HeaderDisable =
    location.pathname !== "/" && location.pathname !== "/register";

    const sideBarStyle = {
        marginLeft: !SideBarDisable || !HeaderDisable ? 0 : '79px'
      };

  return (
    <>
      
      <div className="sideb" >
      {SideBarDisable && <Sidebar/> }
      </div>
      <div className="section" style={sideBarStyle}>
        <div className="main">{HeaderDisable && <Header />}</div>
        <section>
          <RouteComponent/>
        </section>
      </div>
    </>
  );
}
export default MainLayout;
