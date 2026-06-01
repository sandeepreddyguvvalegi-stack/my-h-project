import "./OwnerRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaShieldAlt
} from "react-icons/fa";

function OwnerRegister() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    businessType: "",
    referralCode: "",
    password: "",
    confirmPassword: ""
  });

  const [termsAccepted,
    setTermsAccepted] =
    useState(false);

  const [privacyAccepted,
    setPrivacyAccepted] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value
    });
  };

  const nameValid =
    /^[A-Za-z ]{3,50}$/.test(
      form.name.trim()
    );

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      form.email
    );

  const phoneValid =
    /^[6-9]\d{9}$/.test(
      form.phone
    );

  const passwordValid =
    /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      form.password
    );

  const passwordsMatch =
    form.password &&
    form.password ===
      form.confirmPassword;

  const getPasswordStrength =
    () => {
      let score = 0;

      if (
        form.password.length >= 8
      )
        score++;

      if (
        /[A-Z]/.test(
          form.password
        )
      )
        score++;

      if (
        /\d/.test(
          form.password
        )
      )
        score++;

      if (
        /[!@#$%^&*]/.test(
          form.password
        )
      )
        score++;

      return score;
    };

  const strength =
    getPasswordStrength();

  const formValid =
    nameValid &&
    emailValid &&
    phoneValid &&
    passwordValid &&
    passwordsMatch &&
    termsAccepted &&
    privacyAccepted &&
    form.businessType;

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    if (!formValid) return;

    navigate(
      "/owner-verification"
    );
  };

  return (
    <div className="ownerPage">

      <div
        className="backBtn"
        onClick={() =>
          navigate(
            "/list-your-hostel"
          )
        }
      >
        <FaArrowLeft />
      </div>

      <div className="ownerWrapper">

        <div className="leftSection">

          <h1 className="logo">
            Homfsy
          </h1>

          <h2>
            Start Hosting With
            Confidence
          </h2>

          <p>
            Join Homfsy and
            connect with
            thousands of
            students searching
            for quality hostels.
          </p>

          <div className="featureBox">
            <FaCheckCircle />
            Reach More Students
          </div>

          <div className="featureBox">
            <FaCheckCircle />
            Secure Verification
          </div>

          <div className="featureBox">
            <FaCheckCircle />
            Easy Hostel
            Management
          </div>

        </div>

        <div className="ownerCard">

          <div className="cardHeader">

            <h2>
              Create Owner
              Account
            </h2>

            <p>
              Step 1 of Owner
              Onboarding
            </p>

          </div>

          <form
            onSubmit={
              handleSubmit
            }
          >

            <div className="inputGroup">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={
                  handleChange
                }
                placeholder="Enter your full name"
              />

              {form.name &&
                !nameValid && (
                  <span className="error">
                    Enter valid
                    full name
                  </span>
                )}

            </div>

            <div className="inputGroup">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={
                  handleChange
                }
                placeholder="Enter your email"
              />

              {form.email &&
                !emailValid && (
                  <span className="error">
                    Invalid email
                    address
                  </span>
                )}

            </div>

            <div className="inputGroup">

              <label>
                Mobile Number
              </label>

              <div className="phoneGroup">

                <select
                  name="countryCode"
                  value={
                    form.countryCode
                  }
                  onChange={
                    handleChange
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
                  name="phone"
                  value={
                    form.phone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Phone Number"
                />

              </div>

              {form.phone &&
                !phoneValid && (
                  <span className="error">
                    Enter valid
                    mobile number
                  </span>
                )}

            </div>

            <div className="inputGroup">

              <label>
                Business Type
              </label>

              <select
                name="businessType"
                value={
                  form.businessType
                }
                onChange={
                  handleChange
                }
              >
                <option value="">
                  Select Type
                </option>

                <option>
                  Individual Owner
                </option>

                <option>
                  Hostel Operator
                </option>

                <option>
                  Company
                </option>

              </select>

            </div>

            <div className="inputGroup">

              <label>
                Referral Code
                (Optional)
              </label>

              <input
                type="text"
                name="referralCode"
                value={
                  form.referralCode
                }
                onChange={
                  handleChange
                }
                placeholder="Enter referral code"
              />

            </div>

            <div className="inputGroup">

              <label>
                Password
              </label>

              <div className="passwordBox">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={
                    form.password
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Create password"
                />

                <span
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

            </div>

            <div className="strengthCard">

              <div className="strengthBar">

                <div
                  className={`fill strength${strength}`}
                />

              </div>

              <p>
                Password
                Strength
              </p>

              <ul>

                <li>
                  {form.password
                    .length >= 8
                    ? "✅"
                    : "⬜"}{" "}
                  8+
                  Characters
                </li>

                <li>
                  {/[A-Z]/.test(
                    form.password
                  )
                    ? "✅"
                    : "⬜"}{" "}
                  Uppercase
                  Letter
                </li>

                <li>
                  {/\d/.test(
                    form.password
                  )
                    ? "✅"
                    : "⬜"}{" "}
                  Number
                </li>

              </ul>

            </div>

            <div className="inputGroup">

              <label>
                Confirm
                Password
              </label>

              <div className="passwordBox">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={
                    form.confirmPassword
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Confirm password"
                />

                <span
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

              {form.confirmPassword &&
                !passwordsMatch && (
                  <span className="error">
                    Passwords do
                    not match
                  </span>
                )}

            </div>

            <div className="securityCard">

              <FaShieldAlt />

              <span>
                Your information
                is encrypted and
                securely stored.
              </span>

            </div>

            <div className="checkboxRow">

              <input
                type="checkbox"
                checked={
                  termsAccepted
                }
                onChange={() =>
                  setTermsAccepted(
                    !termsAccepted
                  )
                }
              />

              <span>
                I agree to Terms
                of Service
              </span>

            </div>

            <div className="checkboxRow">

              <input
                type="checkbox"
                checked={
                  privacyAccepted
                }
                onChange={() =>
                  setPrivacyAccepted(
                    !privacyAccepted
                  )
                }
              />

              <span>
                I agree to
                Privacy Policy
              </span>

            </div>

            <button
              type="submit"
              disabled={
                !formValid
              }
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

export default OwnerRegister;