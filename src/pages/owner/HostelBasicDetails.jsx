import "./HostelBasicDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBuilding,
  FaMapMarkerAlt,
  FaUniversity,
  FaSearchLocation
} from "react-icons/fa";

function HostelBasicDetails() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    hostelName: "",
    description: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    nearbyColleges: "",
    mapLink: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const formValid =
    form.hostelName &&
    form.description &&
    form.address &&
    form.city &&
    form.state &&
    form.pincode &&
    form.landmark &&
    form.nearbyColleges;

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

      <div className="basicWrapper">

        {/* LEFT SECTION */}

        <div className="leftSection">

          <h1 className="logo">
            Homfsy
          </h1>

          <h2>
            Create Your Property Profile
          </h2>

          <p>
            Accurate property information helps
            students discover, trust, and book
            your hostel faster.
          </p>

          <div className="featureBox">
            <FaBuilding />
            Professional Property Listing
          </div>

          <div className="featureBox">
            <FaMapMarkerAlt />
            Better Location Visibility
          </div>

          <div className="featureBox">
            <FaUniversity />
            Reach Nearby Students
          </div>

          <div className="featureBox">
            <FaSearchLocation />
            Improved Search Ranking
          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="basicCard">

          <form onSubmit={handleSubmit}>

            {/* BASIC DETAILS */}

            <div className="section">

              <h3>Basic Information</h3>

              <input
                type="text"
                name="hostelName"
                placeholder="Hostel Name"
                value={form.hostelName}
                onChange={handleChange}
              />

              <textarea
                name="description"
                placeholder="Describe your hostel..."
                value={form.description}
                onChange={handleChange}
                rows="5"
              />

            </div>

            {/* LOCATION */}

            <div className="section">

              <h3>Location Details</h3>

              <textarea
                name="address"
                placeholder="Full Address"
                value={form.address}
                onChange={handleChange}
                rows="3"
              />

              <div className="grid2">

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={form.state}
                  onChange={handleChange}
                />

              </div>

              <div className="grid2">

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="landmark"
                  placeholder="Landmark"
                  value={form.landmark}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* COLLEGES */}

            <div className="section">

              <h3>Student Accessibility</h3>

              <textarea
                name="nearbyColleges"
                placeholder="Nearby Colleges (separate with commas)"
                value={form.nearbyColleges}
                onChange={handleChange}
                rows="3"
              />

              <input
                type="text"
                name="mapLink"
                placeholder="Google Maps Link (Optional)"
                value={form.mapLink}
                onChange={handleChange}
              />

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

export default HostelBasicDetails;