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
  const [bedsPerRoom, setBedsPerRoom] = useState(4);
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

  const getBedsForRoom = (roomNo) => {
    return customBeds[roomNo] || bedsPerRoom;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    let totalRooms = 0;

    Object.values(rooms).forEach((r) => {
      totalRooms += Number(r);
    });

    let totalBeds = 0;

    for (let f = 1; f <= floors; f++) {

      const roomCount = Number(
        rooms[f] || 0
      );

      for (
        let r = 1;
        r <= roomCount;
        r++
      ) {

        const roomNo =
          `${f}0${r}`;

        totalBeds +=
          getBedsForRoom(roomNo);
      }
    }

    const hostelData = {
      ...form,
      floors,
      rooms,
      totalRooms,
      totalBeds,
      customBeds
    };

    localStorage.setItem(
      "hostelStructure",
      JSON.stringify(hostelData)
    );

    navigate("/hostel-pricing");
  };

  return (

    <div className="add-hostel-container">

      <div
        className="back-btn"
        onClick={() =>
          navigate("/food-timetable")
        }
      >
        <FaArrowLeft />
      </div>

      <h2>
        Add Hostel
      </h2>

      <form
        onSubmit={handleSubmit}
        className="form-box"
      >

        {/* BASIC INFO */}

        <input
          name="name"
          placeholder="Hostel Name"
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
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
          required
        />

        {/* ROOMS */}

        {Object.keys(rooms).map(
          (floor) => (

            <div
              key={floor}
              className="floor-box"
            >

              <label>
                Floor {floor} Rooms
              </label>

              <input
                type="number"
                value={rooms[floor]}
                onChange={(e) =>
                  handleRoomChange(
                    floor,
                    e.target.value
                  )
                }
                required
              />

            </div>

          )
        )}

        {/* BEDS */}

        <div className="floor-box">

          <label>
            Beds Per Room
          </label>

          <input
            type="number"
            value={bedsPerRoom}
            onChange={(e) =>
              setBedsPerRoom(
                Number(e.target.value)
              )
            }
          />

        </div>

        {/* CUSTOM BEDS */}

        <div className="floor-box">

          <label>
            Custom Beds (Optional)
          </label>

          {Object.keys(rooms).map(
            (floor) =>

              Number(
                rooms[floor] || 0
              ) > 0 &&

              Array.from({
                length:
                  rooms[floor]
              }).map((_, i) => {

                const roomNo =
                  `${floor}0${i + 1}`;

                return (

                  <div key={roomNo}>

                    <label>
                      {roomNo}
                    </label>

                    <input
                      type="number"
                      placeholder={`Default: ${bedsPerRoom}`}
                      onChange={(e) =>
                        setCustomBeds({
                          ...customBeds,
                          [roomNo]:
                            Number(
                              e.target.value
                            )
                        })
                      }
                    />

                  </div>

                );

              })
          )}

        </div>

        {/* IMAGES */}

        <label>
          Front Photo
        </label>

        <input
          type="file"
          name="front"
          onChange={handleImageChange}
        />

        <label>
          Admin Block Photo
        </label>

        <input
          type="file"
          name="adminBlock"
          onChange={handleImageChange}
        />

        <label>
          Corridor Photo
        </label>

        <input
          type="file"
          name="corridor"
          onChange={handleImageChange}
        />

        <label>
          Room Photo
        </label>

        <input
          type="file"
          name="room"
          onChange={handleImageChange}
        />

        <label>
          Dining Photo
        </label>

        <input
          type="file"
          name="dining"
          onChange={handleImageChange}
        />

        <label>
          Washroom Photo
        </label>

        <input
          type="file"
          name="washroom"
          onChange={handleImageChange}
        />

        <button type="submit">
          Continue →
        </button>

      </form>

    </div>
  );
}

export default AddHostel;