import "./HostelDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HostelDetails() {

  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5"
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const floors = [1, 2, 3];

  const rooms = {
    1: ["101", "102", "103", "104"],
    2: ["201", "202", "203", "204"],
    3: ["301", "302", "303", "304"]
  };

  const beds = ["A1", "A2", "B1", "B2"];

  const [activeFloor, setActiveFloor] = useState(null);
  const [activeRoom, setActiveRoom] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);

  const [days, setDays] = useState(15);
  const pricePerDay = 200;

  const next = () =>
    setImgIndex((p) => (p + 1) % images.length);

  const prev = () =>
    setImgIndex((p) => (p - 1 + images.length) % images.length);

  const getPath = () => {
    let path = [];
    if (activeFloor) path.push(`Floor ${activeFloor}`);
    if (activeRoom) path.push(`Room ${activeRoom}`);
    if (selectedBed) path.push(`Bed ${selectedBed}`);
    return path.join(" > ");
  };

  /* ================= OCCUPANCY ================= */

  const getFloorOccupancy = (f) => {
    const total = rooms[f].length;
    const percent = ((f + 1) / total) * 100;
    return Math.min(100, percent).toFixed(0);
  };

  const getRoomOccupancy = (r) => {
    const n = Number(r.slice(-1));
    return Math.min(100, n * 25);
  };

  const totalPrice = days * pricePerDay;

  return (

    <div className="page">
        {/* BACK BUTTON */}
<div className="floatingBack" onClick={() => navigate("/")}>
  ← Home
</div>

      {/* ================= HOSTEL HEADER BOX ================= */}
      <div className="hostelBox">

        <h1>Sri Balaji Boys Hostel</h1>

        <div className="hostelOccupancy">
          Occupancy: {Math.min(100, floors.length * 30)}%
        </div>

      </div>

      {/* IMAGE */}
      <div className="slider">
        <button onClick={prev}>◀</button>
        <img src={images[imgIndex]} />
        <button onClick={next}>▶</button>
      </div>

      {/* ================= FLOORS ================= */}
      {!activeFloor && (

        <div className="stageBox">

          <h3 style={{ textAlign: "center" }}>Select Floor</h3>

          <div className="corridorView centerAlign">

            {floors.map((f) => (
              <div
                key={f}
                className="floorTile"
                onClick={() => setActiveFloor(f)}
              >
                Floor {f}
                <small>{getFloorOccupancy(f)}%</small>
              </div>
            ))}

          </div>

        </div>

      )}

      {/* ================= ROOMS ================= */}
      {activeFloor && !activeRoom && (

        <div className="stageBox">

          <div className="stageHeader">
            <button className="backBtn" onClick={() => setActiveFloor(null)}>
              ← Back
            </button>
            <h3>Floor {activeFloor}</h3>
          </div>

          <div className="corridorView">

            {rooms[activeFloor].map((r) => (
              <div
                key={r}
                className="roomTile"
                onClick={() => setActiveRoom(r)}
              >
                {r}
                <small>{getRoomOccupancy(r)}%</small>
              </div>
            ))}

          </div>

        </div>

      )}

      {/* ================= BEDS ================= */}
      {activeRoom && (

        <div className="stageBox">

          <div className="stageHeader">
            <button className="backBtn" onClick={() => setActiveRoom(null)}>
              ← Back
            </button>
            <h3>Room {activeRoom}</h3>
          </div>

          <div className="corridorView">

            {beds.map((b) => (
              <div
                key={b}
                className={`bedTile ${selectedBed === b ? "activeBed" : ""}`}
                onClick={() => setSelectedBed(b)}
              >
                {b}
              </div>
            ))}

          </div>

        </div>

      )}

      {/* ================= BOOKING ================= */}
      {selectedBed && (

        <div className="bookingModern">

          <h2>Booking</h2>

          <p>{getPath()}</p>

          {/* DAYS */}
          <div className="box">
            <h4>Days</h4>

            <input
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            />

            <div className="btnRow">
              {[15, 30, 45, 60, 90].map((d) => (
                <button
                  key={d}
                  className={days === d ? "activeBtn" : ""}
                  onClick={() => setDays(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* MONTHS */}
          <div className="box">
            <h4>Months</h4>

            <div className="btnRow">
              {[1, 3, 6, 12].map((m) => (
                <button
                  className={days === m * 30 ? "activeBtn" : ""}
                  onClick={() => setDays(m * 30)}
                >
                  {m}M
                </button>
              ))}
            </div>
          </div>

          {/* YEARS */}
          <div className="box">
            <h4>Years</h4>

            <div className="btnRow">
              {[1, 2, 3].map((y) => (
                <button
                  className={days === y * 365 ? "activeBtn" : ""}
                  onClick={() => setDays(y * 365)}
                >
                  {y}Y
                </button>
              ))}
            </div>
          </div>

          <div className="priceBox">
            ₹{totalPrice}
          </div>

          <button className="bookBtn">
            Book Now
          </button>

        </div>

      )}

    </div>
  );
}

export default HostelDetails;