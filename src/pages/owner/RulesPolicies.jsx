import "./RulesPolicies.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaUserShield,
  FaVideo,
  FaBroom,
  FaBolt
} from "react-icons/fa";

function RulesPolicies() {

  const navigate = useNavigate();

  const [entryTime, setEntryTime] =
    useState("");

  const [visitorAllowed,
    setVisitorAllowed] =
    useState("");

  const [noticePeriod,
    setNoticePeriod] =
    useState("");

  const [refundPolicy,
    setRefundPolicy] =
    useState("");

  const [rules,
    setRules] =
    useState("");

  const entryOptions = [
    "6 PM",
    "8 PM",
    "10 PM",
    "11 PM",
    "No Curfew"
  ];

  const noticeOptions = [
    "7 Days",
    "15 Days",
    "30 Days",
    "60 Days"
  ];

  const refundOptions = [
    "No Refund",
    "50% Refund",
    "100% Refund",
    "Custom"
  ];
    return (

    <div className="rulesPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="rulesCard">

        <div className="header">

          <h1>
            Rules & Policies
          </h1>

          <p>
            Define hostel rules for
            students before booking.
          </p>

        </div>

        <div className="progressBox">

          <div className="progressTop">
            <span>Step 10 of 12</span>
            <span>83%</span>
          </div>

          <div className="progressBar">
            <div className="progressFill" />
          </div>

        </div>
                <div className="sectionTitle">
          Entry Timing
        </div>

        <div className="optionGrid">

          {entryOptions.map((item) => (

            <div
              key={item}
              className={`optionCard ${
                entryTime === item
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setEntryTime(item)
              }
            >
              {item}
            </div>

          ))}

        </div>

        <div className="sectionTitle">
          Visitor Policy
        </div>

        <div className="optionGrid">

          <div
            className={`optionCard ${
              visitorAllowed==="Yes"
              ? "active"
              : ""
            }`}
            onClick={() =>
              setVisitorAllowed("Yes")
            }
          >
            Visitors Allowed
          </div>

          <div
            className={`optionCard ${
              visitorAllowed==="No"
              ? "active"
              : ""
            }`}
            onClick={() =>
              setVisitorAllowed("No")
            }
          >
            Visitors Not Allowed
          </div>

        </div>
                <div className="sectionTitle">
          Notice Period
        </div>

        <div className="optionGrid">

          {noticeOptions.map((item) => (

            <div
              key={item}
              className={`optionCard ${
                noticePeriod === item
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setNoticePeriod(item)
              }
            >
              {item}
            </div>

          ))}

        </div>

        <div className="sectionTitle">
          Refund Policy
        </div>

        <div className="optionGrid">

          {refundOptions.map((item) => (

            <div
              key={item}
              className={`optionCard ${
                refundPolicy === item
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setRefundPolicy(item)
              }
            >
              {item}
            </div>

          ))}

        </div>
                <div className="sectionTitle">
          Security Features
        </div>

        <div className="featureGrid">

          <div className="featureCard">
            <FaUserShield />
            <span>
              Security Guard
            </span>
          </div>

          <div className="featureCard">
            <FaVideo />
            <span>
              CCTV
            </span>
          </div>

          <div className="featureCard">
            <FaBolt />
            <span>
              Power Backup
            </span>
          </div>

          <div className="featureCard">
            <FaBroom />
            <span>
              Daily Cleaning
            </span>
          </div>

        </div>

        <div className="sectionTitle">
          Additional Rules
        </div>

        <textarea
          className="rulesBox"
          placeholder="Enter additional hostel rules..."
          value={rules}
          onChange={(e)=>
            setRules(
              e.target.value
            )
          }
        />
                <div className="previewCard">

          <h2>
            Student Preview
          </h2>

          <p>
            Entry Time :
            {entryTime || "-"}
          </p>

          <p>
            Visitors :
            {visitorAllowed || "-"}
          </p>

          <p>
            Notice Period :
            {noticePeriod || "-"}
          </p>

          <p>
            Refund :
            {refundPolicy || "-"}
          </p>

        </div>

        <button
          className="continueBtn"
          onClick={() =>
            navigate("/LaunchListing")
          }
        >
          Continue →
        </button>

      </div>

    </div>

  );
}

export default RulesPolicies;