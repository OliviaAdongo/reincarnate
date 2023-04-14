import './Home.css'

function Redirect() {
  return (
    <div className="flexbox-containe">
      <div className="errorpage">
      <img
                src="http://www.thesaruni.com/TheSaruniImages/logogrey.png"
                className="grey-logo"
                alt="logo"
              />
        <h1 className='error'>WE WILL HAVE THE OTHER PAGES READY SOON: </h1>
        <div  style={{color:"grey", marginTop:"30px", fontSize:"25px"}}>  

        
        <a href="https://www.youtube.com/embed/I8iI6Oh-OkA" target="_blank" rel="noreferrer"  className="mentext" style={{color:"grey"}}>
              <h1>VIRTUAL TOUR </h1>
              <h6>A TOUR OF THE SARUNI</h6>
            </a>
        <a href="/availability" className='err'  style={{color:"grey"}}>
            <h1 className="men-opt" style={{color:"grey", marginTop:"30px"}}>A V A I L A B I L I T Y</h1>
            <h6 className="descripton">AVAILABLE RESIDENCES</h6>
            
          </a>
          <a href="/residence" className='err'  style={{color:"grey"}}>
            <h1 className="men-opt" style={{color:"grey", marginTop:"30px"}}>METICULOUSLY DESIGNED</h1>
            <h6 className="descripton">THE RESIDENCES</h6>
            
          </a>
          <a href="/contact" style={{color:"grey"}}>

            <h1 className="men-opt" style={{ marginTop:"30px"}}>CONTACT</h1>

            
          </a>
          <a href="/about" className='err'  style={{color:"grey"}}>
            <h1 className="men-opt" style={{color:"grey", marginTop:"30px"}}>ABOUT US</h1>
            {/* <h6 className="descripton">THE RESIDENCES</h6> */}
            
          </a>
          <a href="/menu" style={{color:"grey"}}>

            <h1 className="men-opt" style={{ marginTop:"30px"}}>MENU</h1>

            
          </a>
        </div>
      </div>
    </div>
  );
}

export default Redirect;
