import "./HostelCount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBuilding,
  FaPlus,
  FaMinus
} from "react-icons/fa";

function HostelCount() {

  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleContinue = () => {

    localStorage.setItem(
      "hostelCount",
      count
    );

    navigate("/basic-details");
  };

  return (
    <div className="countPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="countCard">

        <div className="countHeader">

          <h1>
            How Many Hostels?
          </h1>

          <p>
            Tell us how many hostels
            you want to list.
          </p>

        </div>

        <div className="progressBox">

          <div className="stepText">
            Step 3 of 10
          </div>

          <div className="progressBar">
            <div className="progressFill" />
          </div>

        </div>

        <div className="hostelIcon">
          <FaBuilding />
        </div>

        <h2 className="countTitle">
          Number of Hostels
        </h2>

        <div className="counterBox">

          <button
            onClick={decrease}
          >
            <FaMinus />
          </button>

          <span>
            {count}
          </span>

          <button
            onClick={increase}
          >
            <FaPlus />
          </button>

        </div>

        <div className="infoBox">

          <h3>
            What happens next?
          </h3>

          <ul>

            <li>
              You'll add details for
              each hostel.
            </li>

            <li>
              Rooms, pricing,
              amenities and photos.
            </li>

            <li>
              All hostels managed
              from one dashboard.
            </li>

          </ul>

        </div>

        <button
          className="continueBtn"
          onClick={handleContinue}
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default HostelCount;