import ChildNav from "../Navbar/ChildNav";
import "./Neighborhoodchild.css";

function Neighborhood() {
  return (
    <div className="parent-div-neighborhood">
      <div>
        <ChildNav />
      </div>
      <div className="flexbox-container-neighborhood-home">
        <div className="flexbox-item-neighborhood-home-1">
          <div className="neighborhood-heading-section">
            <img
              src="http://testdeploy.thesaruni.com/logogrey.png"
              className="residence-neigh-logo-grey"
              alt="logo"
            />

            <h6 className="page-header">T H E </h6>
            <h1 className="page-header"> N E I G H B O R H O O D</h1>
          </div>



          <div className="left-body-heading">
            <h2 className="exclude">AN EXCLUSIVE ADDRESS</h2>
          </div>
          <div className="left-body-content">
            <p className="first-paragraph">
              Coddled by nature on the edge of Nairobi River, 'The Saruni', is a
              tranquil refuge located on Nairobi's coveted Riverside Drive; A
              secluded preference for embasies, diplomatic organizations and
              professional companies.
            </p>
            <p className="second-paragraph">
              Riverside drove is a premium expression of privacy, prestige and
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
            <p className="jkia">20 min from JKIA via the Expressway</p>
            <p className="jkia">
              Easy access to Ngong' Road, Kileleshwa, Kilimani and Loresho.
            </p>
          </div>
        </div>
        <div className="flexbox-item-neighborhood-home-2">
          <img
            src="http://testdeploy.thesaruni.com/neigbourhood.jpg"
            alt="residence"
            className="childimage homeneigh"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Neighborhood;
