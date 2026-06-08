import "./Amenities.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaWifi,
  FaUtensils,
  FaBook,
  FaTshirt,
  FaSnowflake,
  FaBath,
  FaCar,
  FaDumbbell,
  FaVideo,
  FaShieldAlt
} from "react-icons/fa";

function Amenities() {

  const navigate = useNavigate();

  const [selectedAmenities,
    setSelectedAmenities] =
    useState([]);

  const [wifiAvailable,
    setWifiAvailable] =
    useState("");

  const [wifiSpeed,
    setWifiSpeed] =
    useState("");

  const [foodAvailable,
    setFoodAvailable] =
    useState("");

  const [studyRoom,
    setStudyRoom] =
    useState("");

  const amenities = [

    {
      name: "High Speed WiFi",
      icon: <FaWifi />
    },

    {
      name: "Food Available",
      icon: <FaUtensils />
    },

    {
      name: "Study Room",
      icon: <FaBook />
    },

    {
      name: "Laundry",
      icon: <FaTshirt />
    },

    {
      name: "AC Rooms",
      icon: <FaSnowflake />
    },

    {
      name: "Attached Bathroom",
      icon: <FaBath />
    },

    {
      name: "Parking",
      icon: <FaCar />
    },

    {
      name: "Gym",
      icon: <FaDumbbell />
    },

    {
      name: "CCTV",
      icon: <FaVideo />
    },

    {
      name: "Security Guard",
      icon: <FaShieldAlt />
    }

  ];
  const [bathroomType,
  setBathroomType] =
  useState("");

  const toggleAmenity = (item) => {

    if (
      selectedAmenities.includes(item)
    ) {

      setSelectedAmenities(
        selectedAmenities.filter(
          (x) => x !== item
        )
      );

    } else {

      setSelectedAmenities([
        ...selectedAmenities,
        item
      ]);

    }

  };

  return (

    <div className="amenitiesPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="amenitiesCard">

        <div className="amenitiesHeader">

          <h1>
            Amenities & Facilities
          </h1>

          <p>
            Tell students what your
            hostel offers.
          </p>

        </div>

        <div className="progressBox">

          <div className="progressTop">
            <span>
              Step 5 of 10
            </span>

            <span>
              50%
            </span>
          </div>

          <div className="progressBar">
            <div className="progressFill" />
          </div>

        </div>

        <div className="sectionTitle">
          Main Amenities
        </div>

        <div className="amenityGrid">

          {amenities.map((item) => (

            <div
              key={item.name}
              className={`amenityCard ${
                selectedAmenities.includes(
                  item.name
                )
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleAmenity(item.name)
              }
            >

              <div className="amenityIcon">
                {item.icon}
              </div>

              <span>
                {item.name}
              </span>

            </div>

          ))}

        </div>
                {/* WIFI */}

        <div className="sectionTitle">
          Internet Facility
        </div>

        <div className="radioBox">

          <label>

            <input
              type="radio"
              name="wifi"
              value="yes"
              checked={
                wifiAvailable === "yes"
              }
              onChange={(e) =>
                setWifiAvailable(
                  e.target.value
                )
              }
            />

            WiFi Available

          </label>

          <label>

            <input
              type="radio"
              name="wifi"
              value="no"
              checked={
                wifiAvailable === "no"
              }
              onChange={(e) =>
                setWifiAvailable(
                  e.target.value
                )
              }
            />

            No WiFi

          </label>

        </div>

        {wifiAvailable === "yes" && (

          <div className="field">

            <label>
              WiFi Speed
            </label>

            <select
              value={wifiSpeed}
              onChange={(e) =>
                setWifiSpeed(
                  e.target.value
                )
              }
            >

              <option value="">
                Select Speed
              </option>

              <option>
                50 Mbps
              </option>

              <option>
                100 Mbps
              </option>

              <option>
                200 Mbps
              </option>

              <option>
                500+ Mbps
              </option>

            </select>

          </div>

        )}

        {/* FOOD */}

        <div className="sectionTitle">
          Food Facility
        </div>

        <div className="radioBox">

          <label>

            <input
              type="radio"
              name="food"
              value="yes"
              checked={
                foodAvailable === "yes"
              }
              onChange={(e) =>
                setFoodAvailable(
                  e.target.value
                )
              }
            />

            Food Available

          </label>

          <label>

            <input
              type="radio"
              name="food"
              value="no"
              checked={
                foodAvailable === "no"
              }
              onChange={(e) =>
                setFoodAvailable(
                  e.target.value
                )
              }
            />

            No Food

          </label>

        </div>

        {foodAvailable === "yes" && (

          <div className="infoCard">

            <h4>
              Included Meals
            </h4>

            <ul>

              <li>
                Breakfast
              </li>

              <li>
                Lunch
              </li>

              <li>
                Dinner
              </li>

              <li>
                Sunday Special
              </li>

            </ul>

          </div>

        )}

        {/* STUDY ROOM */}

        <div className="sectionTitle">
          Study Room
        </div>

        <div className="radioBox">

          <label>

            <input
              type="radio"
              name="study"
              value="yes"
              checked={
                studyRoom === "yes"
              }
              onChange={(e) =>
                setStudyRoom(
                  e.target.value
                )
              }
            />

            Available

          </label>

          <label>

            <input
              type="radio"
              name="study"
              value="no"
              checked={
                studyRoom === "no"
              }
              onChange={(e) =>
                setStudyRoom(
                  e.target.value
                )
              }
            />

            Not Available

          </label>

        </div>

        {studyRoom === "yes" && (

          <div className="studyInfo">

            <div className="successBox">

              Study room details
              will be collected
              in the next step.

            </div>

          </div>

        )}

        {/* SUMMARY */}

        <div className="summaryCard">

          <h3>
            Selected Amenities
          </h3>

          <p>
            {selectedAmenities.length}
            {" "}
            amenities selected
          </p>

        </div>

        {/* CONTINUE */}

        <button
          className="continueBtn"
          onClick={() => {

            if (
              studyRoom === "yes"
            ) {

              navigate(
                "/study-room"
              );

            } else {

              navigate(
                "/food-timetable"
              );

            }

          }}
        >
          Continue →
        </button>

      </div>

    </div>

  );
}

export default Amenities;