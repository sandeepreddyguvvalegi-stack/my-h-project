import "./HostelCount.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  FaHome,
  FaBuilding,
  FaCity
} from "react-icons/fa";

function HostelCount() {

  const navigate = useNavigate();

  const selectCount = (count) => {

    localStorage.setItem(
      "hostelCount",
      count
    );

    navigate("/hostel-basic-details");
  };

  return (

    <div className="countPage">

      <div
        className="backBtn"
        onClick={() =>
          navigate("/owner-verification")
        }
      >
        <FaArrowLeft />
      </div>

      <div className="countContainer">

        <h1 className="logo">
          Homfsy
        </h1>

        <h2>
          Let's Setup Your Property
        </h2>

        <p className="subtitle">
          Tell us how many hostels you manage.
          You can add more later.
        </p>

        <div
          className="countCard"
          onClick={() => selectCount("1")}
        >
          <FaHome className="cardIcon" />

          <div>

            <h3>
              Single Hostel
            </h3>

            <p>
              Ideal for individual owners
            </p>

          </div>

          <span>
            →
          </span>

        </div>

        <div
          className="countCard"
          onClick={() => selectCount("2-5")}
        >
          <FaBuilding className="cardIcon" />

          <div>

            <h3>
              2 - 5 Hostels
            </h3>

            <p>
              Manage multiple properties
            </p>

          </div>

          <span>
            →
          </span>

        </div>

        <div
          className="countCard"
          onClick={() => selectCount("5+")}
        >
          <FaCity className="cardIcon" />

          <div>

            <h3>
              5+ Hostels
            </h3>

            <p>
              Best for hostel chains
            </p>

          </div>

          <span>
            →
          </span>

        </div>

      </div>

    </div>

  );
}

export default HostelCount;