import React from "react";
import { Outlet , NavLink} from "react-router-dom";
import Home from "../assets/home.png"

export default function Navbar() {
  return (
    <>
      <div className="blueStrip">

    <NavLink to='/'><img className="homeLogo" src={Home}   style={{display:"flex"}} alt="" /></NavLink>
      </div>
      <Outlet />
    </>
  );
}
