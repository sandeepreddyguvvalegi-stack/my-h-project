import "./LaunchListing.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaCloudUploadAlt,
  FaImage,
  FaVideo,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";

function LaunchListing() {

  const navigate = useNavigate();

  const [photos, setPhotos] =
    useState([]);

  const [videoLink,
    setVideoLink] =
    useState("");

  const [coverImage,
    setCoverImage] =
    useState(null);

  const [highlights,
    setHighlights] =
    useState([]);

  const features = [
    "24x7 WiFi",
    "AC Rooms",
    "Homely Food",
    "Near College",
    "Power Backup",
    "Study Room",
    "Laundry",
    "CCTV"
  ];

  const toggleFeature = (
    item
  ) => {

    if(
      highlights.includes(item)
    ){
      setHighlights(
        highlights.filter(
          f => f !== item
        )
      );
    }
    else if(
      highlights.length < 3
    ){
      setHighlights([
        ...highlights,
        item
      ]);
    }

  };
    return (

    <div className="launchPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="launchCard">

        <div className="header">

          <h1>
            Launch Hostel Listing
          </h1>

          <p>
            Final step before
            publishing your hostel.
          </p>

        </div>

        <div className="scoreCard">

          <h2>92%</h2>

          <p>
            Listing Strength
          </p>

          <div className="scoreBar">
            <div
              className="scoreFill"
            />
          </div>

        </div>
                <div className="sectionTitle">
          Media Upload
        </div>

        <div className="uploadBox">

          <FaCloudUploadAlt />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e)=>
              setPhotos(
                [
                  ...e.target.files
                ]
              )
            }
          />

          <p>
            Upload Hostel Photos
          </p>

        </div>

        <div className="mediaStats">

          <div className="mediaCard">
            <FaImage />
            <span>
              {photos.length}
              Photos
            </span>
          </div>

          <div className="mediaCard">
            <FaVideo />
            <span>
              Video Tour
            </span>
          </div>

        </div>

        <input
          className="youtubeInput"
          type="text"
          placeholder="YouTube Video Link"
          value={videoLink}
          onChange={(e)=>
            setVideoLink(
              e.target.value
            )
          }
        />
                <div className="sectionTitle">
          Highlight Features
        </div>

        <p className="smallText">
          Select up to 3 features
        </p>

        <div className="featureGrid">

          {features.map(
            (item) => (

            <div
              key={item}
              className={`featureCard ${
                highlights.includes(
                  item
                )
                ? "active"
                : ""
              }`}
              onClick={() =>
                toggleFeature(
                  item
                )
              }
            >
              {item}
            </div>

          ))}

        </div>
                <div className="sectionTitle">
          Student Preview
        </div>

        <div className="previewCard">

          <div className="previewBanner">

            Hostel Cover Photo

          </div>

          <h3>
            Your Hostel Listing
          </h3>

          <p>
            ⭐ 4.8 Rating
          </p>

          <p>
            ₹6500 / Month
          </p>

          <div className="highlightTags">

            {highlights.map(
              (item) => (

              <span
                key={item}
              >
                {item}
              </span>

            ))}
          </div>

        </div>
                <div className="sectionTitle">
          Listing Quality Check
        </div>

        <div className="checkList">

          <div>
            <FaCheckCircle />
            Photos Uploaded
          </div>

          <div>
            <FaCheckCircle />
            Pricing Added
          </div>

          <div>
            <FaCheckCircle />
            Amenities Added
          </div>

          <div>
            <FaCheckCircle />
            Rules Added
          </div>

        </div>

        <div className="buttonRow">

          <button
            className="draftBtn"
          >
            Save Draft
          </button>

          <button
            className="previewBtn"
          >
            Preview
          </button>

         <button
  className="publishBtn"
  onClick={() => navigate("/success-page")}
>
  Publish Hostel
</button>

        </div>

      </div>

    </div>

  );
}

export default LaunchListing;