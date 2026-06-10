import "./SuccessPage.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function SuccessPage() {

  const navigate = useNavigate();

  return (

    <div className="successPage">

      <div className="successCard">

        <div className="successIcon">
          <FaCheckCircle />
        </div>

        <h1>
          Hostel Submitted Successfully!
        </h1>

        <p className="successText">
          Thank you for listing your hostel with us.
          Your hostel details have been received and
          are currently under review.
        </p>

        <div className="statusCard">

          <h3>
            📋 Current Status
          </h3>

          <div className="statusBadge">
            ⏳ Under Review
          </div>

          <p>
            Expected Approval:
            <strong> Within 24 Hours</strong>
          </p>

        </div>

        <div className="nextSteps">

          <h3>
            What Happens Next?
          </h3>

          <div className="step">
            ✅ Verify hostel details
          </div>

          <div className="step">
            ✅ Review uploaded photos
          </div>

          <div className="step">
            ✅ Approve listing
          </div>

          <div className="step">
            ✅ Students start booking
          </div>

        </div>

        <div className="summaryCard">

          <h3>
            Listing Summary
          </h3>

          <p>✅ Hostel Details Added</p>
          <p>✅ Amenities Added</p>
          <p>✅ Pricing Added</p>
          <p>✅ Photos Uploaded</p>

        </div>

        <div className="buttonGroup">

          <button
            className="dashboardBtn"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Go To Dashboard
          </button>

          <button
            className="previewBtn"
          >
            View Listing
          </button>

        </div>

      </div>

    </div>

  );

}

export default SuccessPage;