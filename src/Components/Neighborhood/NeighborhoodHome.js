import './Neighborhood.css'
// import { FaBars } from 'react-icons/fa';


function NeighborhoodHome() {
  
  return (
    <div className="flexbox-container-neighborhood">
    <div className="flexbox-item-neighborhood-1">
    <img
    src='http://testdeploy.thesaruni.com/neighborhoodhome.jpg'
      alt="residence"
      className="neighborhood-profile"
      loading="lazy"

    /> 
    </div>


    <div className="flexbox-item-neighborhood-2">

    <div class="logo2" >
<img src="http://testdeploy.thesaruni.com/SaruniLogo.png" alt="Logo"/>
</div>
      <h4 className="reside  "
      
      >A N </h4>
      <h4
        className="reside  "
        style={{ marginTop: "15px", marginBottom: "15px" }}

      >
        {" "}
        E X C L U S I V E
      </h4>
      <h4
        className="reside  "
        style={{ marginTop: "15px", marginBottom: "15px" }}

      
      >
        {" "} 
       A D D R E S S 
      </h4>
  
      <h5 className="reside-paragraph" style={{marginTop:"15px"}}>Riverside Drive is the premium expression of privacy,prestige and convenience  </h5>
     
  
      {/* <button
        onClick={() => {
          navigate("/neighborhood");
        }}
        className="button-46"
      >
        THE NEIGHBORHOOD
      </button> */}
    </div>
  </div>
  )
}

export default NeighborhoodHome