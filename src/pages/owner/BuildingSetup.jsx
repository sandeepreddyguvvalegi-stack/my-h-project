import "./BuildingSetup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaBuilding,
  FaBed,
  FaLayerGroup,
  FaRestroom
} from "react-icons/fa";

function BuildingSetup() {

  const navigate = useNavigate();

  const [floors, setFloors] =
    useState(1);

  const [roomsPerFloor,
    setRoomsPerFloor] =
    useState(10);

  const [bedsPerRoom,
    setBedsPerRoom] =
    useState(4);

  const [bathroomType,
    setBathroomType] =
    useState("attached");

  const totalRooms =
    floors * roomsPerFloor;

  const totalBeds =
    totalRooms * bedsPerRoom;
      return (

    <div className="setupPage">

      <button
        className="backBtn"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <div className="setupCard">

        <div className="header">

          <h1>
            Building Setup &
            Capacity Planner
          </h1>

          <p>
            Configure your hostel
            structure in seconds.
          </p>

        </div>

        <div className="statsGrid">

          <div className="statCard">
            <FaLayerGroup />
            <h3>{floors}</h3>
            <p>Floors</p>
          </div>

          <div className="statCard">
            <FaBuilding />
            <h3>{totalRooms}</h3>
            <p>Rooms</p>
          </div>

          <div className="statCard">
            <FaBed />
            <h3>{totalBeds}</h3>
            <p>Beds</p>
          </div>

        </div>
                <div className="sectionTitle">
          Building Configuration
        </div>

        <div className="configGrid">

          <div className="inputCard">

            <label>
              Number Of Floors
            </label>

            <input
              type="number"
              min="1"
              value={floors}
              onChange={(e)=>
                setFloors(
                  Number(e.target.value)
                )
              }
            />

          </div>

          <div className="inputCard">

            <label>
              Rooms Per Floor
            </label>

            <input
              type="number"
              min="1"
              value={roomsPerFloor}
              onChange={(e)=>
                setRoomsPerFloor(
                  Number(e.target.value)
                )
              }
            />

          </div>

          <div className="inputCard">

            <label>
              Beds Per Room
            </label>

            <input
              type="number"
              min="1"
              value={bedsPerRoom}
              onChange={(e)=>
                setBedsPerRoom(
                  Number(e.target.value)
                )
              }
            />

          </div>

        </div>
                <div className="sectionTitle">
          Bathroom Type
        </div>

        <div className="bathroomGrid">

          <div
            className={`bathroomCard ${
              bathroomType==="attached"
              ? "active"
              : ""
            }`}
            onClick={() =>
              setBathroomType(
                "attached"
              )
            }
          >
            <FaRestroom />
            <span>
              Attached
            </span>
          </div>

          <div
            className={`bathroomCard ${
              bathroomType==="common"
              ? "active"
              : ""
            }`}
            onClick={() =>
              setBathroomType(
                "common"
              )
            }
          >
            <FaRestroom />
            <span>
              Common
            </span>
          </div>

          <div
            className={`bathroomCard ${
              bathroomType==="both"
              ? "active"
              : ""
            }`}
            onClick={() =>
              setBathroomType(
                "both"
              )
            }
          >
            <FaRestroom />
            <span>
              Both
            </span>
          </div>

        </div>
                <div className="sectionTitle">
          Auto Generated Preview
        </div>

        <div className="previewCard">

          <p>
            Floors :
            <strong>
              {floors}
            </strong>
          </p>

          <p>
            Rooms :
            <strong>
              {totalRooms}
            </strong>
          </p>

          <p>
            Beds :
            <strong>
              {totalBeds}
            </strong>
          </p>

          <p>
            Bathroom :
            <strong>
              {bathroomType}
            </strong>
          </p>

        </div>
                <button
          className="continueBtn"
          onClick={() =>
            navigate(
              "/Rulespolicies"
            )
          }
        >
          Continue →
        </button>

      </div>

    </div>

  );
}

export default BuildingSetup;