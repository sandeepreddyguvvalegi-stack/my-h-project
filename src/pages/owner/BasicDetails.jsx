import "./BasicDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaMale,
  FaFemale,
  FaUsers,
  FaShieldAlt,
  FaUserGraduate,
  FaBriefcase
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

  const [suitableFor,
    setSuitableFor] = useState([]);

  const [safetyFeatures,
    setSafetyFeatures] = useState([]);

  const hostelTypes = [
    {
      id: "boys",
      title: "Boys Hostel",
      icon: <FaMale />
    },
    {
      id: "girls",
      title: "Girls Hostel",
      icon: <FaFemale />
    },
    {
      id: "unisex",
      title: "Unisex Hostel",
      icon: <FaUsers />
    }
  ];

  const categories = [
    {
      id: "pg",
      title: "PG Hostel"
    },
    {
      id: "student",
      title: "Student Hostel"
    },
    {
      id: "working",
      title:
        "Working Professional"
    },
    {
      id: "mixed",
      title:
        "Students + Working"
    }
  ];

  const suitableOptions = [
    "Students",
    "Working Professionals",
    "Interns",
    "Job Seekers"
  ];

  const safetyOptions = [
    "CCTV",
    "Security Guard",
    "Fire Safety",
    "Biometric Entry",
    "Women Warden",
    "Emergency Exit"
  ];

  const toggleSuitable = (item) => {
    if (suitableFor.includes(item)) {
      setSuitableFor(
        suitableFor.filter(
          (x) => x !== item
        )
      );
    } else {
      setSuitableFor([
        ...suitableFor,
        item
      ]);
    }
  };

  const toggleSafety = (item) => {
    if (
      safetyFeatures.includes(item)
    ) {
      setSafetyFeatures(
        safetyFeatures.filter(
          (x) => x !== item
        )
      );
    } else {
      setSafetyFeatures([
        ...safetyFeatures,
        item
      ]);
    }
  };

  return (
    <div className="basicPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="basicCard">

        <div className="basicHeader">

          <h1>
            Basic Hostel Details
          </h1>

          <p>
            Tell students about
            your hostel.
          </p>

        </div>

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
            <div className="progressFill" />
          </div>

        </div>

        <div className="field">

          <label>
            Hostel Name
          </label>

          <input
            type="text"
            placeholder="Sunrise Boys PG"
            value={hostelName}
            onChange={(e) =>
              setHostelName(
                e.target.value
              )
            }
          />

        </div>

        {/* HOSTEL TYPE */}

        <div className="sectionTitle">
          Hostel Type
        </div>

        <div className="cardGrid">

          {hostelTypes.map(
            (item) => (

              <div
                key={item.id}
                className={`optionCard ${
                  hostelType ===
                  item.id
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

                <h4>
                  {item.title}
                </h4>

              </div>

            )
          )}

        </div>

        {/* CATEGORY */}

        <div className="sectionTitle">
          Hostel Category
        </div>

        <div className="categoryGrid">

          {categories.map(
            (item) => (

              <div
                key={item.id}
                className={`categoryCard ${
                  hostelCategory ===
                  item.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setHostelCategory(
                    item.id
                  )
                }
              >
                {item.title}
              </div>

            )
          )}

        </div>

        {/* LOCATION */}

        <div className="sectionTitle">
          Location Details
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
              Area
            </label>

            <input
              type="text"
              placeholder="Kompally"
            />

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

        </div>

        <div className="field">

          <label>
            Landmark
          </label>

          <input
            type="text"
            placeholder="Near Metro, College, Bus Stop"
          />

        </div>

        {/* DESCRIPTION */}

        <div className="sectionTitle">
          Hostel Description
        </div>

        <textarea
          className="descriptionBox"
          placeholder="Describe your hostel..."
        />

        {/* SUITABLE */}

        <div className="sectionTitle">
          Suitable For
        </div>

        <div className="tagGrid">

          {suitableOptions.map(
            (item) => (

              <div
                key={item}
                className={`tagCard ${
                  suitableFor.includes(
                    item
                  )
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  toggleSuitable(
                    item
                  )
                }
              >
                {item}
              </div>

            )
          )}

        </div>

        {/* SAFETY */}

        <div className="sectionTitle">
          Safety Features
        </div>

        <div className="featureGrid">

          {safetyOptions.map(
            (item) => (

              <div
                key={item}
                className={`featureCard ${
                  safetyFeatures.includes(
                    item
                  )
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  toggleSafety(
                    item
                  )
                }
              >
                <FaShieldAlt />
                <span>
                  {item}
                </span>
              </div>

            )
          )}

        </div>

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