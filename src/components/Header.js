import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>web development and website promotions </h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web developer",
            "facebook ads",
            "google ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a className="btn-main-offer" href="#">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
