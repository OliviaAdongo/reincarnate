import { useNavigate } from "react-router-dom";
import "./Residencechild.css";

import { FaAngleRight } from "react-icons/fa";
import ChildNav from "../Navbar/ChildNav";

function Residence() {
  let navigate = useNavigate();
  return (
    <div className="kubwa-resident">
      <div>
        <ChildNav />{" "}
      </div>
      <div className="section1">
        <div class="grid-resident-element">
          <div class="grid-child-purple">
            <div className="heading-area">
              <img
                src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                className="grey-logo"
                alt="logo"
              />
            </div>
            <div className="page-title">
              <h6 className="page-heading top">T H E </h6>
              <h1 className="page-heading"> R E S I D E N C E S</h1>
            </div>

            <div className="conten-twise">
              <h1 className="care">CAREFULLY </h1>
              <h1 className="care">CONSIDERED &</h1>

              <h1 className="care">METICULOUSLY </h1>

              <h1 className="care">DESIGNED</h1>

              <p className="paragraph-bottom">
                With uninterrupted views from each apartments, 'The Saruni' at
                Riverside Drive, is a modern interpretation of contemporary
                luxury specifically designed to enhance your living experience
              </p>
            </div>
          </div>
          <div class="grid-child-element green">
            <img
              src="http://testdeploy.thesaruni.com/residenceluxury.jpg"
              alt="residence"
              className="childimage"
              loading="lazy"
            />
            <div>
              <button
                className="fa fa-arrow-right"
                id="button-animation"
                onClick={() => {
                  navigate("/livingroom");
                }}
                // style={{background:"pink"}}
              >
                <FaAngleRight id="arrow" />
              </button>

              {/* <button className="fa fa-arrow-left" id="button-pulseleft">
        <FaAngleLeft className="arrow" />

        </button>
           */}

              {/* <i class="fa fa-arrow-left"></i>
          <i class="fa fa-chevron-down"></i>
          <i class="fa fa-arrow-right"></i> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="explore"
        onClick={() => {
          navigate("/livingroom");
        }}
      >
        <h1
          className="nav-to"
          style={{ fontWeight: "normal", fontSize: "25px" }}
        >
          EXPLORE THE RESIDENCES
        </h1>
        <h1 className="downangle">
          <FaAngleDown style={{ marginRight: "20px" }} />
        </h1>
      </div> */}
    </div>
  );
}

export default Residence;
