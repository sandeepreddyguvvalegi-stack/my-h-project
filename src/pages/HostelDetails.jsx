import "./HostelDetails.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/hostelApi";

function HostelDetails() {

  const navigate = useNavigate();

  const { id } = useParams();

  // STATES

  const [hostel, setHostel] =
    useState(null);

  const [imgIndex, setImgIndex] =
    useState(0);

  const [zoomMode, setZoomMode] =
    useState(false);

  const [position, setPosition] =
    useState({
      x: 50,
      y: 50
    });

  const [activeFloor, setActiveFloor] =
    useState(null);

  const [activeRoom, setActiveRoom] =
    useState(null);

  const [selectedBed, setSelectedBed] =
    useState(null);

  const [bookingType, setBookingType] =
    useState("days");

  const [days, setDays] =
    useState(15);

  const [months, setMonths] =
    useState(1);

  const [years, setYears] =
    useState(1);

  const [customYears, setCustomYears] =
    useState("");

  const bookingRef = useRef(null);

  // FETCH

  useEffect(() => {

    fetchHostel();

  }, []);

  const fetchHostel = async () => {

    try {

      const response =
        await API.get(`/hostels/${id}`);

      setHostel(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // SCROLL

  useEffect(() => {

    if (
      selectedBed &&
      bookingRef.current
    ) {

      bookingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  }, [selectedBed]);

  // LOADING

  if (!hostel) {

    return <h1>Loading...</h1>;

  }

  // IMAGES

  const images = hostel.images
    ? JSON.parse(hostel.images).map(
        (img) =>
          `http://localhost:8080${img}`
      )
    : [];

  // FLOORS

  const floors = Array.from(
    {
      length: hostel.floors || 0
    },
    (_, i) => i + 1
  );

  // ROOMS

  const rooms =
    JSON.parse(hostel.rooms || "{}");

  // BEDS

  const beds = [
    "A1",
    "A2",
    "B1",
    "B2"
  ];

  // PRICE

  const pricePerDay =
    hostel.price / 30;

  let totalDays = 0;

  if (bookingType === "days") {

    totalDays = days;

  } else if (
    bookingType === "months"
  ) {

    totalDays = months * 30;

  } else if (
    bookingType === "years"
  ) {

    totalDays = years * 365;

  } else {

    totalDays =
      parseFloat(customYears || 0) *
      365;

  }

  const totalPrice =
    Math.floor(
      totalDays * pricePerDay
    );

  // IMAGE MOVE

  const handleMove = (e) => {

    if (!zoomMode) return;

    const rect =
      e.target.getBoundingClientRect();

    const x =
      (
        (
          e.clientX - rect.left
        ) / rect.width
      ) * 100;

    const y =
      (
        (
          e.clientY - rect.top
        ) / rect.height
      ) * 100;

    setPosition({ x, y });

  };

  // IMAGE NEXT

  const next = () =>
    setImgIndex(
      (p) =>
        (p + 1) % images.length
    );

  // IMAGE PREV

  const prev = () =>
    setImgIndex(
      (p) =>
        (
          p - 1 +
          images.length
        ) % images.length
    );

  return (

    <div className="page">

      {/* BACK */}

      <div
        className="floatingBack"
        onClick={() =>
          navigate("/")
        }
      >
        ← Home
      </div>

      {/* HOSTEL */}

      <div className="hostelBox">

        <h1>
          {hostel.name}
        </h1>

        <div className="hostelOccupancy">

          Occupancy:
          {" "}
          {
            hostel
              .occupancyPercentage
          }
          %

        </div>

      </div>

      {/* IMAGE */}

      <div className="slider">

        <button onClick={prev}>
          ◀
        </button>

        <div className="imageWrapper">

          <img
            src={images[imgIndex]}
            onClick={() =>
              setZoomMode(
                !zoomMode
              )
            }
            onMouseMove={
              handleMove
            }
            className={
              zoomMode
                ? "zoomImage"
                : ""
            }
            style={{
              transformOrigin:
                `${position.x}% ${position.y}%`
            }}
          />

        </div>

        <button onClick={next}>
          ▶
        </button>

      </div>

      {/* FLOORS */}

      {!activeFloor && (

        <div className="stageBox">

          <h3>
            Select Floor
          </h3>

          <div className="corridorView">

            {floors.map((f) => (

              <div
                key={f}
                className="floorTile"
                onClick={() =>
                  setActiveFloor(f)
                }
              >
                Floor {f}
              </div>

            ))}

          </div>

        </div>

      )}

      {/* ROOMS */}

      {activeFloor &&
        !activeRoom && (

        <div className="stageBox">

          <button
            onClick={() =>
              setActiveFloor(null)
            }
          >
            ← Back
          </button>

          <div className="corridorView">

            {Array.from(
              {
                length:
                  rooms[
                    activeFloor
                  ] || 0
              },
              (_, i) => {

                const roomNo =
                  `${activeFloor}0${i + 1}`;

                return (

                  <div
                    key={roomNo}
                    className="roomTile"
                    onClick={() =>
                      setActiveRoom(
                        roomNo
                      )
                    }
                  >
                    Room {roomNo}
                  </div>

                );

              }
            )}

          </div>

        </div>

      )}

      {/* BEDS */}

      {activeRoom && (

        <div className="stageBox">

          <button
            onClick={() =>
              setActiveRoom(null)
            }
          >
            ← Back
          </button>

          <div className="corridorView">

            {beds.map((b) => (

              <div
                key={b}
                className={`bedTile ${
                  selectedBed === b
                    ? "activeBed"
                    : ""
                }`}
                onClick={() =>
                  setSelectedBed(b)
                }
              >
                {b}
              </div>

            ))}

          </div>

        </div>

      )}

      {/* BOOKING */}

      {selectedBed && (

        <div
          className="bookingModern"
          ref={bookingRef}
        >

          <h2>
            Booking
          </h2>

          <p>
            {activeFloor}
            {" > "}
            {activeRoom}
            {" > "}
            Bed {selectedBed}
          </p>

          {/* TYPE */}

          <select
            onChange={(e) =>
              setBookingType(
                e.target.value
              )
            }
          >

            <option value="days">
              Days
            </option>

            <option value="months">
              Months
            </option>

            <option value="years">
              Years
            </option>

            <option value="custom">
              1.5 Years
            </option>

          </select>

          {/* DAYS */}

          {bookingType === "days" && (

            <input
              type="number"
              step="15"
              value={days}
              onChange={(e) =>
                setDays(
                  Number(
                    e.target.value
                  )
                )
              }
            />

          )}

          {/* MONTHS */}

          {bookingType === "months" && (

            <select
              onChange={(e) =>
                setMonths(
                  Number(
                    e.target.value
                  )
                )
              }
            >

              {[...Array(12)].map(
                (_, i) => (

                  <option
                    key={i}
                    value={i + 1}
                  >
                    {i + 1} Month
                  </option>

                )
              )}

            </select>

          )}

          {/* YEARS */}

          {bookingType === "years" && (

            <select
              onChange={(e) =>
                setYears(
                  Number(
                    e.target.value
                  )
                )
              }
            >

              {[...Array(5)].map(
                (_, i) => (

                  <option
                    key={i}
                    value={i + 1}
                  >
                    {i + 1} Year
                  </option>

                )
              )}

            </select>

          )}

          {/* CUSTOM */}

          {bookingType === "custom" && (

            <input
              type="number"
              step="0.5"
              placeholder="1.5 years"
              value={customYears}
              onChange={(e) =>
                setCustomYears(
                  e.target.value
                )
              }
            />

          )}

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