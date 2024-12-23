import React, { useState } from "react";
import "../../homestyle.css";
import pp from "../Components/Image/PP.jpg";
import Royal from "../Components/Image/RY.jpg";
import Wat from "../Components/Image/Wat.png";
import kophic from "../Components/Image/Kohpic.jpg";
import Museum from "../Components/Image/museum.jpg";

import { useNavigate } from "react-router-dom";

function Royal1() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [pp, Royal, Wat, kophic, Museum];
  const tourName = "Phnom Penh Tour";

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question:
        "What is the Independence Monument in Phnom Penh, and what does it symbolize?",
      answer:
        "The Independence Monument, built in 1958, commemorates Cambodia's independence from French colonial rule in 1953. It is a lotus-shaped structure inspired by Angkorian architecture and is located at the intersection of Norodom and Sihanouk Boulevards.",
    },
    {
      question: " What is the Royal Palace in Phnom Penh used for today?",
      answer:
        "The Royal Palace serves as the residence of the King of Cambodia and is used for ceremonial purposes. Certain sections, like the Throne Hall and Silver Pagoda, are open to the public",
    },
    {
      question:
        "What is the significance of Wat Phnom in Phnom Penh’s history?",
      answer:
        "Wat Phnom is considered the birthplace of Phnom Penh. Legend says it was founded in 1372 by Lady Daun Penh, who discovered sacred Buddha statues in the Mekong River and built a hilltop shrine to house them",
    },
    {
      question: "What is Koh Pich, and why is it popular?",
      answer:
        " Koh Pich, or Diamond Island, is a modern entertainment and event district in Phnom Penh. It features wedding halls, restaurants, a convention center, and recreational areas",
    },
    {
      question: "What is the National Museum of Cambodia known for?",
      answer:
        " The National Museum of Cambodia houses the country’s largest collection of Khmer art and artifacts, dating from the pre-Angkorian period to the post-Angkorian era.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="btb-container">
      <div className="content-wrapper">
        {/* Image section */}
        <div className="slideshow-container">
          <img
            src={images[currentImageIndex]}
            alt="Slideshow"
            className="slideshow-image"
          />
          <button className="prev-arrow" onClick={handlePrevImage}>
            &#x2039;
          </button>
          <button className="next-arrow" onClick={handleNextImage}>
            &#x203A;
          </button>
        </div>

        {/* Text section */}
        <div className="text-container">
          <h2 style={{ marginTop: "-10px", marginLeft: "100px" }}>
            Travel Place in Phnom Penh
          </h2>
          <p>
            Phnom Penh, the capital city of Cambodia, is a vibrant and historic
            metropolis situated at the confluence of three rivers: the Mekong,
            Tonle Sap, and Bassac. It is the political, cultural, and economic
            heart of Cambodia and offers a blend of historical landmarks, modern
            developments, and traditional charm.
          </p>

          <div className="itinerary">
            <span
              style={{
                color: "red",
                textAlign: "center",
                marginLeft: "150px",
              }}
            >
              Trip Length: 2 days & 1 night
            </span>
            <div className="day-block">
              <strong>Place 1:</strong> <span>Independence Monument</span>
            </div>
            <div className="day-block">
              <strong>Place 2:</strong> <span>Royal Place</span>
            </div>
            <div className="day-block">
              <strong>Place 3:</strong> <span>Wat Phnom Daun Penh</span>
            </div>
            <div className="day-block">
              <strong>Place 4:</strong> <span>Koh Pich</span>
            </div>
            <div className="day-block">
              <strong>Place 5:</strong> <span>National Museum</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="faq-section1">
        <h2 style={{ textAlign: "center", color: "#cf9d4e" }}>
          FAQs about Planning in Battambang Trip
        </h2>
        {faqs.map((faq, index) => (
          <div className="faq-item1" key={index}>
            <h4 className="faq-question1" onClick={() => toggleAnswer(index)}>
              {faq.question}{" "}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </h4>
            {activeIndex === index && (
              <p className="faq-answer1">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="service-section">
        <h2 style={{ textAlign: "center", color: "#cf9d4e" }}>
          Service Inclusions & Exclusions
        </h2>
        <div className="service-container">
          <div className="service-inclusions">
            <h3 style={{ color: "#28a745", textAlign: "center" }}>
              Service Inclusions
            </h3>
            <ul>
              <li>
                Flight tickets with airport tax as listed in the itinerary.
              </li>
              <li>Entrance fee and sightseeing as listed in the itinerary.</li>
              <li>Private English speaking tour guide service.</li>
              <li>
                Private van for land transportation with cold drinking water and
                soft drink provided in the car.
              </li>
              <li>
                Meals as listed in the itinerary (B for breakfast, L for lunch,
                D for dinner).
              </li>
            </ul>
          </div>
          <div className="service-exclusions">
            <h3 style={{ color: " #dc3545", textAlign: "center" }}>
              Service Exclusions
            </h3>
            <ul>
              <li>International air tickets.</li>
              <li>Visa Handling fee, visa stamp fee.</li>
              <li>Meals not listed in the itinerary.</li>
              <li>Insurance, gratuities and personal expenses.</li>
              <li>Tipping for guide, driver and hotel bell boys, etc.</li>
              <li>Surcharge for public holidays (if any).</li>
              <li>Services not stated in the itinerary.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="service-section1">
        <h2 style={{ textAlign: "center", color: "red" }}>
          CANCELLATION AND NO-SHOW
        </h2>
        <p>
          <span style={{ color: "blue", fontWeight: "bold" }}>1.</span> All
          cancellations should be made in writing prior 1 month (30 days) to
          arrival date and should be acknowledged by SAK Adventures, no
          cancellation fee will be charged and subject to group size.
        </p>
        <p>
          <span style={{ color: "blue", fontWeight: "bold" }}>2.</span> For FIT
          reservation 06 passengers or less, cancellation will be charged as
          follows: 7 days to 4 days prior to arrival date: 50% of total invoice
          charge 3 days or less prior to arrival date: 100% of total invoice
          charge
        </p>
        <p>
          <span style={{ color: "blue", fontWeight: "bold" }}>3.</span> For GIT
          reservation 07 passengers or more, cancellation will be charges as
          follows. 21 days to 15 days prior to arrival date: 50% of total
          invoice charges 14 days or less prior to arrival date: 100% of total
          invoice charges
        </p>
        <p>
          {" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>4.</span> For any
          no show will be charged full total invoice charge.
        </p>
      </div>
      <button onClick={() => navigate("/Booking", { state: { tourName } })}>
        Booking
      </button>
    </div>
  );
}
export default Royal1;