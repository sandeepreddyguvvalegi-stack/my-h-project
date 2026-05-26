import "./Home.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import hostelsData from "../data/hostels";

function Home() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // how many cards visible (3 rows = 12 cards)
  const [visibleCount, setVisibleCount] = useState(12);

  // FILTER
  const filteredHostels = hostelsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  // vertical grid data (max 36 = 9 rows)
  const gridHostels = filteredHostels.slice(0, Math.min(visibleCount, 36));

  // horizontal extra section after 36
  const horizontalHostels = filteredHostels.slice(36);

  // scroll handler (load more)
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom && visibleCount < 36) {
      setVisibleCount((prev) => prev + 12); // add 3 more rows
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
                setVisibleCount(12); // reset on search
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
                <div className="dropdown-item">Add Hostel</div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* SCROLL AREA */}
      <div className="hostel-section" onScroll={handleScroll}>

        {/* GRID SECTION */}
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

                <select className="sharing-select">
                  <option>2 Sharing</option>
                  <option>3 Sharing</option>
                  <option>4 Sharing</option>
                  <option>Single Room</option>
                </select>

                <p className="price">₹{hostel.price} / month</p>
                <p className="rating">⭐ {hostel.rating}</p>
              </div>
            </div>
          ))}
        </div>

        {/* HORIZONTAL SECTION (AFTER 36) */}
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