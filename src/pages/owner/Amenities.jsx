import "./Amenities.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import {
  FaWifi,
  FaVideo,
  FaShieldAlt,
  FaBolt,
  FaTint,
  FaBuilding, // ✅ replaced FaElevator
  FaParking,
  FaTshirt,
  FaSnowflake,
  FaBath,
  FaDumbbell,
  FaGamepad,
  FaFingerprint,
  FaFire
} from "react-icons/fa";

function Amenities() {
  const navigate = useNavigate();

  const [amenities, setAmenities] = useState({
    wifi: false,
    cctv: false,
    security: false,
    powerBackup: false,
    roWater: false,
    lift: false,
    parking: false,
    laundry: false,
    acRooms: false,
    geyser: false,
    balcony: false,
    gym: false,
    games: false,
    biometric: false,
    fireSafety: false,
    studyRoom: false
  });

  const toggle = (key) => {
    setAmenities((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("amenities", JSON.stringify(amenities));

    if (amenities.studyRoom) {
      navigate("/study-room");
    } else {
      navigate("/food-timetable");
    }
  };

  const selectedCount = Object.values(amenities).filter(Boolean).length;

  return (
    <div className="amenitiesPage">

      {/* BACK BUTTON */}
      <div className="backBtn" onClick={() => navigate("/hostel-basic-details")}>
        <FaArrowLeft />
      </div>

      <div className="amenitiesWrapper">

        {/* LEFT SECTION */}
        <div className="leftSection">
          <h1 className="logo">Homfsy</h1>

          <h2>Make Your Hostel Stand Out</h2>

          <p>
            Students compare facilities before booking.
            Select all amenities available in your hostel.
          </p>

          <div className="featureBox">✓ Better Visibility</div>
          <div className="featureBox">✓ Higher Trust</div>
          <div className="featureBox">✓ More Bookings</div>
          <div className="featureBox">✓ Premium Listing</div>
        </div>

        {/* RIGHT SECTION */}
        <div className="amenitiesCard">

          <div className="selectedCount">
            Selected: {selectedCount}
          </div>

          <form onSubmit={handleSubmit}>

            {/* ESSENTIAL */}
            <div className="sectionTitle">Essential</div>

            <div className="grid">

              <div className={`card ${amenities.wifi ? "active" : ""}`} onClick={() => toggle("wifi")}>
                <FaWifi className="cardIcon" />
                WiFi
              </div>

              <div className={`card ${amenities.cctv ? "active" : ""}`} onClick={() => toggle("cctv")}>
                <FaVideo className="cardIcon" />
                CCTV
              </div>

              <div className={`card ${amenities.security ? "active" : ""}`} onClick={() => toggle("security")}>
                <FaShieldAlt className="cardIcon" />
                Security
              </div>

              <div className={`card ${amenities.powerBackup ? "active" : ""}`} onClick={() => toggle("powerBackup")}>
                <FaBolt className="cardIcon" />
                Power Backup
              </div>

              <div className={`card ${amenities.roWater ? "active" : ""}`} onClick={() => toggle("roWater")}>
                <FaTint className="cardIcon" />
                RO Water
              </div>

              <div className={`card ${amenities.lift ? "active" : ""}`} onClick={() => toggle("lift")}>
                <FaBuilding className="cardIcon" />
                Lift
              </div>

              <div className={`card ${amenities.parking ? "active" : ""}`} onClick={() => toggle("parking")}>
                <FaParking className="cardIcon" />
                Parking
              </div>

              <div className={`card ${amenities.laundry ? "active" : ""}`} onClick={() => toggle("laundry")}>
                <FaTshirt className="cardIcon" />
                Laundry
              </div>

            </div>

            {/* ROOM COMFORT */}
            <div className="sectionTitle">Room Comfort</div>

            <div className="grid">

              <div className={`card ${amenities.acRooms ? "active" : ""}`} onClick={() => toggle("acRooms")}>
                <FaSnowflake className="cardIcon" />
                AC Rooms
              </div>

              <div className={`card ${amenities.geyser ? "active" : ""}`} onClick={() => toggle("geyser")}>
                <FaBath className="cardIcon" />
                Geyser
              </div>

              <div className={`card ${amenities.balcony ? "active" : ""}`} onClick={() => toggle("balcony")}>
                🪟
                Balcony
              </div>

            </div>

            {/* SECURITY ADVANCED */}
            <div className="sectionTitle">Advanced Security</div>

            <div className="grid">

              <div className={`card ${amenities.biometric ? "active" : ""}`} onClick={() => toggle("biometric")}>
                <FaFingerprint className="cardIcon" />
                Biometric
              </div>

              <div className={`card ${amenities.fireSafety ? "active" : ""}`} onClick={() => toggle("fireSafety")}>
                <FaFire className="cardIcon" />
                Fire Safety
              </div>

            </div>

            {/* LIFESTYLE */}
            <div className="sectionTitle">Lifestyle</div>

            <div className="grid">

              <div className={`card ${amenities.gym ? "active" : ""}`} onClick={() => toggle("gym")}>
                <FaDumbbell className="cardIcon" />
                Gym
              </div>

              <div className={`card ${amenities.games ? "active" : ""}`} onClick={() => toggle("games")}>
                <FaGamepad className="cardIcon" />
                Games
              </div>

              <div className={`card ${amenities.studyRoom ? "active" : ""}`} onClick={() => toggle("studyRoom")}>
                📚 Study Room
              </div>

            </div>

            <button type="submit" className="continueBtn">
              Continue →
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Amenities;