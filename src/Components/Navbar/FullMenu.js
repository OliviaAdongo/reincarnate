
import "./FullMenu.css";

function FullMenu() {
  return (
    <div className="fuller-menu">
      <div className="full-menu">
        <div className="option1">
          <a href="/availability">
            <button className="button-80" id="menu-opt">
              AVAILABILITY
            </button>

            <h6 className="description">AVAILABLE RESIDENCES</h6>
          </a>

          <a href="/residence">
            <button className="button-80" id="menu-opt">
              METICULOUSLY DESIGNED
            </button>
            <h6 className="description">THE RESIDENCES</h6>
          </a>

          <a href="/amenities">
            <button className="button-80" id="menu-opt">
              A LIFESTYLE CONCIEVED...
            </button>

            {/* <h1 className="menu-opt">A LIFESTYLE CONCEIVED ...</h1> */}
            <h6 className="description">AMENITIES</h6>
          </a>
          <a href="/neighborhood">
            <button className="button-80" id="menu-opt">
              AN EXCLUSIVE ADDRESS
            </button>

            {/* <h1 className="menu-opt">AN EXCLUSIVE ADDRESS</h1> */}
            <h6 className="description">THE NEIGHBORHOOD</h6>
          </a>
          <a href="/map">
            <button className="button-80" id="menu-opt">
              LOCATION
            </button>
            <h6 className="description"> THE MAP</h6>
          </a>
          <div className="bottom-menu">
            <a href="/contact">
              <h6 className="bottom-opt">CONTACT</h6>
            </a>
            <a href="/about">
              <h6 className="bottom-opt">ABOUT US </h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullMenu;
