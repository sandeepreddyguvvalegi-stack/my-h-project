import "./Home.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/hostelApi";

function Home() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [hostels, setHostels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await API.get("/hostels");
      setHostels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredHostels = hostels.filter(
    (h) =>
      (h.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (h.location || "").toLowerCase().includes(search.toLowerCase())
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

  // ✅ FIXED IMAGE PARSE
const getImage = (hostel) => {
  try {
    const images = JSON.parse(hostel.images || "[]");

    if (images.length > 0) {
      const img = images[0];

      // already full URL (Cloudinary or external)
      if (img.startsWith("http")) return img;

      // backend /uploads path
      return `http://localhost:8080${img}`;
    }

    return "https://images.unsplash.com/photo-1555854877-bab0e564b8d5";
  } catch (e) {
    return "https://images.unsplash.com/photo-1555854877-bab0e564b8d5";
  }
};

  return (
    <div className="home-container">
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
            <div className="menu-icon" onClick={() => setOpen(!open)}>
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

      <div className="hostel-section" onScroll={handleScroll}>
        <div className="hostel-row">
          {gridHostels.map((hostel) => (
            <div
              className="hostel-card"
              key={hostel.id}
              onClick={() =>
                navigate(`/hostel-details/${hostel.id}`)
              }
            >
              <div className="hostel-image">
                <img src={getImage(hostel)} alt={hostel.name} />
                <div className="hostel-name-overlay">
                  {hostel.name}
                </div>
              </div>

              <div className="hostel-details">
                <p className="location">{hostel.location}</p>
                <p className="price">₹{hostel.price}</p>
                <p className="rating">
                  Occupancy {hostel.occupancyPercentage || 0}%
                </p>
              </div>
            </div>
          ))}
        </div>

        {horizontalHostels.length > 0 && (
          <div className="horizontal-row">
            {horizontalHostels.map((hostel) => (
              <div
                className="hostel-card"
                key={hostel.id}
                onClick={() =>
                  navigate(`/hostel-details/${hostel.id}`)
                }
              >
                <div className="hostel-image">
                  <img src={getImage(hostel)} alt={hostel.name} />
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