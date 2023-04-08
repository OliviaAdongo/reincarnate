import ChildNav from "./ChildNav";
import "./FullMenu.css";

function FullMenu() {
  return (
    <div className="fuller-menu">
      <div>
        <ChildNav />
      </div>

      {/* <div class="container">
        <img
          src="https://www.southernliving.com/thmb/CUPVC8gOMAklizaUhwxJbpOgzb8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2320701_ernst20937_0-22bb8891135a498ebf20228329bd1688.jpg"
          alt="Notebook"
          className="back-image"
        />
        <div class="content">
          <div className="option1">
            <a href="/availability">
              <h1 className="menu-opt">A V A I L A B I L I T Y</h1>
              <h6 className="description">AVAILABLE RESIDENCES</h6>
            </a>

            <a href="/residence">
              <h1 className="menu-opt">METICULOUSLY DESIGNED</h1>
              <h6 className="description">THE RESIDENCES</h6>
            </a>

            <a href="/amenities">
              <h1 className="menu-opt">A LIFESTYLE CONCIEVED ...</h1>
              <h6 className="description">AMENITIES</h6>
            </a>
            <a href="/neighborhood">
              <h1 className="menu-opt">AN EXCLUSIVE ADDRESS</h1>
              <h6 className="description">THE NEIGHBORHOOD</h6>
            </a>

            <h1 className="menu-opt">ABOUT US </h1>
            <a href="/contact">
              <h1 className="menu-opt">CONTACT</h1>
            </a>
          </div>
        </div>

      </div> */}

      <div className="full-menu">
        <div className="option1">
          <a href="/availability">
            <h1 className="menu-opt">A V A I L A B I L I T Y</h1>
            <h6 className="description">AVAILABLE RESIDENCES</h6>
          </a>

          <a href="/preparingpages">
            <h1 className="menu-opt">METICULOUSLY DESIGNED</h1>
            <h6 className="description">THE RESIDENCES</h6>
          </a>

          <a href="/preparingpages">
            <h1 className="menu-opt">A LIFESTYLE CONCIEVED ...</h1>
            <h6 className="description">AMENITIES</h6>
          </a>
          <a href="/preparingpages">
            <h1 className="menu-opt">AN EXCLUSIVE ADDRESS</h1>
            <h6 className="description">THE NEIGHBORHOOD</h6>
          </a>

          <h1 className="menu-opt">ABOUT US </h1>
          <a href="/contact">
            <h1 className="menu-opt">CONTACT</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FullMenu;
