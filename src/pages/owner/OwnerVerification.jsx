import "./OwnerVerification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaIdCard
} from "react-icons/fa";

function OwnerVerification() {
  const navigate = useNavigate();

  const [idType, setIdType] = useState("");

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [selfie, setSelfie] = useState(null);

  const formValid =
    idType &&
    frontImage &&
    backImage &&
    selfie;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValid) return;

    navigate("/hostel-count");
  };

  return (
    <div className="verifyPage">

      <div
        className="backBtn"
        onClick={() => navigate("/owner-register")}
      >
        <FaArrowLeft />
      </div>

      <div className="verifyWrapper">

        {/* LEFT SECTION */}

        <div className="leftSection">

          <h1 className="logo">
            Homfsy
          </h1>

          <h2>
            Identity Verification
          </h2>

          <p>
            Verify your identity to become
            a trusted hostel owner on Homfsy.
            This helps keep the platform
            safe and secure for everyone.
          </p>

          <div className="featureBox">
            <FaCheckCircle />
            Secure Owner Verification
          </div>

          <div className="featureBox">
            <FaCheckCircle />
            Encrypted Document Storage
          </div>

          <div className="featureBox">
            <FaCheckCircle />
            Trusted Student Community
          </div>

          <div className="featureBox">
            <FaCheckCircle />
            Faster Property Approval
          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="verifyCard">

          <div className="cardHeader">

            <h2>
              Verify Your Identity
            </h2>

            <p>
              Upload your government ID and
              selfie for secure verification.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="inputGroup">

              <label>
                Government ID Type
              </label>

              <select
                value={idType}
                onChange={(e) =>
                  setIdType(e.target.value)
                }
              >
                <option value="">
                  Select ID Type
                </option>

                <option>
                  Aadhaar Card
                </option>

                <option>
                  PAN Card
                </option>

                <option>
                  Passport
                </option>

                <option>
                  Driving License
                </option>

              </select>

            </div>

            <div className="infoCard">

              <FaIdCard />

              <div>
                <h4>
                  Verification Requirements
                </h4>

                <ul>
                  <li>
                    Clear and readable images
                  </li>

                  <li>
                    All document corners visible
                  </li>

                  <li>
                    Upload original documents
                  </li>

                  <li>
                    Selfie must match ID
                  </li>
                </ul>
              </div>

            </div>

            {/* FRONT */}

            <div className="uploadCard">

              <label>
                Front Side of ID
              </label>

              <div className="uploadBox">

                <FaCloudUploadAlt />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFrontImage(
                      e.target.files[0]
                    )
                  }
                />

                <span>
                  Click to upload
                </span>

              </div>

              {frontImage && (
                <div className="uploaded">
                  ✅ {frontImage.name}
                </div>
              )}

            </div>

            {/* BACK */}

            <div className="uploadCard">

              <label>
                Back Side of ID
              </label>

              <div className="uploadBox">

                <FaCloudUploadAlt />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setBackImage(
                      e.target.files[0]
                    )
                  }
                />

                <span>
                  Click to upload
                </span>

              </div>

              {backImage && (
                <div className="uploaded">
                  ✅ {backImage.name}
                </div>
              )}

            </div>

            {/* SELFIE */}

            <div className="uploadCard">

              <label>
                Selfie With ID
              </label>

              <div className="uploadBox">

                <FaCloudUploadAlt />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setSelfie(
                      e.target.files[0]
                    )
                  }
                />

                <span>
                  Click to upload
                </span>

              </div>

              {selfie && (
                <div className="uploaded">
                  ✅ {selfie.name}
                </div>
              )}

            </div>

            <div className="securityCard">

              <FaShieldAlt />

              <span>
                Your documents are encrypted
                and securely stored. Only
                authorized verification staff
                can access them.
              </span>

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

export default OwnerVerification;