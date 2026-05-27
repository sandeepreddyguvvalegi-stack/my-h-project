import "./AddHostel.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function AddHostel() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: "",
    price: ""
  });

  const [floors, setFloors] = useState(0);
  const [rooms, setRooms] = useState({});

  /* ✅ NEW: beds per room */
  const [bedsPerRoom, setBedsPerRoom] = useState(4);

  /* ✅ NEW: custom beds for specific rooms */
  const [customBeds, setCustomBeds] = useState({});

  const [images, setImages] = useState({
    front: null,
    adminBlock: null,
    corridor: null,
    room: null,
    dining: null,
    washroom: null
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFloorsChange = (e) => {
    const value = Number(e.target.value);
    setFloors(value);

    let newRooms = {};
    for (let i = 1; i <= value; i++) {
      newRooms[i] = "";
    }
    setRooms(newRooms);
  };

  const handleRoomChange = (floor, value) => {
    setRooms({
      ...rooms,
      [floor]: value
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;

    setImages({
      ...images,
      [name]: files[0]
    });
  };

  /* ✅ GET BED COUNT FOR ROOM */
  const getBedsForRoom = (roomNo) => {
    return customBeds[roomNo] || bedsPerRoom;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* generate final structure */
    let structure = {};

    for (let f = 1; f <= floors; f++) {

      let floorRooms = [];

      const roomCount = Number(rooms[f] || 0);

      for (let r = 1; r <= roomCount; r++) {

        const roomNumber = `${f}0${r}`;

        const bedsCount = getBedsForRoom(roomNumber);

        let beds = [];

        for (let b = 1; b <= bedsCount; b++) {
          beds.push(`A${b}`);
        }

        floorRooms.push({
          roomNumber,
          beds
        });
      }

      structure[f] = floorRooms;
    }

    const hostelData = {
      ...form,
      floors,
      rooms,
      bedsPerRoom,
      customBeds,
      structure,
      images
    };

    console.log("FINAL HOSTEL DATA:", hostelData);

    alert("Hostel Added Successfully!");
  };

  return (
    <div className="add-hostel-container">

      {/* BACK */}
      <div
        className="back-btn"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
      </div>

      <h2>Add Hostel</h2>

      <form onSubmit={handleSubmit} className="form-box">

        {/* BASIC INFO */}
        <input
          name="name"
          placeholder="Hostel Name"
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Recommended Price"
          onChange={handleChange}
        />

        {/* FLOORS */}
        <input
          type="number"
          placeholder="Number of Floors"
          value={floors}
          onChange={handleFloorsChange}
        />

        {/* ROOMS PER FLOOR */}
        {Object.keys(rooms).map((floor) => (
          <div key={floor} className="floor-box">

            <label>Floor {floor} Rooms</label>

            <input
              type="number"
              value={rooms[floor]}
              onChange={(e) =>
                handleRoomChange(floor, e.target.value)
              }
            />

          </div>
        ))}

        {/* ✅ NEW: DEFAULT BEDS */}
        <div className="floor-box">

          <label>Beds Per Room (Default)</label>

          <input
            type="number"
            value={bedsPerRoom}
            onChange={(e) =>
              setBedsPerRoom(Number(e.target.value))
            }
          />

        </div>

        {/* ✅ CUSTOM BEDS */}
        <div className="floor-box">

          <label>Custom Beds (Optional per room)</label>

          <p style={{ fontSize: "12px", color: "#777" }}>
            Only change if some rooms are different
          </p>

          {Object.keys(rooms).map((floor) =>
            Number(rooms[floor] || 0) > 0 &&
            Array.from({ length: rooms[floor] }).map((_, i) => {

              const roomNo = `${floor}0${i + 1}`;

              return (
                <div key={roomNo} style={{ marginBottom: "10px" }}>

                  <label>{roomNo}</label>

                  <input
                    type="number"
                    placeholder={`Default: ${bedsPerRoom}`}
                    onChange={(e) =>
                      setCustomBeds({
                        ...customBeds,
                        [roomNo]: Number(e.target.value)
                      })
                    }
                  />

                </div>
              );
            })
          )}

        </div>

        {/* IMAGES */}
        <label>Front Hostel Photo</label>
        <input type="file" name="front" onChange={handleImageChange} />

        <label>Admin Block Photo</label>
        <input type="file" name="adminBlock" onChange={handleImageChange} />

        <label>Corridor Photo</label>
        <input type="file" name="corridor" onChange={handleImageChange} />

        <label>Inside Room Photo</label>
        <input type="file" name="room" onChange={handleImageChange} />

        <label>Dining Hall Photo</label>
        <input type="file" name="dining" onChange={handleImageChange} />

        <label>Washroom Photo</label>
        <input type="file" name="washroom" onChange={handleImageChange} />

        <button type="submit">
          Add Hostel
        </button>

      </form>

    </div>
  );
}

export default AddHostel;