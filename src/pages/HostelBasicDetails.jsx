import "./HostelBasicDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function HostelBasicDetails() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    hostelName: "",
    state: "",
    city: "",
    address: "",
    landmark: "",
    pincode: "",
    mapLink: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "hostelBasicDetails",
      JSON.stringify(form)
    );

    navigate("/amenities");
  };

  return (

    <div className="basicPage">

      <div
        className="backBtn"
        onClick={() => navigate("/hostel-count")}
      >
        <FaArrowLeft />
      </div>

      <div className="basicContainer">

        <h1>Hostel Basic Details</h1>

        <div className="stepTag">
          Step 4 of 10
        </div>

        <p className="subtitle">
          Tell students where your hostel is located.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="sectionTitle">
            📍 Hostel Information
          </div>

          <input
            type="text"
            name="hostelName"
            placeholder="Hostel Name"
            required
            onChange={handleChange}
          />

          <div className="row2">

            <input
              type="text"
              name="state"
              placeholder="State"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              required
              onChange={handleChange}
            />

          </div>

          <textarea
            name="address"
            placeholder="Full Address"
            rows="4"
            required
            onChange={handleChange}
          />

          <div className="row2">

            <input
              type="text"
              name="landmark"
              placeholder="Nearby Landmark"
              onChange={handleChange}
            />

            <input
              type="number"
              name="pincode"
              placeholder="Pincode"
              required
              onChange={handleChange}
            />

          </div>

          <input
            type="text"
            name="mapLink"
            placeholder="Google Maps Link (Optional)"
            onChange={handleChange}
          />

          <div className="previewCard">

            <h3>🏠 Location Preview</h3>

            <p>
              {form.hostelName || "Hostel Name"}
            </p>

            <small>
              {form.city || "City"}, {form.state || "State"}
            </small>

            <div className="previewLandmark">
              {form.landmark || "Nearby Landmark"}
            </div>

          </div>

          <button type="submit">
            Continue →
          </button>

        </form>

      </div>

    </div>

  );
}

export default HostelBasicDetails;