import "./OwnerVerification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function OwnerVerification() {

  const navigate = useNavigate();

  const [idType, setIdType] = useState("");

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [selfie, setSelfie] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/hostel-count");
  };

  return (

    <div className="verify-page">

      <div
        className="back-btn"
        onClick={() => navigate("/owner-register")}
      >
        <FaArrowLeft />
      </div>

      <h1 className="logo">
        Homfsy
      </h1>

      <div className="verify-card">

        <h2>Identity Verification</h2>

        <form onSubmit={handleSubmit}>

          <select
            value={idType}
            onChange={(e) =>
              setIdType(e.target.value)
            }
            required
          >
            <option value="">
              Select Government ID
            </option>

            <option>
              Aadhaar Card
            </option>

            <option>
              PAN Card
            </option>

            <option>
              Driving License
            </option>

            <option>
              Passport
            </option>

          </select>

          <label>
            Upload Front Side
          </label>

          <input
            type="file"
            required
            onChange={(e) =>
              setFrontImage(e.target.files[0])
            }
          />

          <label>
            Upload Back Side
          </label>

          <input
            type="file"
            required
            onChange={(e) =>
              setBackImage(e.target.files[0])
            }
          />

          <label>
            Upload Selfie With ID
          </label>

          <input
            type="file"
            required
            onChange={(e) =>
              setSelfie(e.target.files[0])
            }
          />

          <div className="security-box">
            Your documents are encrypted and
            securely stored for verification.
          </div>

          <button type="submit">
            Submit Verification
          </button>

        </form>

      </div>

    </div>

  );
}

export default OwnerVerification;