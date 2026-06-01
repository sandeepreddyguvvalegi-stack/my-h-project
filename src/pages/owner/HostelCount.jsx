import "./HostelCount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaRocket
} from "react-icons/fa";

function HostelCount() {

  const navigate = useNavigate();

  const [hostelCount, setHostelCount] = useState("");
  const [status, setStatus] = useState("");
  const [categories, setCategories] = useState([]);

  const toggleCategory = (category) => {

    if (categories.includes(category)) {

      setCategories(
        categories.filter(
          (item) => item !== category
        )
      );

    } else {

      setCategories([
        ...categories,
        category
      ]);

    }
  };

  const formValid =
    hostelCount &&
    status &&
    categories.length > 0;

  const handleSubmit = (e) => {

    e.preventDefault();

    const hostelInfo = {
      hostelCount,
      categories,
      status
    };

    localStorage.setItem(
      "hostelCountInfo",
      JSON.stringify(hostelInfo)
    );

    navigate("/hostel-basic-details");
  };

  return (

    <div className="hostelCountPage">

      <div
        className="backBtn"
        onClick={() =>
          navigate("/owner-verification")
        }
      >
        <FaArrowLeft />
      </div>

      <div className="hostelWrapper">

        {/* LEFT */}

        <div className="leftSection">

          <h1 className="logo">
            Homfsy
          </h1>

          <h2>
            Build Your Property Portfolio
          </h2>

          <p>
            Tell us about your hostel business.
            We'll personalize your dashboard,
            management tools, and analytics
            based on your properties.
          </p>

          <div className="featureBox">
            <FaChartLine />
            Occupancy Analytics
          </div>

          <div className="featureBox">
            <FaBuilding />
            Property Management
          </div>

          <div className="featureBox">
            <FaUsers />
            Reach More Students
          </div>

          <div className="featureBox">
            <FaRocket />
            Business Growth Tools
          </div>

        </div>

        {/* RIGHT */}

        <div className="hostelCard">

          <form onSubmit={handleSubmit}>

            {/* HOSTEL COUNT */}

            <div className="section">

              <h3>
                How many hostels do you want to list?
              </h3>

              <div className="cardGrid">

                {[
                  "1 Hostel",
                  "2-5 Hostels",
                  "6-10 Hostels",
                  "10+ Hostels"
                ].map((item) => (

                  <div
                    key={item}
                    className={`selectCard ${
                      hostelCount === item
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setHostelCount(item)
                    }
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            {/* CATEGORY */}

            <div className="section">

              <h3>
                Accommodation Types
              </h3>

              <div className="cardGrid">

                {[
                  "Boys Hostel",
                  "Girls Hostel",
                  "PG Accommodation",
                  "Co-Living"
                ].map((item) => (

                  <div
                    key={item}
                    className={`selectCard ${
                      categories.includes(item)
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      toggleCategory(item)
                    }
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            {/* STATUS */}

            <div className="section">

              <h3>
                Current Property Status
              </h3>

              <div className="cardGrid">

                {[
                  "Already Running",
                  "Opening Soon",
                  "Under Construction"
                ].map((item) => (

                  <div
                    key={item}
                    className={`selectCard ${
                      status === item
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setStatus(item)
                    }
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            <button
              type="submit"
              disabled={!formValid}
              className={
                formValid
                  ? "activeBtn"
                  : "disabledBtn"
              }
            >
              Continue →
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default HostelCount;