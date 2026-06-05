import "./OwnerRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaUserTie,
  FaBuilding,
  FaHotel
} from "react-icons/fa";

function OwnerRegister() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [ownerType, setOwnerType] = useState("");
  const [agree, setAgree] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  /* ================= VALIDATIONS ================= */

  const nameValid =
    /^[A-Za-z ]{3,}$/.test(fullName);

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const phoneValid =
    phone.length >= 10;

  const hasUpper =
    /[A-Z]/.test(password);

  const hasLower =
    /[a-z]/.test(password);

  const hasNumber =
    /\d/.test(password);

  const hasSpecial =
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const hasLength =
    password.length >= 8;

  const passwordValid =
    hasUpper &&
    hasLower &&
    hasNumber &&
    hasSpecial &&
    hasLength;

  const passwordsMatch =
    password === confirmPassword &&
    confirmPassword.length > 0;

  /* ================= PASSWORD STRENGTH ================= */

  const strengthScore =
    [
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      hasLength
    ].filter(Boolean).length;

  const getStrengthText = () => {
    if (strengthScore <= 2) return "Weak";
    if (strengthScore <= 4) return "Medium";
    return "Strong";
  };

  const getStrengthClass = () => {
    if (strengthScore <= 2) return "weak";
    if (strengthScore <= 4) return "medium";
    return "strong";
  };

  /* ================= FORM VALID ================= */

  const formValid =
    nameValid &&
    emailValid &&
    phoneValid &&
    passwordValid &&
    passwordsMatch &&
    ownerType &&
    agree;

  /* ================= SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValid) return;

    setLoading(true);

    setTimeout(() => {
      navigate("/owner-verification");
    }, 1200);
  };

  return (
    <div className="ownerPage">

      {/* BACK BUTTON */}
      <button
        className="backButton"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      {/* CARD */}
      <div className="ownerCard">

        <div className="ownerHeader">
          <h1>Owner Registration</h1>

          <p>
            Start listing your hostel on Homfsy
            and reach more students.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* FULL NAME */}
          <div className="field">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />

            {!nameValid &&
              fullName.length > 0 && (
                <span className="error">
                  Minimum 3 characters.
                  Letters only.
                </span>
              )}
          </div>

          {/* EMAIL */}
          <div className="field">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            {!emailValid &&
              email.length > 0 && (
                <span className="error">
                  Enter a valid email.
                </span>
              )}
          </div>

          {/* PHONE */}
          <div className="field">
            <label>Mobile Number</label>

            <PhoneInput
              country={"in"}
              preferredCountries={[
                "in",
                "us",
                "gb",
                "ae"
              ]}
              enableSearch
              value={phone}
              onChange={(value) =>
                setPhone(value)
              }
            />

            {!phoneValid &&
              phone.length > 0 && (
                <span className="error">
                  Enter valid mobile number.
                </span>
              )}
          </div>

          {/* PASSWORD */}
          <div className="field">
            <label>Password</label>

            <div className="passwordWrapper">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

              <span
                className="eyeIcon"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? <FaEyeSlash />
                  : <FaEye />}
              </span>

            </div>

            {/* STRENGTH */}
            {password.length > 0 && (
              <>
                <div className="strengthBar">
                  <div
                    className={`strengthFill ${getStrengthClass()}`}
                  />
                </div>

                <p
                  className={`strengthText ${getStrengthClass()}`}
                >
                  {getStrengthText()}
                </p>
              </>
            )}

            <div className="rules">

              <p className={hasLength ? "ok" : ""}>
                ✓ Minimum 8 characters
              </p>

              <p className={hasUpper ? "ok" : ""}>
                ✓ One uppercase letter
              </p>

              <p className={hasLower ? "ok" : ""}>
                ✓ One lowercase letter
              </p>

              <p className={hasNumber ? "ok" : ""}>
                ✓ One number
              </p>

              <p className={hasSpecial ? "ok" : ""}>
                ✓ One special character
              </p>

            </div>

          </div>

          {/* CONFIRM PASSWORD */}
          <div className="field">
            <label>
              Confirm Password
            </label>

            <div className="passwordWrapper">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
              />

              <span
                className="eyeIcon"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword
                  ? <FaEyeSlash />
                  : <FaEye />}
              </span>

            </div>

            {confirmPassword.length >
              0 &&
              !passwordsMatch && (
                <span className="error">
                  Passwords do not match.
                </span>
              )}
          </div>

          {/* OWNER TYPE */}
          <div className="field">
            <label>
              Select Owner Type
            </label>

            <div className="ownerTypes">

              <div
                className={`ownerTypeCard ${
                  ownerType ===
                  "individual"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setOwnerType(
                    "individual"
                  )
                }
              >
                <FaUserTie />
                <span>
                  Individual Owner
                </span>
              </div>

              <div
                className={`ownerTypeCard ${
                  ownerType ===
                  "manager"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setOwnerType(
                    "manager"
                  )
                }
              >
                <FaBuilding />
                <span>
                  Property Manager
                </span>
              </div>

              <div
                className={`ownerTypeCard ${
                  ownerType ===
                  "chain"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setOwnerType("chain")
                }
              >
                <FaHotel />
                <span>
                  Hostel Chain
                </span>
              </div>

            </div>
          </div>

          {/* TERMS */}
          <div className="checkboxRow">

            <input
              type="checkbox"
              checked={agree}
              onChange={() =>
                setAgree(!agree)
              }
            />

            <span>
              I agree to the Terms &
              Conditions and Privacy
              Policy.
            </span>

          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={!formValid}
            className="continueBtn"
          >
            {loading
              ? "Please wait..."
              : "Continue Verification"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default OwnerRegister;