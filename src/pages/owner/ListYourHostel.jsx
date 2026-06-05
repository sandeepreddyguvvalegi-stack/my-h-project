import "./ListYourHostel.css";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBuilding,
  FaBed,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

function ListYourHostel() {
  const navigate = useNavigate();

  return (
    <div className="list-page">

      {/* BACK BUTTON */}
      <div
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <span>Back</span>
      </div>

      {/* HERO */}
      <section className="list-hero">

        <div className="hero-content">

          <div className="hero-badge">
            Trusted by Hostel Owners
          </div>

          <h1>
            Fill More Beds.
            <br />
            Grow Faster with Homfsy.
          </h1>

          <p>
            Reach students actively searching for PGs and hostels.
            Manage vacancies, bookings, inquiries and visibility
            from one place.
          </p>

          <button
            className="start-btn"
            onClick={() => navigate("/owner-register")}
          >
            Start Listing
            <FaArrowRight />
          </button>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <h2 className="section-title">
          Why Hostel Owners Choose Homfsy
        </h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>More Visibility</h3>
            <p>
              Get discovered by students searching nearby hostels.
            </p>
          </div>

          <div className="feature-card">
            <FaBed className="feature-icon" />
            <h3>Vacancy Management</h3>
            <p>
              Update available beds and rooms instantly.
            </p>
          </div>

          <div className="feature-card">
            <FaBuilding className="feature-icon" />
            <h3>Professional Presence</h3>
            <p>
              Showcase photos, amenities and hostel details.
            </p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Verified Listings</h3>
            <p>
              Build trust with secure and verified profiles.
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="steps">

        <h2 className="section-title">
          How It Works
        </h2>

        <div className="step-row">

          <div className="step-card">
            <div className="step-number">1</div>
            <h4>Create Account</h4>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h4>Verify Owner</h4>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h4>Add Hostel</h4>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h4>Go Live</h4>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Hostels Listed</p>
        </div>

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Students Searching</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Owner Satisfaction</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <div className="cta-box">

          <h2>
            Ready to Fill Your Empty Beds?
          </h2>

          <p>
            Join Homfsy today and start receiving student inquiries.
          </p>

          <button
            className="start-btn"
            onClick={() => navigate("/owner-register")}
          >
            Start Listing Now
          </button>

        </div>

      </section>

    </div>
  );
}

export default ListYourHostel;