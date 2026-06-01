import "./ListYourHostel.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  FaBuilding,
  FaUserShield,
  FaMoneyBillWave,
  FaBed
} from "react-icons/fa";

function ListYourHostel() {

  const navigate = useNavigate();

  return (

    <div className="list-page">

      <div
        className="back-btn"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
      </div>

      <h1 className="logo">
        Homfsy
      </h1>

      <div className="hero-card">

        <h2>
          List Your Hostel on Homfsy
        </h2>

        <p>
          Reach thousands of students looking
          for hostels and PGs near colleges.
        </p>

      </div>

      <div className="benefits-grid">

        <div className="benefit-card">

          <FaBuilding className="icon" />

          <h3>
            More Visibility
          </h3>

          <p>
            Show your hostel to students
            searching online.
          </p>

        </div>

        <div className="benefit-card">

          <FaMoneyBillWave className="icon" />

          <h3>
            Online Payments
          </h3>

          <p>
            Collect booking payments directly.
          </p>

        </div>

        <div className="benefit-card">

          <FaBed className="icon" />

          <h3>
            Bed Management
          </h3>

          <p>
            Manage floors, rooms and beds.
          </p>

        </div>

        <div className="benefit-card">

          <FaUserShield className="icon" />

          <h3>
            Verified Owners
          </h3>

          <p>
            Secure platform with identity
            verification.
          </p>

        </div>

      </div>

      <div className="steps-card">

        <h2>
          How It Works
        </h2>

        <div className="step">
          1️⃣ Register as Owner
        </div>

        <div className="step">
          2️⃣ Upload Identity Proof
        </div>

        <div className="step">
          3️⃣ Add Hostel Details
        </div>

        <div className="step">
          4️⃣ Get Verified
        </div>

        <div className="step">
          5️⃣ Start Receiving Bookings
        </div>

      </div>

      <button
        className="start-btn"
        onClick={() =>
          navigate("/owner-register")
        }
      >
        Start Owner Registration
      </button>

    </div>

  );
}

export default ListYourHostel;