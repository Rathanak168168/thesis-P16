import React from "react";
import { useLocation } from "react-router-dom";
import "../../bookingstyle.css";

function Booking() {
  const location = useLocation();
  const { tourName } = location.state || {};

  return (
    <div>
      <div className="booking-information">
        <h2 style={{ color: "#cf9d4e", textAlign: "center" }}>
          Booking Information
        </h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tour-name" style={{ color: "red" }}>
                Tour Name *
              </label>
              <input
                type="text"
                id="tour-name"
                name="tour-name"
                value={tourName || "Not specified"}
                readOnly
                required
                className="tour-name-input" // Add a class for styling
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <select id="title" name="title" required>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name *</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="country">Select Your Country *</label>
              <select id="country" name="country" required>
                <option value="" disabled selected>
                  --Select Your Country--
                </option>
                <option value="China">China</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="num-people">Number of People *</label>
              <div className="flex-row">
                <select id="adults" name="adults" required>
                  <option value="" disabled selected>
                    Adults
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select
                  id="children"
                  name="children"
                  style={{ marginTop: "10px" }}
                >
                  <option value="" disabled selected>
                    Children
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="arrival-date">Date of Arrival *</label>
              <input
                type="date"
                id="arrival-date"
                name="arrival-date"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label style={{ color: "#04aa6d" }}>Hotel Class *</label>
            <div className="hotel-class">
              <label>
                <input
                  type="radio"
                  name="hotel-class"
                  value="5-star"
                  required
                />
                Top 5 Star (Above $170 per night per room)
              </label>
              <label>
                <input type="radio" name="hotel-class" value="4-star" />
                Comfortable 4 Star ($80 to $100 per night per room)
              </label>
              <label>
                <input type="radio" name="hotel-class" value="3-star" />
                Economical 3 Star ($50 to $70 per night per room)
              </label>
              <label>
                <input type="radio" name="hotel-class" value="by-myself" />
                Book By Myself
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ideal-trip" style={{ color: "#04aa6d" }}>
                Your Ideal Trip{" "}
              </label>
              <textarea
                id="ideal-trip"
                name="ideal-trip"
                rows="4"
                placeholder="Tell us more to help us understand you better. How can we make it extra special?"
                required
                style={{
                  width: "90%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          <button type="submit" style={{ marginTop: "20px" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
