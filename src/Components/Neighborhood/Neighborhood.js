import { FaAngleRight } from "react-icons/fa";
import "./Neighborhoodchild.css";
import { useNavigate } from "react-router-dom";

function Neighborhood() {
  let navigate = useNavigate();
  return (
    <div className="parent-div-neighborhood">
      <div className="flexbox-container-neighborhood-home">
        <div className="flexbox-item-neighborhood-home-1">
          <div className="heading">
            <img
              src="http://testdeploy.thesaruni.com/logowhite.png"
              // src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
              className="logo"
              alt="logo"
            />
          </div>

          <div className="page-title">
            <h1 className="page-topic"> THE NEIGHBORHOOD </h1>
          </div>

          <div className="left-body-content">
            <p className="first-paragraph">
              Coddled by nature on the edge of Nairobi River, 'The Saruni', is a
              tranquil refuge located on Nairobi's coveted Riverside Drive;
          
            </p>
            <p className="second-paragraph">
            A secluded preference for embassies, diplomatic
              organizations and professional companies.
            </p>
            <p className="second-paragraph">
              Riverside Drive is a premium expression of privacy, prestige and
              convenience.
            </p>
            <h5 className="bottom-heading">
              PROXIMITY TO MAJOR COMMERCIAL HUBS:
            </h5>
            <ul>
              <li className="place">Westlands</li>
              <li className="place">Lavington</li>
              <li className="place">Kileleshwa</li>
              <li className="place">Kilimani</li>
              <li className="place">Yaya</li>
              <li className="place">Nairobi CBD</li>
            </ul>
            <h5 className="bottom-heading">BYPASS CONECTIVITY</h5>
            <p className="jkia">
              20 min from JKIA via the Expressway <br /> Easy access to Ngong'
              Road, Kileleshwa, Kilimani and Loresho.
            </p>
          </div>
        </div>
        <div className="flexbox-item-neighborhood-home-2">
          <img
            src="http://testdeploy.thesaruni.com/neigbourhood.jpg"
            alt="The neighborhood"
            className="childimage homeneigh"
            loading="lazy"
          />
          <div className="right-arrow-responsive">
            <FaAngleRight
              className="fa fa-arrow-right"
              onClick={() => {
                navigate("/map");
              }}
              id="arrow-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Neighborhood;
