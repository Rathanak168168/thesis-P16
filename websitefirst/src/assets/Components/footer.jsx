import React from "react";
import Facebook from "../Components/Image/facebook.png";
import instagram from "../Components/Image/Instargram.png";
import linkin from "../Components/Image/Linkin.png";
import aba from "../Components/Image/ABA.png";
import khqr from "../Components/Image/KHQR.png";
import visa from "../Components/Image/VISA.png";
import master from "../Components/Image/MASTER.png";
import uNION from "../Components/Image/UNION.png";
import jcb from "../Components/Image/JCB.png";
import ac from "../Components/Image/AC.jpg";
function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Sak Adventures</h2>
            <p>
              Don't know where to travel? Do you want to know the most
              incredible places in South-East Asia? Here we show you some places
              highlighted by our travel specialists.
            </p>
            <div className="socials">
              <h3 style={{ color: "white" }}> Socail Media</h3>
              <a
                href="https://web.facebook.com/people/SAK-Adventures/100083049684871/?mibextid=ZbWKwL"
                aria-label="Facebook"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://web.facebook.com/people/SAK-Adventures/100083049684871/?mibextid=ZbWKwL"
                aria-label="Facebook"
              >
                <img
                  src={instagram}
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sak-adventures-2b3521285/"
                aria-label="Facebook"
              >
                <img
                  src={linkin}
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Tour Package</a>
              </li>
              <li>
                <a href="#">Angkor Sunrise</a>
              </li>
              <li>
                <a href="#">Activity</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Siem Reap</a>
              </li>
              <li>
                <a href="#">Landing Page</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h2>Contact</h2>
            <p>
              <strong>Address:</strong> Sala Kanseng Village, Siem Reap,
              Cambodia
            </p>
            <p>
              <strong>Hotline:</strong> +855 98 838423
            </p>
            <p>
              <strong>Email:</strong> info@sakadventures.com
            </p>
            <div className="footer-bottom11">
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "-5px",
                  color: "#13527d",
                }}
              >
                We Accept
              </h3>
              <img
                src={aba}
                alt="Facebook"
                style={{ width: "60px", height: "45px", marginLeft: "10px" }}
              />
              <img
                src={khqr}
                alt="Facebook"
                style={{ width: "60px", height: "45px", marginLeft: "10px" }}
              />
              <img
                src={visa}
                alt="Facebook"
                style={{ width: "60px", height: "45px", marginLeft: "10px" }}
              />
              <img
                src={master}
                alt="Facebook"
                style={{ width: "60px", height: "45px", marginLeft: "10px" }}
              />
              <img
                src={uNION}
                alt="Facebook"
                style={{ width: "60px", height: "45px", marginLeft: "10px" }}
              />
              <img
                src={jcb}
                alt="Facebook"
                style={{ width: "60px", height: "45px", marginLeft: "10px" }}
              />
              <img
                src={ac}
                alt="Facebook"
                style={{ width: "60px", height: "45px", marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom1">
        <p>&copy; 2025 Sak Adventures | All Rights Reserved</p>
      </div>
    </div>
  );
}
export default footer;
