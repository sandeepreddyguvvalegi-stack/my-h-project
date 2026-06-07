import "./BasicDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaMale,
  FaFemale,
  FaUsers,
  FaBuilding
} from "react-icons/fa";

function BasicDetails() {

  const navigate = useNavigate();

  const [hostelName, setHostelName] =
    useState("");

  const [hostelType, setHostelType] =
    useState("");

  const [hostelCategory,
    setHostelCategory] =
    useState("");

  const hostelTypes = [
    {
      id: "boys",
      label: "Boys Hostel",
      icon: <FaMale />
    },
    {
      id: "girls",
      label: "Girls Hostel",
      icon: <FaFemale />
    },
    {
      id: "unisex",
      label: "Unisex Hostel",
      icon: <FaUsers />
    }
  ];

  const categories = [
    "PG Hostel",
    "Student Hostel",
    "Working Professionals Hostel",
    "PG + Hostel"
  ];

  return (

    <div className="basicPage">

      {/* BACK BUTTON */}

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="basicCard">

        {/* HEADER */}

        <div className="basicHeader">

          <h1>
            Basic Hostel Details
          </h1>

          <p>
            Add essential information
            students will see first.
          </p>

        </div>

        {/* PROGRESS */}

        <div className="progressBox">

          <div className="progressTop">

            <span>
              Step 4 of 10
            </span>

            <span>
              40%
            </span>

          </div>

          <div className="progressBar">

            <div
              className="progressFill"
            />

          </div>

        </div>

        {/* PREVIEW CARD */}

        <div className="previewCard">

          <FaBuilding />

          <div>

            <h3>
              Hostel #1
            </h3>

            <p>
              Add the basic details
              of your hostel.
            </p>

          </div>

        </div>

        {/* HOSTEL NAME */}

        <div className="field">

          <label>
            Hostel Name *
          </label>

          <input
            type="text"
            placeholder="Ex: Sunrise Boys PG"
            value={hostelName}
            onChange={(e) =>
              setHostelName(
                e.target.value
              )
            }
          />

        </div>

        {/* HOSTEL TYPE */}

        <div className="field">

          <label>
            Hostel Type
          </label>

          <div className="cardGrid">

            {hostelTypes.map(
              (item) => (

                <div
                  key={item.id}
                  className={`optionCard ${
                    hostelType === item.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setHostelType(
                      item.id
                    )
                  }
                >

                  <div className="cardIcon">
                    {item.icon}
                  </div>

                  <span>
                    {item.label}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

        {/* HOSTEL CATEGORY */}

        <div className="field">

          <label>
            Hostel Category
          </label>

          <div className="categoryGrid">

            {categories.map(
              (item) => (

                <div
                  key={item}
                  className={`categoryCard ${
                    hostelCategory === item
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setHostelCategory(
                      item
                    )
                  }
                >
                  {item}
                </div>

              )
            )}

          </div>

        </div>
                {/* ADDRESS SECTION */}

        <div className="sectionTitle">
          Location Details
        </div>

        <div className="field">

          <label>
            Country
          </label>

          <select>

            <option>
              India
            </option>

          </select>

        </div>

        <div className="twoColumn">

          <div className="field">

            <label>
              State
            </label>

            <input
              type="text"
              placeholder="Telangana"
            />

          </div>

          <div className="field">

            <label>
              City
            </label>

            <input
              type="text"
              placeholder="Hyderabad"
            />

          </div>

        </div>

        <div className="twoColumn">

          <div className="field">

            <label>
              Area / Locality
            </label>

            <input
              type="text"
              placeholder="Kompally"
            />

          </div>

          <div className="field">

            <label>
              Landmark
            </label>

            <input
              type="text"
              placeholder="Near CMR College"
            />

          </div>

        </div>

        <div className="field">

          <label>
            Pincode
          </label>

          <input
            type="text"
            placeholder="500100"
          />

        </div>

        {/* MAP LOCATION */}

        <div className="sectionTitle">
          Hostel Location
        </div>

        <div className="mapCard">

          <div className="mapPlaceholder">

            <h3>
              📍 Pin Your Hostel Location
            </h3>

            <p>
              Google Maps integration
              will be added later.
            </p>

          </div>

          <button
            type="button"
            className="locationBtn"
          >
            Use Current Location
          </button>

        </div>
                {/* DESCRIPTION */}

        <div className="sectionTitle">
          Hostel Description
        </div>

        <div className="field">

          <label>
            Tell students about your hostel
          </label>

          <textarea
            className="descriptionBox"
            rows="5"
            placeholder="Example: Premium PG with WiFi, food, study room, laundry and 24/7 security."
          />

        </div>

        {/* NEARBY COLLEGES */}

        <div className="sectionTitle">
          Nearby Colleges
        </div>

        <div className="tagGrid">

          <div className="tagCard">
            CMRCET
          </div>

          <div className="tagCard">
            Malla Reddy
          </div>

          <div className="tagCard">
            VNR VJIET
          </div>

          <div className="tagCard">
            JNTUH
          </div>

          <div className="tagCard">
            CMRIT
          </div>

          <div className="tagCard">
            MGIT
          </div>

        </div>

        {/* SUITABLE FOR */}

        <div className="sectionTitle">
          Suitable For
        </div>

        <div className="tagGrid">

          <div className="tagCard">
            Students
          </div>

          <div className="tagCard">
            Working Professionals
          </div>

          <div className="tagCard">
            Interns
          </div>

          <div className="tagCard">
            Job Seekers
          </div>

        </div>

        {/* SAFETY FEATURES */}

        <div className="sectionTitle">
          Safety Features
        </div>

        <div className="featureGrid">

          <div className="featureCard">
            CCTV
          </div>

          <div className="featureCard">
            Security Guard
          </div>

          <div className="featureCard">
            Fire Safety
          </div>

          <div className="featureCard">
            Biometric Entry
          </div>

          <div className="featureCard">
            Women Warden
          </div>

          <div className="featureCard">
            Emergency Exit
          </div>

        </div>

        {/* CONTACT VISIBILITY */}

        <div className="sectionTitle">
          Contact Visibility
        </div>

        <div className="toggleBox">

          <label className="toggleItem">

            <input
              type="checkbox"
              defaultChecked
            />

            <span>
              Show Mobile Number
            </span>

          </label>

          <label className="toggleItem">

            <input
              type="checkbox"
              defaultChecked
            />

            <span>
              Show WhatsApp
            </span>

          </label>

          <label className="toggleItem">

            <input
              type="checkbox"
            />

            <span>
              Show Email
            </span>

          </label>

        </div>

        {/* CONTINUE */}

        <button
          className="continueBtn"
          onClick={() =>
            navigate("/amenities")
          }
        >
          Continue →
        </button>

      </div>

    </div>

  );
}

export default BasicDetails;