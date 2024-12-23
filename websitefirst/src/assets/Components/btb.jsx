import React, { useState } from "react";
import "../../homestyle.css";
import Battambang from "../Components/Image/Battambang.jpg";
import Bamboo from "../Components/Image/bamboo.jpg";
import banan from "../Components/Image/Banan Temple.jpg";
import bananGrap from "../Components/Image/BananGrapFarm.jpg";
import mrsBunRoeung from "../Components/Image/MrsBunRoeung’sAncientHouse.jpg";
import { useNavigate } from "react-router-dom";

function BTB() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Battambang, Bamboo, banan, bananGrap, mrsBunRoeung];
  const tourName = "Battambang Tour";

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
        "What is the significance of Lok Ta Dambong Kra Nhoung in Cambodian culture?",
      answer:
        "Lok Ta Dambong Kra Nhoung is the most significant landmark of Battambang and it’s a sacred place to make wishes on special festival days. Both Battambang citizens and other local people who pass by always stop to make an offering with incenses, fresh flowers and fruits to Lok Ta Dambong Kra Nhoung that they certainly believe to bring them prosperity, safe journey, good fortune and happiness then they take photos together with families and friends before leaving.",
    },
    {
      question:
        "What makes The Bamboo Train (Norry) a unique experience for tourists?",
      answer:
        "The famous thing about Battambang is The Bamboo Train or in Khmer “Norry” which provides unique experience to catch the glimpses of beautiful rural countryside and have some fun while the creative bamboo platform attached motor-engine runs over the railway which was constructed during French colonial time and the railway is linked to Phnom Penh and Poi Petborder (Thailand). If your bamboo train confronts another coming toward you, the one with bigger load will have the right to go first while another has to get off the railway and piece the bamboo platform, and reinstalls then continues its way. There are two bamboo train stations in Battambang, the original Bamboo Train is just located 5km from the central town and it’s popularly occupied by oversea tourists while the new Bamboo Train situates near Banan temple with approx. 22km (38 minute drive) and it attractively meets local desire.",
    },
    {
      question:
        "What is the historical and cultural significance of Banan Temple in Cambodia?",
      answer:
        "Banan temple is located about 25km south of Battambang, with 40 minute drive pass by beautiful rice fields and pomelo farm where you have a chance to taste some bites of organic pomelos. This 11th century temple was built atop Banan mountain with approx. 100m high and it’s accessible on foot through 352 steps. Surrounded by tranquil nature and two mysterious caves at the hillside, tourists can reveal amazing temple architecture along with history while enjoying the breathtaking and panoramic view dotting with Sangker River. Banan temple is considered as one of the main tourist attractions in the region but it is not actually a must-see.",
    },
    {
      question:
        "What can visitors experience at Banan Grape Farm in Battambang?",
      answer:
        "In short, Banan grape farm is a considerable place to catch the highlights of grape farming, harvesting and understanding the process of red wine is distilled, and it displays some different local brandy and red wine. It’s a great opportunity to taste the authentic flavor of brandy and grape wine while wondering around is fresh, take some nice photos of the surrounding and flower gardens. The grape farm is located in Botsala village, Banan district, about 14km south of Battambang downtown and it would be a worth visit if you pass by to visit Banan temple.",
    },
    {
      question:
        "Why is Mrs. Bun Roeung’s Ancient House a must-visit attraction in Battambang?",
      answer:
        "Many tourists never forget to visit Mrs. Bun Roeung’s house which was built by a Khmer couple during French colonial time, until now it is over 100 years old, the oldest traditional wooden house admired by notable Khmer arts and architecture in Wat Kor village of Battambang. During Khmer Rouge Genocide, the house was used as the storage, kitchen and a place of threshing rice. The house truly remains attractive because of its history, crafted design and the wooden rice grinder which can describe how unhusked rice and rice are processed at the place.",
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
            Beauty Place in Battambang
          </h2>
          <p>
            The largest rice-bowl of Cambodia, Battambang truly emerges
            picturesque countryside while the colonial town remains French
            architecture, old yellow buildings and some of Angkorian temples are
            still in good condition including Banan and Ek Phnom temples.
            However, visiting Battambang, tourists never leave Battambang
            without experiencing the unique Bamboo train. Featured by the
            significant Sangker River, the walkable riverside gives short
            highlights of evening activities and street food you may love to
            try.
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
              <strong>Place 1:</strong> <span>Lok Ta Dambong Kra Nhoung</span>
            </div>
            <div className="day-block">
              <strong>Place 2:</strong> <span>The Bamboo Train (Norry)</span>
            </div>
            <div className="day-block">
              <strong>Place 3:</strong> <span>Banan Temple</span>
            </div>
            <div className="day-block">
              <strong>Place 4:</strong> <span>Banan Grape Farm</span>
            </div>
            <div className="day-block">
              <strong>Place 5:</strong>{" "}
              <span>Mrs. Bun Roeung’s Ancient House</span>
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

export default BTB;
