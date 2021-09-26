import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
// import { FaDesktop, faFileCode } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5"> my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis, nobis.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Facebook ads SMM</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                quod!
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>
              <h3>Facebook ads SMM</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                quod!
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Google ads</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                quod!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
