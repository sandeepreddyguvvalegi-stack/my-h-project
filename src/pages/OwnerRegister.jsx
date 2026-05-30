import "./OwnerRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function OwnerRegister() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(form.password !== form.confirmPassword){
      alert("Passwords do not match");
      return;
    }

    navigate("/owner-verification");
  };

  return (
    <div className="owner-page">

      <div
        className="back-btn"
        onClick={() => navigate("/list-your-hostel")}
      >
        <FaArrowLeft />
      </div>

      <h1 className="logo">
        Homfsy
      </h1>

      <div className="owner-card">

        <h2>Owner Registration</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <div className="terms">
            <input type="checkbox" required />
            <span>
              I agree to Terms & Conditions
            </span>
          </div>

          <button type="submit">
            Continue Verification
          </button>

        </form>

      </div>

    </div>
  );
}

export default OwnerRegister;