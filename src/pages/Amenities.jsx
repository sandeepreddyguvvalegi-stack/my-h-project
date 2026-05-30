import "./Amenities.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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

    studyRoom: false,
    library: false,
    computerRoom: false,

    breakfast: false,
    lunch: false,
    dinner: false,
    snacks: false,

    acRooms: false,
    geyser: false,
    balcony: false,

    gym: false,
    games: false
  });

  const toggle = (key) => {
    setAmenities((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "amenities",
      JSON.stringify(amenities)
    );

    // if study room selected → next page can be study room details
    if (amenities.studyRoom) {
      navigate("/study-room-details");
    } else {
      navigate("/food-timings");
    }
  };

  return (
    <div className="amenitiesPage">

      <div className="backBtn" onClick={() => navigate("/hostel-basic-details")}>
        <FaArrowLeft />
      </div>

      <div className="amenitiesContainer">

        <h1>Homfsy</h1>

        <div className="stepTag">Step 5 of 10</div>

        <h2>Select Amenities</h2>
        <p className="subtitle">
          Choose facilities available in your hostel
        </p>

        <form onSubmit={handleSubmit}>

          {/* ESSENTIAL */}
          <div className="sectionTitle">Essential</div>

          <div className="grid">

            <div className={`card ${amenities.wifi ? "active" : ""}`} onClick={() => toggle("wifi")}>WiFi</div>
            <div className={`card ${amenities.cctv ? "active" : ""}`} onClick={() => toggle("cctv")}>CCTV</div>
            <div className={`card ${amenities.security ? "active" : ""}`} onClick={() => toggle("security")}>Security</div>
            <div className={`card ${amenities.powerBackup ? "active" : ""}`} onClick={() => toggle("powerBackup")}>Power Backup</div>
            <div className={`card ${amenities.roWater ? "active" : ""}`} onClick={() => toggle("roWater")}>RO Water</div>
            <div className={`card ${amenities.lift ? "active" : ""}`} onClick={() => toggle("lift")}>Lift</div>
            <div className={`card ${amenities.parking ? "active" : ""}`} onClick={() => toggle("parking")}>Parking</div>
            <div className={`card ${amenities.laundry ? "active" : ""}`} onClick={() => toggle("laundry")}>Laundry</div>

          </div>

          {/* STUDY */}
          <div className="sectionTitle">Student Area</div>

          <div className="grid">

            <div className={`card ${amenities.studyRoom ? "active" : ""}`} onClick={() => toggle("studyRoom")}>Study Room</div>
            <div className={`card ${amenities.library ? "active" : ""}`} onClick={() => toggle("library")}>Library</div>
            <div className={`card ${amenities.computerRoom ? "active" : ""}`} onClick={() => toggle("computerRoom")}>Computer Room</div>

          </div>

          {/* FOOD */}
          <div className="sectionTitle">Food</div>

          <div className="grid">

            <div className={`card ${amenities.breakfast ? "active" : ""}`} onClick={() => toggle("breakfast")}>Breakfast</div>
            <div className={`card ${amenities.lunch ? "active" : ""}`} onClick={() => toggle("lunch")}>Lunch</div>
            <div className={`card ${amenities.dinner ? "active" : ""}`} onClick={() => toggle("dinner")}>Dinner</div>
            <div className={`card ${amenities.snacks ? "active" : ""}`} onClick={() => toggle("snacks")}>Snacks</div>

          </div>

          {/* ROOM */}
          <div className="sectionTitle">Room Features</div>

          <div className="grid">

            <div className={`card ${amenities.acRooms ? "active" : ""}`} onClick={() => toggle("acRooms")}>AC Rooms</div>
            <div className={`card ${amenities.geyser ? "active" : ""}`} onClick={() => toggle("geyser")}>Geyser</div>
            <div className={`card ${amenities.balcony ? "active" : ""}`} onClick={() => toggle("balcony")}>Balcony</div>

          </div>

          {/* RECREATION */}
          <div className="sectionTitle">Recreation</div>

          <div className="grid">

            <div className={`card ${amenities.gym ? "active" : ""}`} onClick={() => toggle("gym")}>Gym</div>
            <div className={`card ${amenities.games ? "active" : ""}`} onClick={() => toggle("games")}>Indoor Games</div>

          </div>

          <button type="submit" className="continueBtn">
            Continue →
          </button>

        </form>

      </div>

    </div>
  );
}

export default Amenities;