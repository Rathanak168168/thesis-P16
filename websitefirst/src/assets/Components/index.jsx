import React, { useState } from "react";
import logo from "../Components/Image/SakAdventuresLogo.png";
import Trip from "../Components/Image/tripadvisor.png";
import { Link } from "react-router-dom";
import "../../homestyle.css";

function Page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div>
      <div className="header">
        <div className="logoSection">
          <img src={logo} alt="Sak Adventures Logo" className="logoSak" />
          <h1 className="companyName">SAK ADVENTURES</h1>
        </div>
        <img src={Trip} alt="TripAdvisor Logo" className="logotripadvisor" />
        <p style={{ fontFamily: "Arial, sans-serif", marginRight: "-210px" }}>
          Speak to Our Experts:{" "}
          <a href="mailto:RathanakTour@gmail.com" className="emailLink">
            RathanakTour@gmail.com
          </a>
        </p>
        <button className="booking-button">Contact</button>
      </div>

      <ul className="menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <a href="/OurTours">Our Tours</a>
        </li>
        <li>Destinations</li>
        <li>Activities</li>
        <li>Community</li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span>About Us</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/mission">Our Mission</Link>
              </li>
              <li>
                <Link to="/Teammember">Our Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Page;
