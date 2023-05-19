import "./Slides.css";
import homelogo from "./image/saruni-home-logo.png";


function Slide1() {
  return (
    <>
      <div className="home">
        <div className="flexbox-item-1" id="home-slide">
        <div  id="saruni-logo-section">
          <img
          src={homelogo}
            // src="https://thesaruni.com/images/SaruniLogo.png"
            alt="Logo"
            id="saruni-home-logo-word"
          />
         
           <h1 className="home-heading">RESIDE IN A LUXURIOUS <br/> SANCTUARY</h1>
         <p className="home-paragraph">Nestled in unparalleled tranquility</p>
        </div>

      </div>

      </div>
    </>
  );
}

export default Slide1;
