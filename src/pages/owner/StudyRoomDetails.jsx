import "./StudyRoomDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaUsers,
  FaSnowflake,
  FaWifi,
  FaPlug,
  FaLightbulb,
  FaBook,
  FaDesktop
} from "react-icons/fa";

function StudyRoomDetails() {

  const navigate = useNavigate();

  const [capacity, setCapacity] =
    useState("");

  const [studyType, setStudyType] =
    useState("");

  const [seatingType,
    setSeatingType] =
    useState("");

  const [noisePolicy,
    setNoisePolicy] =
    useState("");

  const [open24,
    setOpen24] =
    useState(false);

  const [openingTime,
    setOpeningTime] =
    useState("");

  const [closingTime,
    setClosingTime] =
    useState("");

  const [facilities,
    setFacilities] =
    useState([]);

  const facilityList = [

    {
      name: "AC",
      icon: <FaSnowflake />
    },

    {
      name: "WiFi",
      icon: <FaWifi />
    },

    {
      name: "Charging Points",
      icon: <FaPlug />
    },

    {
      name: "Reading Lights",
      icon: <FaLightbulb />
    },

    {
      name: "Library",
      icon: <FaBook />
    },

    {
      name: "Computers",
      icon: <FaDesktop />
    }

  ];

  const toggleFacility =
    (item) => {

      if (
        facilities.includes(item)
      ) {

        setFacilities(
          facilities.filter(
            (x) => x !== item
          )
        );

      } else {

        setFacilities([
          ...facilities,
          item
        ]);

      }
    };

  return (

    <div className="studyPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="studyCard">

        <div className="studyHeader">

          <h1>
            Study Room Details
          </h1>

          <p>
            Help students know
            about your study space.
          </p>

        </div>

        <div className="progressBox">

          <div className="progressTop">

            <span>
              Step 6 of 10
            </span>

            <span>
              60%
            </span>

          </div>

          <div className="progressBar">
            <div className="progressFill" />
          </div>

        </div>

        <div className="sectionTitle">
          Capacity
        </div>

        <div className="optionGrid">

          <div
            className={`optionCard ${
              capacity === "20"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setCapacity("20")
            }
          >
            <FaUsers />
            <span>
              Up to 20 Students
            </span>
          </div>

          <div
            className={`optionCard ${
              capacity === "50"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setCapacity("50")
            }
          >
            <FaUsers />
            <span>
              Up to 50 Students
            </span>
          </div>

          <div
            className={`optionCard ${
              capacity === "100"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setCapacity("100")
            }
          >
            <FaUsers />
            <span>
              Up to 100 Students
            </span>
          </div>

          <div
            className={`optionCard ${
              capacity === "100+"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setCapacity("100+")
            }
          >
            <FaUsers />
            <span>
              100+ Students
            </span>
          </div>

        </div>
                {/* STUDY ROOM TYPE */}

        <div className="sectionTitle">
          Study Room Type
        </div>

        <div className="optionGrid">

          <div
            className={`optionCard ${
              studyType === "silent"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setStudyType("silent")
            }
          >
            🔇
            <span>
              Silent Zone
            </span>
          </div>

          <div
            className={`optionCard ${
              studyType === "group"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setStudyType("group")
            }
          >
            👥
            <span>
              Group Study
            </span>
          </div>

          <div
            className={`optionCard ${
              studyType === "both"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setStudyType("both")
            }
          >
            📚
            <span>
              Both Available
            </span>
          </div>

        </div>

        {/* OPEN 24 HOURS */}

        <div className="sectionTitle">
          Operating Hours
        </div>

        <div className="toggleBox">

          <input
            type="checkbox"
            checked={open24}
            onChange={() =>
              setOpen24(!open24)
            }
          />

          <span>
            Open 24 Hours
          </span>

        </div>

        {!open24 && (

          <div className="twoColumn">

            <div className="field">

              <label>
                Opening Time
              </label>

              <input
                type="time"
                value={openingTime}
                onChange={(e) =>
                  setOpeningTime(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="field">

              <label>
                Closing Time
              </label>

              <input
                type="time"
                value={closingTime}
                onChange={(e) =>
                  setClosingTime(
                    e.target.value
                  )
                }
              />

            </div>

          </div>

        )}

        {/* SEATING */}

        <div className="sectionTitle">
          Seating Type
        </div>

        <div className="optionGrid">

          <div
            className={`optionCard ${
              seatingType ===
              "individual"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSeatingType(
                "individual"
              )
            }
          >
            🪑
            <span>
              Individual Desks
            </span>
          </div>

          <div
            className={`optionCard ${
              seatingType ===
              "shared"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSeatingType(
                "shared"
              )
            }
          >
            👥
            <span>
              Shared Tables
            </span>
          </div>

          <div
            className={`optionCard ${
              seatingType ===
              "both"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSeatingType(
                "both"
              )
            }
          >
            🏆
            <span>
              Both Available
            </span>
          </div>

        </div>

        {/* NOISE POLICY */}

        <div className="sectionTitle">
          Noise Policy
        </div>

        <div className="optionGrid">

          <div
            className={`optionCard ${
              noisePolicy ===
              "strict"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setNoisePolicy(
                "strict"
              )
            }
          >
            🔕
            <span>
              Strict Silent Zone
            </span>
          </div>

          <div
            className={`optionCard ${
              noisePolicy ===
              "moderate"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setNoisePolicy(
                "moderate"
              )
            }
          >
            🔉
            <span>
              Moderate Noise
            </span>
          </div>

          <div
            className={`optionCard ${
              noisePolicy ===
              "discussion"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setNoisePolicy(
                "discussion"
              )
            }
          >
            🗣
            <span>
              Discussion Friendly
            </span>
          </div>

        </div>

        {/* FACILITIES */}

        <div className="sectionTitle">
          Facilities
        </div>

        <div className="facilityGrid">

          {facilityList.map(
            (item) => (

              <div
                key={item.name}
                className={`facilityCard ${
                  facilities.includes(
                    item.name
                  )
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  toggleFacility(
                    item.name
                  )
                }
              >

                <div className="facilityIcon">
                  {item.icon}
                </div>

                <span>
                  {item.name}
                </span>

              </div>

            )
          )}

        </div>
                {/* PHOTO UPLOAD */}

        <div className="sectionTitle">
          Study Room Photos
        </div>

        <div className="uploadBox">

          <input
            type="file"
            multiple
            accept="image/*"
          />

          <p>
            Upload study room photos
            (optional)
          </p>

        </div>

        {/* SUMMARY */}

        <div className="sectionTitle">
          Preview Summary
        </div>

        <div className="summaryCard">

          <h3>
            Study Room Overview
          </h3>

          <div className="summaryItem">
            <strong>
              Capacity:
            </strong>
            {" "}
            {capacity || "Not Selected"}
          </div>

          <div className="summaryItem">
            <strong>
              Type:
            </strong>
            {" "}
            {studyType || "Not Selected"}
          </div>

          <div className="summaryItem">
            <strong>
              Seating:
            </strong>
            {" "}
            {seatingType || "Not Selected"}
          </div>

          <div className="summaryItem">
            <strong>
              Noise Policy:
            </strong>
            {" "}
            {noisePolicy ||
              "Not Selected"}
          </div>

          <div className="summaryItem">
            <strong>
              Hours:
            </strong>
            {" "}
            {open24
              ? "24 Hours"
              : `${openingTime || "--"} - ${closingTime || "--"}`}
          </div>

          <div className="summaryItem">
            <strong>
              Facilities:
            </strong>
            {" "}
            {facilities.length > 0
              ? facilities.join(", ")
              : "None Selected"}
          </div>

        </div>

        {/* CONTINUE */}

        <button
          className="continueBtn"
          onClick={() =>
            navigate(
              "/food-timetable"
            )
          }
        >
          Continue →
        </button>

      </div>

    </div>

  );
}

export default StudyRoomDetails;