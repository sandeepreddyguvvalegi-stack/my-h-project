import "./HostelFinalReview.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function HostelFinalReview() {

  const navigate = useNavigate();

  const owner =
    JSON.parse(
      localStorage.getItem("ownerData")
    ) || {};

  const basic =
    JSON.parse(
      localStorage.getItem(
        "hostelBasicDetails"
      )
    ) || {};

  const amenities =
    JSON.parse(
      localStorage.getItem(
        "amenities"
      )
    ) || {};

  const studyRoom =
    JSON.parse(
      localStorage.getItem(
        "studyRoom"
      )
    ) || {};

  const structure =
    JSON.parse(
      localStorage.getItem(
        "hostelStructure"
      )
    ) || {};

  const pricing =
    JSON.parse(
      localStorage.getItem(
        "hostelPricing"
      )
    ) || {};

  const submitHostel = () => {

    alert(
      "🎉 Hostel Submitted Successfully!"
    );

    navigate("/application-submitted");
  };

  return (

    <div className="reviewPage">

      <div
        className="backBtn"
        onClick={() =>
          navigate("/hostel-pricing")
        }
      >
        <FaArrowLeft />
      </div>

      <div className="reviewContainer">

        <h1>
          Final Review
        </h1>

        <p className="subtitle">
          Review everything before submitting
        </p>

        {/* OWNER */}

        <div className="reviewCard">

          <h2>
            Owner Information
          </h2>

          <p>
            Name:
            {" "}
            {owner.name}
          </p>

          <p>
            Email:
            {" "}
            {owner.email}
          </p>

          <p>
            Phone:
            {" "}
            {owner.phone}
          </p>

        </div>

        {/* BASIC */}

        <div className="reviewCard">

          <h2>
            Hostel Details
          </h2>

          <p>
            Name:
            {" "}
            {basic.hostelName}
          </p>

          <p>
            State:
            {" "}
            {basic.state}
          </p>

          <p>
            City:
            {" "}
            {basic.city}
          </p>

          <p>
            Address:
            {" "}
            {basic.address}
          </p>

        </div>

        {/* AMENITIES */}

        <div className="reviewCard">

          <h2>
            Amenities
          </h2>

          <div className="tags">

            {Object.keys(amenities)
              .filter(
                (key) =>
                  amenities[key]
              )
              .map((item) => (

                <span
                  key={item}
                  className="tag"
                >
                  {item}
                </span>

              ))}

          </div>

        </div>

        {/* STUDY ROOM */}

        <div className="reviewCard">

          <h2>
            Study Room
          </h2>

          <p>
            Available:
            {" "}
            {studyRoom.hasStudyRoom
              ? "Yes"
              : "No"}
          </p>

        </div>

        {/* STRUCTURE */}

        <div className="reviewCard">

          <h2>
            Hostel Structure
          </h2>

          <p>
            Floors:
            {" "}
            {structure.floors}
          </p>

          <p>
            Rooms:
            {" "}
            {structure.totalRooms}
          </p>

          <p>
            Beds:
            {" "}
            {structure.totalBeds}
          </p>

        </div>

        {/* PRICING */}

        <div className="reviewCard">

          <h2>
            Pricing
          </h2>

          <p>
            Daily:
            ₹{pricing.dailyPrice}
          </p>

          <p>
            Monthly:
            ₹{pricing.monthlyPrice}
          </p>

          <p>
            Yearly:
            ₹{pricing.yearlyPrice}
          </p>

          {pricing.hasDiscount && (

            <p className="discount">
              Discount:
              {" "}
              {pricing.discount}%
            </p>

          )}

        </div>

        {/* SUBMIT */}

        <button
          className="submitBtn"
          onClick={submitHostel}
        >
          Submit Hostel
        </button>

      </div>

    </div>

  );
}

export default HostelFinalReview;