import "./FoodTimetable.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function FoodTimetable() {
  const navigate = useNavigate();

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const defaultMenu = {
    breakfast: "",
    lunch: "",
    snacks: "",
    dinner: "",
    special: ""
  };

  const [timetable, setTimetable] = useState(
    days.reduce((acc, d) => {
      acc[d] = { ...defaultMenu };
      return acc;
    }, {})
  );

  // 🔥 PRESET MENUS
  const presets = {
    southIndian: {
      breakfast: "Idli, Dosa, Sambar",
      lunch: "Rice, Sambar, Curry",
      snacks: "Tea + Bonda",
      dinner: "Chapati + Curry",
      special: "Sunday Biryani"
    },
    northIndian: {
      breakfast: "Paratha + Curd",
      lunch: "Roti + Paneer + Rice",
      snacks: "Pakoda + Tea",
      dinner: "Chapati + Dal",
      special: "Paneer Biryani"
    },
    light: {
      breakfast: "Poha / Upma",
      lunch: "Rice + Dal",
      snacks: "Biscuits + Tea",
      dinner: "Khichdi",
      special: "Fruit Salad"
    }
  };

  const applyPreset = (day, type) => {
    setTimetable({
      ...timetable,
      [day]: presets[type]
    });
  };

  const handleChange = (day, field, value) => {
    setTimetable({
      ...timetable,
      [day]: {
        ...timetable[day],
        [field]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("foodTimetable", JSON.stringify(timetable));
    navigate("/amenities");
  };

  return (
    <div className="foodPage">

      <div className="backBtn" onClick={() => navigate("/amenities")}>
        <FaArrowLeft />
      </div>

      <div className="foodContainer">

        <h1 className="title">🍽️ Weekly Food Planner</h1>
        <p className="subtitle">
          Set menu manually OR use presets for fast setup
        </p>

        {days.map((day) => (
          <div className="dayCard" key={day}>

            <div className="dayHeader">
              <h2>{day}</h2>

              {/* 🔥 QUICK PRESET BUTTONS */}
              <div className="presetBtns">
                <button onClick={() => applyPreset(day, "southIndian")}>
                  South
                </button>
                <button onClick={() => applyPreset(day, "northIndian")}>
                  North
                </button>
                <button onClick={() => applyPreset(day, "light")}>
                  Light
                </button>
              </div>
            </div>

            <div className="grid">

              <input
                placeholder="Breakfast"
                value={timetable[day].breakfast}
                onChange={(e) =>
                  handleChange(day, "breakfast", e.target.value)
                }
              />

              <input
                placeholder="Lunch"
                value={timetable[day].lunch}
                onChange={(e) =>
                  handleChange(day, "lunch", e.target.value)
                }
              />

              <input
                placeholder="Snacks / Tea"
                value={timetable[day].snacks}
                onChange={(e) =>
                  handleChange(day, "snacks", e.target.value)
                }
              />

              <input
                placeholder="Dinner"
                value={timetable[day].dinner}
                onChange={(e) =>
                  handleChange(day, "dinner", e.target.value)
                }
              />

              <input
                placeholder="Special Food"
                value={timetable[day].special}
                onChange={(e) =>
                  handleChange(day, "special", e.target.value)
                }
              />

            </div>
          </div>
        ))}

        <button className="btn" onClick={handleSubmit}>
          Save & Continue →
        </button>

      </div>
    </div>
  );
}

export default FoodTimetable;