import "./OwnerVerification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaIdCard,
  FaCamera,
  FaFileUpload,
  FaCheckCircle
} from "react-icons/fa";

function OwnerVerification() {

  const navigate = useNavigate();

  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const [frontFile, setFrontFile] =
    useState(null);

  const [backFile, setBackFile] =
    useState(null);

  const [selfieFile, setSelfieFile] =
    useState(null);

  const [proofType, setProofType] =
    useState("");

  const [proofFile, setProofFile] =
    useState(null);

  const formValid =
    idType &&
    idNumber &&
    frontFile &&
    backFile &&
    selfieFile &&
    proofType &&
    proofFile;

  const handleSubmit = () => {

    if (!formValid) return;

    alert("Verification Submitted");

    navigate("/hostel-count");
  };

  return (
    <div className="verifyPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="verifyCard">

        <div className="verifyHeader">

          <h1>Owner Verification</h1>

          <p>
            Verify your identity and
            property ownership before
            listing hostels.
          </p>

        </div>

        <div className="progressBox">

          <div className="progressTop">
            Step 2 of 10
          </div>

          <div className="progressBar">
            <div className="progressFill" />
          </div>

        </div>

        {/* ID TYPE */}

        <div className="field">

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
              Select ID
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

        </div>

        {/* ID NUMBER */}

        <div className="field">

          <label>ID Number</label>

          <input
            type="text"
            placeholder="Enter ID Number"
            value={idNumber}
            onChange={(e) =>
              setIdNumber(
                e.target.value
              )
            }
          />

        </div>

        {/* FRONT */}

        <div className="uploadBox">

          <FaIdCard />

          <h3>
            Upload Front Side
          </h3>

          <input
            type="file"
            onChange={(e) =>
              setFrontFile(
                e.target.files[0]
              )
            }
          />

          {frontFile && (
            <p className="success">
              <FaCheckCircle />
              {frontFile.name}
            </p>
          )}

        </div>

        {/* BACK */}

        <div className="uploadBox">

          <FaIdCard />

          <h3>
            Upload Back Side
          </h3>

          <input
            type="file"
            onChange={(e) =>
              setBackFile(
                e.target.files[0]
              )
            }
          />

          {backFile && (
            <p className="success">
              <FaCheckCircle />
              {backFile.name}
            </p>
          )}

        </div>

        {/* SELFIE */}

        <div className="uploadBox">

          <FaCamera />

          <h3>
            Upload Selfie
          </h3>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setSelfieFile(
                e.target.files[0]
              )
            }
          />

          {selfieFile && (
            <p className="success">
              <FaCheckCircle />
              {selfieFile.name}
            </p>
          )}

        </div>

        {/* PROPERTY */}

        <div className="field">

          <label>
            Property Proof Type
          </label>

          <select
            value={proofType}
            onChange={(e) =>
              setProofType(
                e.target.value
              )
            }
          >
            <option value="">
              Select Proof
            </option>

            <option>
              Electricity Bill
            </option>

            <option>
              Rental Agreement
            </option>

            <option>
              Property Tax Receipt
            </option>

            <option>
              Ownership Document
            </option>
          </select>

        </div>

        <div className="uploadBox">

          <FaFileUpload />

          <h3>
            Upload Property Proof
          </h3>

          <input
            type="file"
            onChange={(e) =>
              setProofFile(
                e.target.files[0]
              )
            }
          />

          {proofFile && (
            <p className="success">
              <FaCheckCircle />
              {proofFile.name}
            </p>
          )}

        </div>

        <button
          className="continueBtn"
          disabled={!formValid}
          onClick={handleSubmit}
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default OwnerVerification;