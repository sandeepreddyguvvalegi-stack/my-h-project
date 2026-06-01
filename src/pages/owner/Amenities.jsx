import "./Amenities.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaWifi,
  FaVideo,
  FaShieldAlt,
  FaBolt,
  FaBuilding,
  FaUtensils,
  FaDumbbell,
  FaBook
} from "react-icons/fa";

function Amenities() {

  const navigate = useNavigate();

  const [amenities, setAmenities] = useState({
    wifi: false,
    cctv: false,
    security: false,
    powerBackup: false,
    lift: false,
    parking: false,
    laundry: false,

    studyRoom: false,
    library: false,

    food: false,
    gym: false
  });

  const toggle = (key) => {
    setAmenities((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const formValid =
    Object.values(amenities).some((v) => v === true);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "amenities",
      JSON.stringify(amenities)
    );

    // 👉 YOUR REQUIRED FLOW LOGIC
    if (amenities.studyRoom) {
      navigate("/study-room");
    } else {
      navigate("/hostel-pricing");
    }
  };

  return (
    <div className="basicPage">

      {/* BACK */}
      <div
        className="backBtn"
        onClick={() => navigate("/hostel-basic-details")}
      >
        <FaArrowLeft />
      </div>

      <div className="basicWrapper">

        {/* LEFT SECTION (same as HostelBasicDetails) */}
        <div className="leftSection">

          <h1 className="logo">Homfsy</h1>

          <h2>Select Amenities</h2>

          <p>
            Choose facilities available in your hostel.
            This helps students understand your property better.
          </p>

          <div className="featureBox">
            <FaBuilding /> Better Visibility
          </div>

          <div className="featureBox">
            <FaShieldAlt /> Trust & Safety Boost
          </div>

          <div className="featureBox">
            <FaWifi /> Attract More Students
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="basicCard">

          <form onSubmit={handleSubmit}>

            {/* BASIC AMENITIES */}
            <div className="section">

              <h3>Basic Amenities</h3>

              <div className="grid2">

                <div
                  className={`card ${amenities.wifi && "active"}`}
                  onClick={() => toggle("wifi")}
                >
                  <FaWifi /> WiFi
                </div>

                <div
                  className={`card ${amenities.cctv && "active"}`}
                  onClick={() => toggle("cctv")}
                >
                  <FaVideo /> CCTV
                </div>

                <div
                  className={`card ${amenities.security && "active"}`}
                  onClick={() => toggle("security")}
                >
                  <FaShieldAlt /> Security
                </div>

                <div
                  className={`card ${amenities.powerBackup && "active"}`}
                  onClick={() => toggle("powerBackup")}
                >
                  <FaBolt /> Power Backup
                </div>

                <div
                  className={`card ${amenities.lift && "active"}`}
                  onClick={() => toggle("lift")}
                >
                  <FaBuilding /> Lift
                </div>

                <div
                  className={`card ${amenities.parking && "active"}`}
                  onClick={() => toggle("parking")}
                >
                  Parking
                </div>

              </div>

            </div>

            {/* STUDY AREA */}
            <div className="section">

              <h3>Study Facilities</h3>

              <div className="grid2">

                <div
                  className={`card ${amenities.studyRoom && "active"}`}
                  onClick={() => toggle("studyRoom")}
                >
                  <FaBook /> Study Room
                </div>

                <div
                  className={`card ${amenities.library && "active"}`}
                  onClick={() => toggle("library")}
                >
                  Library
                </div>

              </div>

            </div>

            {/* OTHER */}
            <div className="section">

              <h3>Other Facilities</h3>

              <div className="grid2">

                <div
                  className={`card ${amenities.food && "active"}`}
                  onClick={() => toggle("food")}
                >
                  <FaUtensils /> Food
                </div>

                <div
                  className={`card ${amenities.gym && "active"}`}
                  onClick={() => toggle("gym")}
                >
                  <FaDumbbell /> Gym
                </div>

              </div>

            </div>

            <button
              type="submit"
              disabled={!formValid}
              className={formValid ? "activeBtn" : "disabledBtn"}
            >
              Continue →
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Amenities;