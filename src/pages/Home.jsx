import "./Home.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";

function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div className="home-container">

      <div className="hero-section">

        <h1 className="app-title">Homfsy</h1>

        {/* TOP ROW */}
        <div className="top-row">

          {/* SEARCH */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search hostel, city or near me"
            />

            <button>
              <FaSearch />
            </button>
          </div>

          {/* MENU */}
          <div className="menu-wrapper">

            <div className="menu-icon" onClick={() => setOpen(!open)}>
              <FaBars />
            </div>

            {open && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Profile</div>
                <div className="dropdown-item">Add Hostel</div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* HOSTEL SECTION (UNCHANGED) */}
      <div className="hostel-section">

        <div className="hostel-row">

          {/* 1 */}
          <div className="hostel-card">
            <div className="hostel-image">
              <img src="https://source.unsplash.com/400x300/?hostel,room" />
              <div className="hostel-name-overlay">Sunrise PG</div>
            </div>

            <div className="hostel-details">
              <p className="location">Hyderabad</p>

              <select className="sharing-select">
                <option>2 Sharing</option>
                <option>3 Sharing</option>
                <option>4 Sharing</option>
                <option>Single Room</option>
              </select>

              <p className="price">₹6000 / month</p>
              <p className="rating">⭐ 4.5</p>
            </div>
          </div>

          {/* 2 */}
          <div className="hostel-card">
            <div className="hostel-image">
              <img src="https://source.unsplash.com/400x300/?hostel,bed" />
              <div className="hostel-name-overlay">City Stay Hostel</div>
            </div>

            <div className="hostel-details">
              <p className="location">Bangalore</p>

              <select className="sharing-select">
                <option>2 Sharing</option>
                <option>3 Sharing</option>
                <option>4 Sharing</option>
                <option>Single Room</option>
              </select>

              <p className="price">₹5500 / month</p>
              <p className="rating">⭐ 4.2</p>
            </div>
          </div>

          {/* 3 */}
          <div className="hostel-card">
            <div className="hostel-image">
              <img src="https://source.unsplash.com/400x300/?pg,room" />
              <div className="hostel-name-overlay">Green Nest PG</div>
            </div>

            <div className="hostel-details">
              <p className="location">Chennai</p>

              <select className="sharing-select">
                <option>2 Sharing</option>
                <option>3 Sharing</option>
                <option>4 Sharing</option>
                <option>Single Room</option>
              </select>

              <p className="price">₹7000 / month</p>
              <p className="rating">⭐ 4.6</p>
            </div>
          </div>

          {/* 4 */}
          <div className="hostel-card">
            <div className="hostel-image">
              <img src="https://source.unsplash.com/400x300/?dormitory" />
              <div className="hostel-name-overlay">Royal Boys Hostel</div>
            </div>

            <div className="hostel-details">
              <p className="location">Vijayawada</p>

              <select className="sharing-select">
                <option>2 Sharing</option>
                <option>3 Sharing</option>
                <option>4 Sharing</option>
                <option>Single Room</option>
              </select>

              <p className="price">₹4500 / month</p>
              <p className="rating">⭐ 4.1</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;