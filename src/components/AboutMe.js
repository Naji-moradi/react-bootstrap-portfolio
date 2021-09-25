import React from "react";
import author from "../me1.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="auther" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading centerwhilesmall">about me text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque
            quis totam reprehenderit sint nesciunt magnam? Earum molestiae
            quaerat laboriosam ratione quasi dolorum blanditiis, qui, neque in
            maiores quam nemo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae saepe est corrupti reiciendis nihil,
            asperiores, mollitia modi quaerat unde assumenda rerum obcaecati
            quia provident. Ullam id repellat laborum molestiae at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
