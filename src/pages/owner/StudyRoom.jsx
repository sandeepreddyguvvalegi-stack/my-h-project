import "./StudyRoom.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaClock } from "react-icons/fa";

function StudyRoom() {
  const navigate = useNavigate();

  const [studyRoom, setStudyRoom] = useState({
    silentZone: false,
    groupStudy: false,
    acRoom: false,
    wifi: false,
    individualDesks: false,
    startTime: "08:00",
    endTime: "22:00"
  });

  const toggle = (key) => {
    setStudyRoom((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleTimeChange = (e) => {
    setStudyRoom((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ ONLY STUDY ROOM DATA (NO DUPLICATE STORAGE)
    localStorage.setItem(
      "studyRoom",
      JSON.stringify(studyRoom)
    );

    navigate("/food-timetable");
  };

  return (
    <div className="studyPage">

      {/* BACK */}
      <div className="backBtn" onClick={() => navigate("/amenities")}>
        <FaArrowLeft />
      </div>

      <div className="studyWrapper">

        {/* LEFT SIDE */}
        <div className="leftSection">
          <h1 className="logo">Homfsy</h1>

          <h2>Study Room Setup</h2>

          <p>
            Define study environment and timings for students.
          </p>

          <div className="featureBox">✓ Quiet Learning Space</div>
          <div className="featureBox">✓ Flexible Timing Control</div>
          <div className="featureBox">✓ Better Student Discipline</div>
          <div className="featureBox">✓ Premium Hostel Value</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="studyCard">

          <h3>Select Features</h3>

          <form onSubmit={handleSubmit}>

            {/* FEATURES */}
            <div className="grid">

              <div className={`card ${studyRoom.silentZone ? "active" : ""}`} onClick={() => toggle("silentZone")}>
                🔇 Silent Zone
              </div>

              <div className={`card ${studyRoom.groupStudy ? "active" : ""}`} onClick={() => toggle("groupStudy")}>
                👥 Group Study
              </div>

              <div className={`card ${studyRoom.acRoom ? "active" : ""}`} onClick={() => toggle("acRoom")}>
                ❄ AC Room
              </div>

              <div className={`card ${studyRoom.wifi ? "active" : ""}`} onClick={() => toggle("wifi")}>
                📶 WiFi
              </div>

              <div className={`card ${studyRoom.individualDesks ? "active" : ""}`} onClick={() => toggle("individualDesks")}>
                🪑 Individual Desks
              </div>

            </div>

            {/* TIMINGS SECTION */}
            <div className="timeBox">

              <h4>
                <FaClock /> Study Timings
              </h4>

              <div className="timeInputs">

                <div>
                  <label>Start Time</label>
                  <input
                    type="time"
                    name="startTime"
                    value={studyRoom.startTime}
                    onChange={handleTimeChange}
                  />
                </div>

                <div>
                  <label>End Time</label>
                  <input
                    type="time"
                    name="endTime"
                    value={studyRoom.endTime}
                    onChange={handleTimeChange}
                  />
                </div>

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

export default StudyRoom;