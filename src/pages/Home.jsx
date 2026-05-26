import "./Home.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hostelsData from "../data/hostels";

function Home() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const navigate = useNavigate();

  const filteredHostels = hostelsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  const gridHostels = filteredHostels.slice(0, Math.min(visibleCount, 36));
  const horizontalHostels = filteredHostels.slice(36);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom && visibleCount < 36) {
      setVisibleCount((prev) => prev + 12);
    }
  };

  return (
    <div className="home-container">

      {/* HERO */}
      <div className="hero-section">
        <h1 className="app-title">Homfsy</h1>

        <div className="top-row">

          <div className="search-box">
            <input
              type="text"
              placeholder="Search hostel, city or near me"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(12);
              }}
            />
            <button>
              <FaSearch />
            </button>
          </div>

          <div className="menu-wrapper">
            <div
              className="menu-icon"
              onClick={() => setOpen(!open)}
            >
              <FaBars />
            </div>

            {open && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Profile</div>

                <div
                  className="dropdown-item"
                  onClick={() => navigate("/add-hostel")}
                >
                  Add Hostel
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* SCROLL AREA */}
      <div className="hostel-section" onScroll={handleScroll}>

        <div className="hostel-row">
          {gridHostels.map((hostel) => (
            <div className="hostel-card" key={hostel.id}>
              <div className="hostel-image">
                <img src={hostel.image} alt={hostel.name} />
                <div className="hostel-name-overlay">
                  {hostel.name}
                </div>
              </div>

              <div className="hostel-details">
                <p className="location">{hostel.location}</p>
                <p className="price">₹{hostel.price}</p>
                <p className="rating">⭐ {hostel.rating}</p>
              </div>
            </div>
          ))}
        </div>

        {horizontalHostels.length > 0 && (
          <div className="horizontal-row">
            {horizontalHostels.map((hostel) => (
              <div className="hostel-card" key={hostel.id}>
                <div className="hostel-image">
                  <img src={hostel.image} alt={hostel.name} />
                </div>

                <div className="hostel-details">
                  <p>{hostel.name}</p>
                  <p className="price">₹{hostel.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;