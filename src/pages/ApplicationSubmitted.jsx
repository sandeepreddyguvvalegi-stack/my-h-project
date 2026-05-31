import "./ApplicationSubmitted.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function ApplicationSubmitted() {

  const navigate = useNavigate();

  return (

    <div className="submittedPage">

      <div className="submittedCard">

        <FaCheckCircle className="successIcon" />

        <h1>
          Congratulations!
        </h1>

        <p className="mainText">
          Your hostel has been successfully approved.
        </p>

        <p className="subText">
          Your property is now listed on Homfsy and can
          be discovered by students looking for accommodation.
        </p>

        <div className="statusBox">

          <h3>
            Verification Status
          </h3>

          <div className="approvedStatus">
            ✅ Approved
          </div>

          <h3 style={{ marginTop: "15px" }}>
            Property Status
          </h3>

          <div className="liveStatus">
            🚀 Live On Homfsy
          </div>

        </div>

        <div className="infoBox">

          <div className="infoCard">
            <h4>Hostels</h4>
            <p>1</p>
          </div>

          <div className="infoCard">
            <h4>Bookings</h4>
            <p>0</p>
          </div>

          <div className="infoCard">
            <h4>Students</h4>
            <p>0</p>
          </div>

          <div className="infoCard">
            <h4>Revenue</h4>
            <p>₹0</p>
          </div>

        </div>

        <button
          className="checkBtn"
          onClick={() =>
            navigate("/owner-dashboard")
          }
        >
          Go To Dashboard
        </button>

      </div>

    </div>

  );
}

export default ApplicationSubmitted;