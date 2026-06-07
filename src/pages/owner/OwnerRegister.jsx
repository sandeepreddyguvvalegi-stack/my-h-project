import "./OwnerRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaUserTie,
  FaBuilding
} from "react-icons/fa";

function OwnerRegister() {

  const navigate = useNavigate();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [countryCode, setCountryCode] =
    useState("+91");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [ownerType, setOwnerType] =
    useState("");

  const [agree, setAgree] =
    useState(false);

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  /* EMAIL OTP */

  const [emailOtpSent,
    setEmailOtpSent] =
    useState(false);

  const [emailOtp,
    setEmailOtp] =
    useState("");

  const [emailVerified,
    setEmailVerified] =
    useState(false);

  /* PHONE OTP */

  const [phoneOtpSent,
    setPhoneOtpSent] =
    useState(false);

  const [phoneOtp,
    setPhoneOtp] =
    useState("");

  const [phoneVerified,
    setPhoneVerified] =
    useState(false);

  /* VALIDATIONS */

  const nameValid =
    /^[A-Za-z ]{3,}$/.test(fullName);

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const phoneValid =
    /^[0-9]{10}$/.test(phone);

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

  const formValid =
    nameValid &&
    emailValid &&
    emailVerified &&
    phoneValid &&
    phoneVerified &&
    passwordValid &&
    passwordsMatch &&
    ownerType &&
    agree;

  const strength =
    [
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      hasLength
    ].filter(Boolean).length;

  const getStrengthText = () => {
    if (strength <= 2) return "Weak";
    if (strength <= 4) return "Medium";
    return "Strong";
  };

  const getStrengthClass = () => {
    if (strength <= 2) return "weak";
    if (strength <= 4) return "medium";
    return "strong";
  };

  const sendEmailOtp = () => {

    if (!emailValid) {
      alert("Enter valid email");
      return;
    }

    setEmailOtpSent(true);

    alert(
      "Demo Email OTP: 123456"
    );
  };

  const verifyEmailOtp = () => {

    if (emailOtp === "123456") {

      setEmailVerified(true);

      alert(
        "Email Verified Successfully"
      );

    } else {

      alert("Invalid Email OTP");

    }
  };

  const sendPhoneOtp = () => {

    if (!phoneValid) {
      alert(
        "Enter valid mobile number"
      );
      return;
    }

    setPhoneOtpSent(true);

    alert(
      "Demo Mobile OTP: 123456"
    );
  };

  const verifyPhoneOtp = () => {

    if (phoneOtp === "123456") {

      setPhoneVerified(true);

      alert(
        "Mobile Verified Successfully"
      );

    } else {

      alert("Invalid Mobile OTP");

    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formValid) return;

    setLoading(true);

    setTimeout(() => {

      alert(
        "Registration Successful"
      );

      navigate("/owner-verification");

    }, 1000);

  };

  return (

    <div className="ownerPage">

      <button
        className="backButton"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="ownerCard">

        <div className="ownerHeader">

          <h1>
            Owner Registration
          </h1>

          <p>
            Start listing your hostel
            and reach thousands of
            students.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
        >

          <div className="field">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) =>
                setFullName(
                  e.target.value
                )
              }
            />

            {!nameValid &&
              fullName.length > 0 && (
                <span className="error">
                  Minimum 3 letters required
                </span>
              )}
          </div>
                    {/* EMAIL */}

          <div className="field">

            <label>Email Address</label>

            <div className="verifyRow">

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {

                  setEmail(
                    e.target.value
                  );

                  setEmailVerified(
                    false
                  );

                }}
              />

              <button
                type="button"
                className="otpBtn"
                disabled={!emailValid}
                onClick={sendEmailOtp}
              >
                {
                  emailVerified
                    ? "Verified"
                    : "Send OTP"
                }
              </button>

            </div>

            {!emailValid &&
              email.length > 0 && (
                <span className="error">
                  Invalid Email
                </span>
              )}

            {emailOtpSent &&
              !emailVerified && (

              <div
                className="otpSection"
              >

                <input
                  type="text"
                  placeholder="Enter Email OTP"
                  value={emailOtp}
                  onChange={(e) =>
                    setEmailOtp(
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className="verifyBtn"
                  onClick={
                    verifyEmailOtp
                  }
                >
                  Verify
                </button>

              </div>

            )}

            {emailVerified && (

              <p
                className="verifiedText"
              >
                ✓ Email Verified
              </p>

            )}

          </div>

          {/* MOBILE */}

          <div className="field">

            <label>
              Mobile Number
            </label>

            <div
              className="phoneWrapper"
            >

              <select
                className="countryCode"
                value={countryCode}
                onChange={(e) =>
                  setCountryCode(
                    e.target.value
                  )
                }
              >

                <option value="+91">
                  🇮🇳 +91
                </option>

                <option value="+1">
                  🇺🇸 +1
                </option>

                <option value="+44">
                  🇬🇧 +44
                </option>

                <option value="+971">
                  🇦🇪 +971
                </option>

              </select>

              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => {

                  setPhone(
                    e.target.value
                  );

                  setPhoneVerified(
                    false
                  );

                }}
              />

            </div>

            {!phoneValid &&
              phone.length > 0 && (

              <span className="error">
                Enter valid
                10 digit number
              </span>

            )}

            <button
              type="button"
              className="otpBtn mobileBtn"
              disabled={!phoneValid}
              onClick={sendPhoneOtp}
            >
              {
                phoneVerified
                  ? "Verified"
                  : "Send OTP"
              }
            </button>

            {phoneOtpSent &&
              !phoneVerified && (

              <div
                className="otpSection"
              >

                <input
                  type="text"
                  placeholder="Enter Mobile OTP"
                  value={phoneOtp}
                  onChange={(e) =>
                    setPhoneOtp(
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className="verifyBtn"
                  onClick={
                    verifyPhoneOtp
                  }
                >
                  Verify
                </button>

              </div>

            )}

            {phoneVerified && (

              <p
                className="verifiedText"
              >
                ✓ Mobile Verified
              </p>

            )}

          </div>

          {/* PASSWORD */}

          <div className="field">

            <label>
              Password
            </label>

            <div
              className="passwordWrapper"
            >

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

            {password.length > 0 && (

              <>
                <div
                  className="strengthBar"
                >

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

          </div>
                    {/* CONFIRM PASSWORD */}

          <div className="field">

            <label>
              Confirm Password
            </label>

            <div
              className="passwordWrapper"
            >

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

            {!passwordsMatch &&
              confirmPassword.length > 0 && (
                <span className="error">
                  Passwords do not match
                </span>
              )}

          </div>

          {/* OWNER TYPE */}

          <div className="field">

            <label>
              Owner Type
            </label>

            <div
              className="ownerTypes"
            >

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
                  setOwnerType(
                    "chain"
                  )
                }
              >
                <FaBuilding />
                <span>
                  Hostel Chain
                </span>
              </div>

            </div>

          </div>

          {/* TERMS */}

          <div
            className="checkboxRow"
          >

            <input
              type="checkbox"
              checked={agree}
              onChange={() =>
                setAgree(!agree)
              }
            />

            <span>
              I agree to Terms &
              Conditions and Privacy
              Policy
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
              : "Continue"}
          </button>

        </form>

      </div>

    </div>

  );
}

export default OwnerRegister;