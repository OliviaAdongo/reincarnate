import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useRef } from "react";
import "./ChildNav.css";

function ChildNav() {
  let navigate = useNavigate();

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (  
    <div className="child-nav"> 
      <header className="headerr">
        <img
          className="navbary-logo"
          src="http://testdeploy.thesaruni.com/SaruniLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/"); 
          }}
        />
        <h4 className="th">THE SARUNI</h4>
        <nav ref={navRef} className="mtoto">
          <div className="menu">
           
            <a href="https://www.youtube.com/embed/I8iI6Oh-OkA" target="_blank" rel="noreferrer"  className="menutext">
              VIRTUAL TOUR
            </a>
            <a href="/#" className="menutext" st>
              DOWNLOAD BROCHURE
            </a>
            <a href="/contact" className="menutext" st>
              CONTACT
            </a>
          </div>

          <a href="/menu" className="barss">
            <FaBars />
          </a>

          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default ChildNav;
