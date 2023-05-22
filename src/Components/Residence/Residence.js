import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function Residence() {
  let navigate = useNavigate();
  return (
    <div className="flexbox-container">
      <div className="flexbox-item-1">
        <div className="heading">
          <img
            src="http://testdeploy.thesaruni.com/logowhite.png"
            className="logo"
            alt="logo"
          />
        </div>
        <div className="page-title">
          <h1 className="page-topic">THE RESIDENCE</h1>
        </div>
        <div className="second-description">
          <h1 className="page-summary">
            CAREFULLY <br />
            CONSIDERED & <br />
            METICULOUSLY <br />
            DESIGNED
          </h1>
          <p className="paragraph-summary one">
            With uninterrupted views from each apartments, 'The Saruni' at
            Riverside Drive, is a modern interpretation of contemporary luxury
            specifically designed to enhance your living experience.
          </p> 
        </div>
      </div>
      <div className="flexbox-item-2">
        <img
          src="http://testdeploy.thesaruni.com/residenceluxury.jpg"
          alt="residence"
          className="building-profile"
          loading="lazy"
        />
        <div className="right-arrow-responsive">
          <FaAngleRight
          className="fa fa-arrow-right"
            onClick={() => {
              navigate("/livingroom");
            }}
            id="arrow-right"
          />
        </div>
      </div>
    </div>
  );
}

export default Residence;
