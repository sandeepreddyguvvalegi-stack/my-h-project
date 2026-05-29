import "./HostelDetails.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/hostelApi";

function HostelDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [hostel, setHostel] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [zoomMode, setZoomMode] = useState(false);

  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [activeFloor, setActiveFloor] = useState(null);
  const [activeRoom, setActiveRoom] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);

  const [bookingType, setBookingType] = useState("days");
  const [days, setDays] = useState(15);
  const [months, setMonths] = useState(1);
  const [years, setYears] = useState(1);
  const [customYears, setCustomYears] = useState("");

  const bookingRef = useRef(null);

  useEffect(() => {
    fetchHostel();
  }, []);

  const fetchHostel = async () => {
    try {
      const response = await API.get(`/hostels/${id}`);
      setHostel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedBed && bookingRef.current) {
      bookingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [selectedBed]);

  if (!hostel) return <h1>Loading...</h1>;

  // ✅ SAFE IMAGES
  let images = [];
  try {
    images = JSON.parse(hostel.images || "[]");
  } catch {
    images = [];
  }

  const safeImages =
    images.length > 0
      ? images.map((img) =>
          img.startsWith("http")
            ? img
            : `http://localhost:8080${img}`
        )
      : ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5"];

  const floors = Array.from(
    { length: hostel.floors || 0 },
    (_, i) => i + 1
  );

  let rooms = {};
  try {
    rooms = JSON.parse(hostel.rooms || "{}");
  } catch {
    rooms = {};
  }

  const beds = ["A1", "A2", "B1", "B2"];

  const pricePerDay = hostel.price ? hostel.price / 30 : 0;

  let totalDays =
    bookingType === "days"
      ? days
      : bookingType === "months"
      ? months * 30
      : bookingType === "years"
      ? years * 365
      : parseFloat(customYears || 0) * 365;

  const totalPrice = Math.floor(totalDays * pricePerDay);

  const handleMove = (e) => {
    if (!zoomMode) return;

    const rect = e.target.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  const next = () => {
    if (!safeImages.length) return;
    setImgIndex((p) => (p + 1) % safeImages.length);
  };

  const prev = () => {
    if (!safeImages.length) return;
    setImgIndex((p) => (p - 1 + safeImages.length) % safeImages.length);
  };

  return (
    <div className="page">

      <div className="floatingBack" onClick={() => navigate("/")}>
        ← Home
      </div>

      <div className="hostelBox">
        <h1>{hostel.name}</h1>

        <div className="hostelOccupancy">
          Occupancy: {hostel.occupancyPercentage || 0}%
        </div>
      </div>

      <div className="slider">
        <button onClick={prev}>◀</button>

        <div className="imageWrapper">
          <img
            src={safeImages[imgIndex]}
            onClick={() => setZoomMode(!zoomMode)}
            onMouseMove={handleMove}
            className={zoomMode ? "zoomImage" : ""}
            style={{
              transformOrigin: `${position.x}% ${position.y}%`
            }}
            alt="hostel"
          />
        </div>

        <button onClick={next}>▶</button>
      </div>

      {/* same structure below unchanged */}
      {!activeFloor && (
        <div className="stageBox">
          <h3>Select Floor</h3>
          <div className="corridorView">
            {floors.map((f) => (
              <div
                key={f}
                className="floorTile"
                onClick={() => setActiveFloor(f)}
              >
                Floor {f}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeFloor && !activeRoom && (
        <div className="stageBox">
          <button onClick={() => setActiveFloor(null)}>← Back</button>

          <div className="corridorView">
            {Array.from(
              { length: rooms[activeFloor] || 0 },
              (_, i) => {
                const roomNo = `${activeFloor}0${i + 1}`;

                return (
                  <div
                    key={roomNo}
                    className="roomTile"
                    onClick={() => setActiveRoom(roomNo)}
                  >
                    Room {roomNo}
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}

      {activeRoom && (
        <div className="stageBox">
          <button onClick={() => setActiveRoom(null)}>← Back</button>

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

      {selectedBed && (
        <div className="bookingModern" ref={bookingRef}>
          <h2>Booking</h2>
          {/* TYPE */}
<select onChange={(e) => setBookingType(e.target.value)}>
  <option value="days">Days</option>
  <option value="months">Months</option>
  <option value="years">Years</option>
  <option value="custom">1.5 Years</option>
</select>

{/* DAYS DROPDOWN (15, 30, 45...) */}
{bookingType === "days" && (
  <select onChange={(e) => setDays(Number(e.target.value))} value={days}>
    {[...Array(20)].map((_, i) => {
      const value = (i + 1) * 15; // 15, 30, 45...
      return (
        <option key={value} value={value}>
          {value} Days
        </option>
      );
    })}
  </select>
)}

{/* MONTHS (1-12) */}
{bookingType === "months" && (
  <select onChange={(e) => setMonths(Number(e.target.value))}>
    {[...Array(12)].map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1} Month
      </option>
    ))}
  </select>
)}

{/* YEARS (1-5) */}
{bookingType === "years" && (
  <select onChange={(e) => setYears(Number(e.target.value))}>
    {[...Array(5)].map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1} Year
      </option>
    ))}
  </select>
)}

{/* CUSTOM YEARS */}
{bookingType === "custom" && (
  <input
    type="number"
    step="0.5"
    placeholder="Enter years (e.g. 1.5)"
    value={customYears}
    onChange={(e) => setCustomYears(e.target.value)}
  />
)}
          <div className="priceBox">₹{totalPrice}</div>
          <button className="bookBtn">Book Now</button>
        </div>
      )}
    </div>
  );
}

export default HostelDetails;