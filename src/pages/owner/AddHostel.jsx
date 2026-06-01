import "./AddHostel.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddHostel() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("hostels")) || [];

    const newHostel = {
      ...form,
      id: Date.now()
    };

    existing.push(newHostel);
    localStorage.setItem("hostels", JSON.stringify(existing));

    navigate("/");
  };

  return (
    <div className="addHostelPage">

      <h2>Add Hostel</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Hostel Name"
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />

        <button type="submit">Save</button>

      </form>

    </div>
  );
}

export default AddHostel;