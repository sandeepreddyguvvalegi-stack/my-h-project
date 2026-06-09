import "./FoodTimetable.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaUtensils,
  FaCopy,
  FaSave,
  FaImage
} from "react-icons/fa";

function FoodTimetable() {

  const navigate = useNavigate();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const [activeDay,
    setActiveDay] =
    useState("Monday");

  const [foodType,
    setFoodType] =
    useState([]);

  const [specialMeal,
    setSpecialMeal] =
    useState("");

  const [images,
    setImages] =
    useState([]);

  const [menuData,
    setMenuData] =
    useState(
      days.reduce(
        (acc, day) => {

          acc[day] = {
            breakfast:"",
            lunch:"",
            snacks:"",
            dinner:""
          };

          return acc;

        },
        {}
      )
    );
      const handleChange = (
    meal,
    value
  ) => {

    setMenuData({
      ...menuData,

      [activeDay]:{
        ...menuData[activeDay],

        [meal]:value
      }
    });

  };

  const copyMondayToAll = () => {

    const monday =
      menuData["Monday"];

    const updated = {};

    days.forEach(day => {
      updated[day] = {
        ...monday
      };
    });

    setMenuData(updated);

  };

  const toggleFoodType =
    (type) => {

    if(
      foodType.includes(type)
    ){
      setFoodType(
        foodType.filter(
          item =>
          item !== type
        )
      );
    }
    else{
      setFoodType([
        ...foodType,
        type
      ]);
    }

  };
    return (

    <div className="foodPage">

      <button
        className="backBtn"
        onClick={() =>
          navigate(-1)
        }
      >
        <FaArrowLeft />
      </button>

      <div className="foodCard">

        <div className="foodHeader">

          <h1>
            Food Timetable
          </h1>

          <p>
            Showcase your
            weekly menu to
            attract students.
          </p>

        </div>

        <div className="progressBox">

          <div className="progressTop">

            <span>
              Step 7 of 10
            </span>

            <span>
              70%
            </span>

          </div>

          <div className="progressBar">
            <div
              className="progressFill"
            />
          </div>

        </div>

        <div className="topActions">

          <button
            className="actionBtn"
            onClick={
              copyMondayToAll
            }
          >
            <FaCopy />
            Copy Monday
            To All Days
          </button>

          <button
            className="actionBtn"
          >
            <FaSave />
            Save Draft
          </button>

        </div>
                {/* DAY TABS */}

        <div className="dayTabs">

          {days.map((day) => (

            <button
              key={day}
              className={
                activeDay === day
                ? "dayTab active"
                : "dayTab"
              }
              onClick={() =>
                setActiveDay(day)
              }
            >
              {day}
            </button>

          ))}

        </div>

        {/* MENU CARD */}

        <div className="menuCard">

          <h2>
            <FaUtensils />
            {activeDay} Menu
          </h2>

          <div className="mealGrid">

            <div className="mealBox">

              <label>
                🌅 Breakfast
              </label>

              <input
                type="text"
                value={
                  menuData[activeDay]
                  .breakfast
                }
                onChange={(e)=>
                  handleChange(
                    "breakfast",
                    e.target.value
                  )
                }
                placeholder="Idli, Dosa..."
              />

            </div>

            <div className="mealBox">

              <label>
                ☀ Lunch
              </label>

              <input
                type="text"
                value={
                  menuData[activeDay]
                  .lunch
                }
                onChange={(e)=>
                  handleChange(
                    "lunch",
                    e.target.value
                  )
                }
                placeholder="Rice, Dal..."
              />

            </div>

            <div className="mealBox">

              <label>
                ☕ Snacks
              </label>

              <input
                type="text"
                value={
                  menuData[activeDay]
                  .snacks
                }
                onChange={(e)=>
                  handleChange(
                    "snacks",
                    e.target.value
                  )
                }
                placeholder="Tea, Biscuit..."
              />

            </div>

            <div className="mealBox">

              <label>
                🌙 Dinner
              </label>

              <input
                type="text"
                value={
                  menuData[activeDay]
                  .dinner
                }
                onChange={(e)=>
                  handleChange(
                    "dinner",
                    e.target.value
                  )
                }
                placeholder="Chapati, Curry..."
              />

            </div>

          </div>

        </div>
                {/* FOOD TYPE */}

        <div className="sectionTitle">
          Food Type
        </div>

        <div className="foodTypeGrid">

          {[
            "Veg",
            "Non-Veg",
            "Egg"
          ].map((type) => (

            <div
              key={type}
              className={
                foodType.includes(type)
                ? "foodTypeCard active"
                : "foodTypeCard"
              }
              onClick={() =>
                toggleFoodType(type)
              }
            >
              {type}
            </div>

          ))}

        </div>

        {/* TIMINGS */}

        <div className="sectionTitle">
          Meal Timings
        </div>

        <div className="timingGrid">

          <input
            type="text"
            placeholder="Breakfast Time"
          />

          <input
            type="text"
            placeholder="Lunch Time"
          />

          <input
            type="text"
            placeholder="Snacks Time"
          />

          <input
            type="text"
            placeholder="Dinner Time"
          />

        </div>

        {/* SUNDAY SPECIAL */}

        <div className="sectionTitle">
          Sunday Special
        </div>

        <div className="specialCard">

          <input
            type="text"
            value={specialMeal}
            onChange={(e)=>
              setSpecialMeal(
                e.target.value
              )
            }
            placeholder="Chicken Biryani, Ice Cream..."
          />

        </div>
                {/* FOOD GALLERY */}

        <div className="sectionTitle">
          Food Gallery
        </div>

        <div className="uploadCard">

          <label
            className="uploadBtn"
          >
            <FaImage />
            Upload Photos

            <input
              type="file"
              multiple
              hidden
              accept="image/*"
              onChange={(e)=>
                setImages(
                  [
                    ...e.target.files
                  ]
                )
              }
            />

          </label>

          <p>
            Upload food,
            kitchen and
            dining area photos
          </p>

        </div>

        {/* PREVIEW */}

        <div className="sectionTitle">
          Student Preview
        </div>

        <div className="previewCard">

          <h3>
            {activeDay}
          </h3>

          <p>
            <strong>
              Breakfast:
            </strong>
            {" "}
            {
              menuData[
                activeDay
              ].breakfast
            }
          </p>

          <p>
            <strong>
              Lunch:
            </strong>
            {" "}
            {
              menuData[
                activeDay
              ].lunch
            }
          </p>

          <p>
            <strong>
              Snacks:
            </strong>
            {" "}
            {
              menuData[
                activeDay
              ].snacks
            }
          </p>

          <p>
            <strong>
              Dinner:
            </strong>
            {" "}
            {
              menuData[
                activeDay
              ].dinner
            }
          </p>

          <p>
            <strong>
              Food Type:
            </strong>
            {" "}
            {
              foodType.join(", ")
            }
          </p>

          <p>
            <strong>
              Sunday Special:
            </strong>
            {" "}
            {
              specialMeal ||
              "Not Added"
            }
          </p>

        </div>

        {/* BUTTONS */}

        <div className="bottomActions">

          <button
            className="backAction"
            onClick={() =>
              navigate(-1)
            }
          >
            ← Back
          </button>

          <button
            className="continueBtn"
            onClick={() =>
              navigate(
                "/room-pricing"
              )
            }
          >
            Continue →
          </button>

        </div>

      </div>

    </div>

  );

}

export default FoodTimetable;