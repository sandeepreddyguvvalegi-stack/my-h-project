import "./HostelFinalReview.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import API from "../api/hostelApi";

function HostelFinalReview() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const basic = JSON.parse(localStorage.getItem("hostelBasicDetails"));
    const amenities = JSON.parse(localStorage.getItem("amenities"));
    const food = JSON.parse(localStorage.getItem("foodTimetable"));

    setData({ basic, amenities, food });
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await API.post("/owner/submit-hostel", data);

      setSuccess(true);

      setTimeout(() => {
        navigate("/owner-dashboard");
      }, 2000);

    } catch (err) {
      console.log(err);
      alert("Submission Failed");
    }

    setLoading(false);
  };

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="finalPage">

      <div className="backBtn" onClick={() => navigate("/food-timetable")}>
        <FaArrowLeft />
      </div>

      <div className="finalCard">

        {!success ? (
          <>
            <h1>📋 Final Review</h1>
            <p>Check all details before submitting your hostel</p>

            {/* BASIC */}
            <div className="section">
              <h3>🏠 Basic Details</h3>
              <p>Name: {data.basic?.hostelName}</p>
              <p>City: {data.basic?.city}</p>
              <p>Address: {data.basic?.address}</p>
            </div>

            {/* AMENITIES */}
            <div className="section">
              <h3>🏨 Amenities</h3>
              <p>{JSON.stringify(data.amenities)}</p>
            </div>

            {/* FOOD */}
            <div className="section">
              <h3>🍽️ Food Plan</h3>
              <p>Weekly food timetable added ✔</p>
            </div>

            <button className="submitBtn" onClick={handleSubmit}>
              Submit Hostel
            </button>
          </>
        ) : (
          <div className="successBox">
            <FaCheckCircle size={60} color="green" />
            <h1>Congratulations 🎉</h1>
            <p>Your hostel is submitted for verification</p>
            <p>Redirecting to dashboard...</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default HostelFinalReview;