import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect } from "react";
import "./Home.css";
import ChildNav from "../Navbar/ChildNav";
// import Home from "./Home";
// import Residence from "./Residence";
// import Neighborhood from "./Neighborhood";
// import Amenities from "./Amenities";
import ResidenceHome from "../Residence/ResidenceHome";
import AmenitiesHome from "../Amenities/AmenitiesHome";
import NeighborhoodHome from "../Neighborhood/NeighborhoodHome";

const fadeAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";

  let slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
  }

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
    prevStyle: { ...slideStyle },
  };
};

function Cara() {
  useEffect(() => {
    const getNumbers = sessionStorage.getItem("numberReloaded");

    if (
      typeof getNumbers === "undefined" ||
      getNumbers === null ||
      parseInt(getNumbers) === 1
    ) {
      window.location.reload();
      sessionStorage.setItem("numberReloaded", 2);
    }
  }, []);

  return (
    <div>
      <ChildNav />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={1500}
        transitionTime={2000}
        animationHandler={fadeAnimationHandler}
        swipeable={false}
      >
      
        <ResidenceHome   />
        <AmenitiesHome  />
        <NeighborhoodHome />
      </Carousel>
    </div>
  );
}

export default Cara;
