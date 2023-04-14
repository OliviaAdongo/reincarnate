import ChildNav from "./ChildNav";
import "./FullMenu.css";

function FullMenu() {
  return (
    <div className="fuller-menu">
      <div>
        <ChildNav />
      </div>

      <div className="full-menu">
        <div className="option1">

          <a href="/availability"  className="sick-hover">
            <h1 className="menu-opt" id="list-option">A V A I L A B I L I T Y</h1>
            <h6 className="description">AVAILABLE RESIDENCES</h6>
          </a>

          <a href="/residence">
            <h1 className="menu-opt">METICULOUSLY DESIGNED</h1>
            <h6 className="description">THE RESIDENCES</h6>
          </a>

          <a href="/preparingpages">
            <h1 className="menu-opt">A LIFESTYLE CONCEIVED ...</h1>
            <h6 className="description">AMENITIES</h6>
          </a>
          <a href="/neighborhood">
            <h1 className="menu-opt">AN EXCLUSIVE ADDRESS</h1>
            <h6 className="description">THE NEIGHBORHOOD</h6>
          </a>
          <a href="/map">
            <h1 className="menu-opt">LOCATION</h1>
            <h6 className="description"> THE MAP</h6>
          </a>

          {/* <h1 className="menu-opt">ABOUT US </h1>
          <a href="/contact">
            <h1 className="menu-opt">CONTACT</h1>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default FullMenu;
