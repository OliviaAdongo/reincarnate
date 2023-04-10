import { useNavigate } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css";

function Navbar() {
  let navigate = useNavigate(); 
    const navRef = useRef();
const showNavbar =()=> {
    navRef.current.classList.toggle("responsive_nav")
}   
  return ( 
    <div>
      <header className="header">
        <img
          className="navbar-logo"
          src="http://testdeploy.thesaruni.com/SaruniLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <h4 className="the">THE SARUNI</h4>
        <nav ref={navRef}>
          <a href="/menu" className="bars"><FaBars/></a>
          

          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button  onClick={showNavbar} className="nav-btn">
        <a href="/menu" className="bars"><FaBars/></a>
        </button>
      </header>
    </div>
  );
}

export default Navbar;
