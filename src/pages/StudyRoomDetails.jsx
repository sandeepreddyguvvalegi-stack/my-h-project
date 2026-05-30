import "./StudyRoomDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function StudyRoomDetails() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    capacity: "",
    openTime: "",
    closeTime: "",
    rules: "",
    photos: []
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotos = (e) => {
    setForm({
      ...form,
      photos: Array.from(e.target.files)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "studyRoomDetails",
      JSON.stringify(form)
    );

    navigate("/food-timings");
  };

  return (
    <div className="studyPage">

      <div className="backBtn" onClick={() => navigate("/amenities")}>
        <FaArrowLeft />
      </div>

      <div className="studyContainer">

        <h1>📚 Study Room Setup</h1>

        <div className="stepTag">Step 6 of 10</div>

        <p className="subtitle">
          Configure study room facilities for students
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            name="capacity"
            placeholder="Seating Capacity"
            onChange={handleChange}
            required
          />

          <div className="row2">

            <input
              type="time"
              name="openTime"
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="closeTime"
              onChange={handleChange}
              required
            />

          </div>

          <textarea
            name="rules"
            placeholder="Study Room Rules (Silent zone, no food etc.)"
            rows="4"
            onChange={handleChange}
          />

          <label>Upload Study Room Photos</label>

          <input
            type="file"
            multiple
            onChange={handlePhotos}
          />

          <div className="previewBox">
            <h3>Preview</h3>
            <p>Capacity: {form.capacity || "-"}</p>
            <p>
              Time: {form.openTime || "--"} to {form.closeTime || "--"}
            </p>
          </div>

          <button type="submit">
            Continue →
          </button>

        </form>

      </div>

    </div>
  );
}

export default StudyRoomDetails;