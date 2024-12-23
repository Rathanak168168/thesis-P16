import React from "react";
import Battambang from "../Components/Image/Battambang.jpg";
import rathanak from "../Components/Image/rathanak.jpg";
import chav from "../Components/Image/chav.jpg";
import lors from "../Components/Image/lors.jpg";
import roeun from "../Components/Image/roeun.jpg";
import "../../styleteam.css";

function Team() {
  return (
    <div>
      <h2 className="text2"> Our Teams</h2>
      <div className="valuesContainer1">
        <div className="valueColumn1">
          <img src={rathanak} alt="Batt" className="fullImage" />
          <div className="textWrapper">
            <h3 className="text2"> Phearom Rathanak</h3>
            <h5>Executive Director</h5>
            <p>
              Rathanak is a seasoned professional with a diverse background in
              technology. With 1 year of experience as an IT Support Specialist,
              he honed his skills in troubleshooting, network management, and
              end-user support. Transitioning into frontend development, he
              gained 2 years of expertise in creating dynamic, user-friendly
              interfaces, mastering technologies like HTML, CSS, JavaScript, and
              React.
              <br />
            </p>
          </div>
        </div>
        <div className="valueColumn1">
          <img src={chav} alt="Batt" className="fullImage" />
          <div className="textWrapper">
            <h3 className="text2">Chinh Chav</h3>
            <h5>Frontend Developer</h5>

            <p>
              Chinh Chav brings a unique blend of expertise across multiple
              fields. Starting with 1 year of experience in the tourism
              industry, Chinh developed strong interpersonal and organizational
              skills. Transitioning into IT, he spent 6 months as an IT Support
              Specialist, gaining hands-on experience in troubleshooting and
              system maintenance. Currently, Chinh has 1 year of experience as a
              Frontend Developer, specializing in crafting intuitive and
              visually appealing user interface
              <br />
            </p>
          </div>
        </div>
        <div className="valueColumn1">
          <img src={lors} alt="Batt" className="fullImage" />
          <div className="textWrapper">
            <h3 className="text2">Thann Lors</h3>
            <h5>Backend Developer</h5>

            <p>
              Thann Lors is a skilled Backend Developer with 2 years of hands-on
              experience specializing in Spring Boot. He excels in building
              robust and scalable server-side applications, integrating RESTful
              APIs, and ensuring seamless communication between front-end and
              back-end systems. With a strong foundation in Java and database
              management, Thann is adept at solving complex problems and
              optimizing application performance.
              <br />
            </p>
          </div>
        </div>
        <div className="valueColumn1">
          <img src={roeun} alt="Batt" className="fullImage" />
          <div className="textWrapper">
            <h3 className="text2">SRON CHAMROEUN</h3>
            <h5>Backend Developer</h5>

            <p>
              Sron Chamroeun is an experienced Backend Developer with a
              versatile skill set. He has 1 year of hands-on experience in PHP,
              where he developed dynamic web applications and worked on
              server-side functionalitiesHis adaptability and commitment to
              delivering high-quality solutions make him a valuable contributor
              to any technical team.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
