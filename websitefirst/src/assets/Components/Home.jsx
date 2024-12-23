import React, { useState } from "react";
import pic2 from "../Components/Image/pic2.jpg";
import pic4 from "../Components/Image/pic4.jpg";
import Team from "../Components/Image/teamwork.png";
import Intergrity from "../Components/Image/integrity.png";
import Innvation from "../Components/Image/light-bulb.png";
import Excellence from "../Components/Image/excellence.png";
import Battambang from "../Components/Image/Battambang.jpg";
import Royal from "../Components/Image/Royal.jpg";
import Mountain from "../Components/Image/mountain.jpg";
import Kep from "../Components/Image/kep.jpg";
import kong from "../Components/Image/Kongrong.jpg";
import Module from "../Components/Image/Mondulkiri.png";
import Kartie from "../Components/Image/Kartie.jpg";
import Sunset from "../Components/Image/sunset.jpg";
import Kampong from "../Components/Image/kampong.jpg";
import Pravenh from "../Components/Image/pravenh.jpg";
import "../../homestyle.css";
import Angkor from "../Components/Image/Angkor.jpg";
import Sunny from "../Components/Image/sunny.png";
import { useNavigate } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>;

const styles = {
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    marginTop: "-30px",
  },
  text: {
    color: "#d39b3c",
    textAlign: "center",
    fontSize: "2.5rem",
  },
  text1: {
    fontSize: "25px",
    fontFamily: "Open Sans",
  },
  text2: {
    color: "#2181b1",
    textAlign: "center",
    marginTop: "-30px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  textContainer: {
    flex: 1,
    marginRight: "20px",
  },
  imageRight: {
    width: "48%",
    height: "auto",
    borderRadius: "8px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  valuesContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
    backgroundColor: "#fefefe",
    gap: "20px",
    padding: "0 20px",
  },
  valueColumn: {
    flex: 1,
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f8f6f7",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  valueColumn1: {
    flex: 1,
    textAlign: "center",
    padding: "0",
    backgroundColor: "#13527d",
    borderRadius: "1px",
    overflow: "hidden",
    color: "white",
  },
  fullImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  textWrapper: {
    padding: "10px",
  },
  teamImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
    backgroundColor: "#ffffff",
  },
  teamImage1: {
    width: "280px",
    height: "200px",
    // borderRadius: "50%",
    marginBottom: "10px",
    backgroundColor: "#ffffff",
  },
  valuesContainer1: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    backgroundColor: "#f7f9f8",
    gap: "20px",
    padding: "0 20px",
  },
};

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question:
        " What Health Precautions Should I Take Before Traveling to Cambodia?",
      answer:
        "Before traveling to Cambodia, it's advisable to get vaccinations for Hepatitis A, Typhoid, and Tetanus. Consider malaria prophylaxis if you plan to visit rural areas. Always carry a basic first-aid kit and drink bottled or boiled water to avoid waterborne illnesses",
    },
    {
      question: " Are There Any Cultural Norms I Should Be Aware Of?",
      answer:
        "Yes, Cambodia has rich cultural traditions. Dress modestly when visiting temples—shoulders and knees should be covered. It's also respectful to remove your shoes before entering someone's home or a sacred site. Always ask for permission before taking photos of people.",
    },
    {
      question: " What Should I Do in Case of an Emergency?",
      answer:
        "In case of an emergency, contact your country’s embassy or consulate. Local emergency services can be reached by dialing 119 for police and 118 for medical assistance. It’s also helpful to have a local SIM card for quick communication.",
    },
    {
      question: "Is Public Transportation Safe and Reliable?",
      answer:
        "Public transportation in Cambodia, including buses and tuk-tuks, is generally safe. However, it's advisable to use reputable companies for longer journeys and negotiate fares beforehand for tuk-tuks. Always keep your belongings secure while traveling.",
    },
    {
      question: " Should I Carry Cash or Use Credit Cards?",
      answer:
        "While credit cards are accepted in many urban areas, cash is still the preferred payment method in markets and rural areas. It's best to carry small denominations of Cambodian riel or US dollars for convenience.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home-container">
      <img src={pic2} alt="Sample Image" style={styles.image} />
      <h1 style={styles.text}>Welcome To SAK ADVENTURES</h1>
      <p style={styles.text1}>
        SAK Adventures is an officially registered travel agency. By cooperating
        with only reliable and reputable operators, we always provide customers
        a safe and cost-effective experience.
      </p>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h2 style={styles.text2}>Why Choose SAK Adventures?</h2>
          <p style={styles.text1}>
            We specialize in creating tailored travel experiences. Our team
            ensures safety, comfort, and affordability for all your adventures.
            With our trusted operators, you’ll experience Cambodia’s rich
            culture, scenic beauty, and hidden gems like never before.
          </p>
        </div>
        <img
          src={pic4}
          alt="Second Image"
          style={{
            ...styles.imageRight,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            boxShadow: isHovered ? "0px 4px 20px rgba(0, 0, 0, 0.2)" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div>
        <h2 style={styles.text}>Our values</h2>
      </div>

      <div style={styles.valuesContainer}>
        <div style={styles.valueColumn} className="zoom">
          <img src={Team} alt="Teamwork" style={styles.teamImage} />
          <h3 style={{ ...styles.text2, marginTop: "-10px" }}>Teamwork</h3>

          <p>
            Working together for better results. At SAK Adventures, we believe
            in the power of collaboration. By combining our diverse skills,
            experiences, and perspectives, we ensure every challenge is met with
            creativity and every goal is achieved with efficiency
          </p>
        </div>
        <div style={styles.valueColumn} className="zoom">
          <img src={Intergrity} alt="intergrity" style={styles.teamImage} />
          <h3 style={{ ...styles.text2, marginTop: "-10px" }}>Integrity</h3>
          <p>
            Honesty and transparency in everything we do. At SAK Adventures,
            integrity is the foundation of our operations. We are committed to
            earning and maintaining trust through ethical practices, open
            communication, and accountability. Our dedication to doing what’s
            right ensures lasting relationships with our customers and partners.
          </p>
        </div>
        <div style={styles.valueColumn} className="zoom">
          <img src={Innvation} alt="innvation" style={styles.teamImage} />
          <h3 style={{ ...styles.text2, marginTop: "-10px" }}>Innovation</h3>
          <p>
            Creativity in all our processes and solutions. At SAK Adventures,
            innovation drives us forward. We constantly explore new ideas and
            technologies to enhance your travel experience, ensuring it is
            unique, memorable, and tailored to your needs.
          </p>
        </div>
        <div style={styles.valueColumn} className="zoom">
          <img src={Excellence} alt="excellence" style={styles.teamImage} />
          <h3 style={{ ...styles.text2, marginTop: "-10px" }}>Excellence</h3>
          <p>
            We strive for the highest quality in everything we do. Excellence is
            not just a goal—it's our standard. From the moment you plan your
            journey with us to the final step of your adventure, we ensure
            impeccable attention to detail, unmatched service, and a commitment
            to exceeding expectations.
          </p>
        </div>
      </div>
      <div>
        <h2 style={styles.text}>Popular Destinations</h2>
      </div>
      <div style={styles.valuesContainer1}>
        <div style={styles.valueColumn1} className="zoom">
          <img src={Battambang} alt="Batt" style={styles.fullImage} />
          <div style={styles.textWrapper}>
            <h3 style={{ ...styles.text2, marginTop: "10px", color: "white" }}>
              Battambang
            </h3>
            <p>
              The largest rice-bowl of Cambodia, Battambang truly emerges
              picturesque countryside while the colonial town remains French
              architecture.....
              {/* Try on the bamboo train to see the
              scenic countryside. Watch skillful and artful shows by Phare
              Circus. See thousands of bats flying out of the caves at dusk.
              Battambang is the best in Cambodian rural culture. */}
              <br />
              <button onClick={() => navigate("/btb")}>View Detail</button>
            </p>
          </div>
        </div>
        <div style={styles.valueColumn1} className="zoom">
          <img src={Royal} alt="Royal" style={styles.fullImage} />
          <div style={styles.textWrapper}>
            <h3 style={{ ...styles.text2, marginTop: "10px", color: "white" }}>
              Royal
            </h3>
            <p>
              Phnom Penh is the capital city of Cambodia where the past and
              present merge. Visitors can learn about their resilient spirit at
              the Tuol Sleng Genocide Museum and Killing Fields........
              {/* Enjoy the dear
              sunset cruise of Mekong Island. Climb up to Oudong Mountain for
              panoramic views. Phnom Penh is lively but also near natural
              getaways. */}
              <button onClick={() => navigate("/Royalplace")}>
                View Detail
              </button>
            </p>
          </div>
        </div>

        <div style={styles.valueColumn1} className="zoom">
          <img src={Mountain} alt="moutain" style={styles.fullImage} />
          <div style={styles.textWrapper}>
            <h3 style={{ ...styles.text2, marginTop: "10px", color: "white" }}>
              Kampong Thom
            </h3>
            <p>
              Kampong Thom is Cambodia's second largest province by area. There
              are a number of significant Angkorian sites in the area, including
              Prasat Sambor Prei Kuk...
            </p>
            <button onClick={() => navigate("/Kampong")}>View Detail</button>
          </div>
        </div>
        <div style={styles.valueColumn1} className="zoom">
          <img src={Kep} alt="kep" style={styles.fullImage} />
          <div style={styles.textWrapper}>
            <h3 style={{ ...styles.text2, marginTop: "10px", color: "white" }}>
              Kep & Kampot
            </h3>
            <p>
              Kampot is a city in southern Cambodia and the capital of Kampot
              Province. It is on the Praek Tuek Chhu River southeast of the
              Elephant...
            </p>
            <button onClick={() => navigate("/Kep")}>View Detail</button>
          </div>
        </div>
        <div style={styles.valueColumn1} className="zoom">
          <img src={kong} alt="Koh" style={styles.fullImage} />
          <div style={styles.textWrapper}>
            <h3 style={{ ...styles.text2, marginTop: "10px", color: "white" }}>
              Koh Rong Island
            </h3>
            <p>
              Koh Rong, the second largest island of Cambodia, is a pleasant
              place for a resort stay. You can appreciate the coastline views
              {/* with open sea and enjoyable weather. Enjoy the smooth hills
              sloping towards the beaches and bays. Dive in the crystal and
              clear water. Koh Rong is the ideal paradise for beach and nature
              lovers. */}
            </p>
            <button onClick={() => navigate("/Koh Rong")}>View Detail</button>
          </div>
        </div>
      </div>
      <div>
        <p></p>
        <div style={styles.valuesContainer1}>
          <div style={styles.valueColumn1} className="zoom">
            <img src={Module} alt="Battambang" style={styles.fullImage} />
            <div style={styles.textWrapper}>
              <h3
                style={{ ...styles.text2, marginTop: "10px", color: "white" }}
              >
                Mondulkiri
              </h3>
              <p>
                Bordering the provinces of Kratié to the west, Stung Treng to
                the northwest, Ratanakiri to the north, and the country of
                Vietnam to the east..
              </p>
              <button onClick={() => navigate("/Royalplace")}>
                View Detail
              </button>
            </div>
          </div>
          <div style={styles.valueColumn1} className="zoom">
            <img src={Kartie} alt="Royal" style={styles.fullImage} />
            <div style={styles.textWrapper}>
              <h3
                style={{ ...styles.text2, marginTop: "10px", color: "white" }}
              >
                Kratie
              </h3>
              <p>
                The area now known as Kratié was part of the early first
                millennium Kingdom of Funan until Funan itself was superseded
                and absorbed in the...
              </p>
              <button onClick={() => navigate("/Royalplace")}>
                View Detail
              </button>
            </div>
          </div>

          <div style={styles.valueColumn1} className="zoom">
            <img src={Sunset} alt="moutain" style={styles.fullImage} />
            <div style={styles.textWrapper}>
              <h3
                style={{ ...styles.text2, marginTop: "10px", color: "white" }}
              >
                Sunset on Tonle Sap !
              </h3>
              <p>
                Experience the magic of Cambodia's Tonle Sap Lake. Explore
                floating villages, witness local life on the water, and cap off
                your day with a stunning sunset over the tranquil lake.
                {/* It's a
                picturesque and peaceful journey into the heart of Cambodian
                culture and nature. */}
              </p>
              <button onClick={() => navigate("/Royalplace")}>
                View Detail
              </button>
            </div>
          </div>
          <div style={styles.valueColumn1} className="zoom">
            <img src={Kampong} alt="kep" style={styles.fullImage} />
            <div style={styles.textWrapper}>
              <h3
                style={{ ...styles.text2, marginTop: "10px", color: "white" }}
              >
                Kampong Cham
              </h3>
              <p>
                Kampong Cham means "Port of the Chams" in Khmer. Kampong means
                port, harbor. Cham refers to the ethnic Cham people living in
                the province. The...
              </p>
            </div>
            <button onClick={() => navigate("/Royalplace")}>View Detail</button>
          </div>
          <div style={styles.valueColumn1} className="zoom">
            <img src={Pravenh} alt="Koh" style={styles.fullImage} />
            <div style={styles.textWrapper}>
              <h3
                style={{ ...styles.text2, marginTop: "10px", color: "white" }}
              >
                Preah Vihear
              </h3>
              <p>
                Affording a view for many kilometers across a plain, Prasat
                Preah Vihear has the most spectacular setting of all the temples
                built during the six-century-long...
              </p>
              <button onClick={() => navigate("/Royalplace")}>
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 style={styles.text}>Travel Time for Cambodia</h2>
      </div>
      <div style={styles.valuesContainer1}>
        <div
          style={{ ...styles.valueColumn1, backgroundColor: "#ffffff" }}
          className="zoom"
        >
          <img src={Angkor} alt="Battambang" style={styles.fullImage} />
          <div style={styles.textWrapper}>
            <h3 style={{ ...styles.text2, marginTop: "10px", color: "black" }}>
              Peak Tourist Season (Nov - Apr)
            </h3>
            <p style={{ color: "black" }}>
              The best time to visit Cambodia is between November and February.
              The weather is mostly warm and dry during this time of the year.
              Visitors could enjoy the days here more delightfully and
              pleasantly. Destinations like Siem Reap and Phnom Penh all welcome
              the flush of tourists from all over the world. March and April
              wiil be the hottest months throughout the year Please arrange and
              book your itinerary in advance to avoid missing the best time
            </p>
          </div>
        </div>
        <div
          style={{ ...styles.valueColumn1, backgroundColor: "#ffffff" }}
          className="zoom"
        >
          <img src={Sunset} alt="Royal" style={styles.fullImage} />
          <div style={styles.textWrapper}>
            <h3 style={{ ...styles.text2, marginTop: "10px", color: "black" }}>
              Low Season (May - Oct)
            </h3>
            <p style={{ color: "black" }}>
              The low season in Cambodia experiences more humid and hotter
              weather and there will be fewer tourists. But a range of hotels
              and guesthouses especially in the coastal line, will have a large
              discount. What's good also is that visitors can enjoy the trees
              flourishing and refreshing across the country. September and
              October are not recommended for visiting Cambodia with the huge
              precipitation Rainy season could be a good chance to take a boat
              on the Tonle Sap Lake
            </p>
          </div>
        </div>

        <div>
          <h2
            style={{
              color: "#13527d",
              textAlign: "center",
              marginTop: "-20px",
            }}
          >
            Weather Overview
          </h2>
          <div
            style={{
              backgroundColor: "#13527d",
              color: "white",
              padding: "10px",
            }}
          >
            <h4 style={{ textAlign: "center" }}>Dry Season (Nov - Apr)</h4>
            <ul>
              <li style={{ color: "white" }}>Siem Reap: 20°C - 32°C</li>
              <li style={{ color: "white" }}>Phnom Penh: 26°C - 30°C</li>
              <li style={{ color: "white" }}>Sihanoukville: 26°C - 28°C</li>
            </ul>
            <p>
              <strong>Activities:</strong> Hiking, visiting temples, exploring
              floating villages.
            </p>
            <p>
              <strong>Travel Tip:</strong> Stay hydrated and wear sunscreen.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#cf9d4e",
              color: "white",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <h4 style={{ textAlign: "center" }}>Rainy Season (Oct - May)</h4>
            <ul>
              <li style={{ color: "white" }}>Siem Reap: 26°C - 32°C</li>
              <li style={{ color: "white" }}>Phnom Penh: 27°C - 29°C</li>
              <li style={{ color: "white" }}>Sihanoukville: 26°C - 29°C</li>
            </ul>
            <p>
              <strong>Activities:</strong>Enjoying lush landscapes, visiting
              waterfalls.
            </p>
            <p>
              <strong>Travel Tip:</strong> Carry an umbrella and wear waterproof
              shoes.
            </p>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <h2 style={{ textAlign: "center" }}>
          FAQs about Planning a Cambodia Trip
        </h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h4 className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}{" "}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </h4>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
