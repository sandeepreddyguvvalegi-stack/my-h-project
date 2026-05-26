import "./Home.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";

import hostelsData from "../data/hostels";

function Home() {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // FILTER HOSTELS
  const filteredHostels = hostelsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="hero-section">

        <h1 className="app-title">Homfsy</h1>

        {/* TOP ROW */}
        <div className="top-row">

          {/* SEARCH */}
          <div className="search-box">

            <input
              type="text"
              placeholder="Search hostel, city or near me"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>
              <FaSearch />
            </button>

          </div>

          {/* MENU */}
          <div className="menu-wrapper">

            <div
              className="menu-icon"
              onClick={() => setOpen(!open)}
            >
              <FaBars />
            </div>

            {open && (
              <div className="dropdown-menu">

                <div className="dropdown-item">
                  Profile
                </div>

                <div className="dropdown-item">
                  Add Hostel
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* HOSTEL SECTION */}
      <div className="hostel-section">

        <div className="hostel-row">

          {filteredHostels.map((hostel) => (

            <div
              className="hostel-card"
              key={hostel.id}
            >

              {/* IMAGE */}
              <div className="hostel-image">

                <img
                  src={hostel.image}
                  alt={hostel.name}
                />

                <div className="hostel-name-overlay">
                  {hostel.name}
                </div>

              </div>

              {/* DETAILS */}
              <div className="hostel-details">

                <p className="location">
                  {hostel.location}
                </p>

                <select className="sharing-select">
                  <option>2 Sharing</option>
                  <option>3 Sharing</option>
                  <option>4 Sharing</option>
                  <option>Single Room</option>
                </select>

                <p className="price">
                  ₹{hostel.price} / month
                </p>

                <p className="rating">
                  ⭐ {hostel.rating}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;