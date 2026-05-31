import "./HostelPricing.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPercent, FaRupeeSign } from "react-icons/fa";

function HostelPricing() {

  const navigate = useNavigate();

  const [pricing, setPricing] = useState({
    dailyPrice: "",
    monthlyPrice: "",
    yearlyPrice: "",
    hasDiscount: false,
    discount: ""
  });

  const handleChange = (e) => {
    setPricing({
      ...pricing,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "hostelPricing",
      JSON.stringify(pricing)
    );

    navigate("/hostel-final-review");
  };

  return (
    <div className="pricingPage">

      <div
        className="backBtn"
        onClick={() => navigate("/add-hostel")}
      >
        <FaArrowLeft />
      </div>

      <div className="pricingContainer">

        <h1>💰 Hostel Pricing</h1>

        <p className="subtitle">
          Set pricing plans for your hostel
        </p>

        <form onSubmit={handleSubmit}>

          <div className="inputCard">
            <label>
              <FaRupeeSign />
              Price Per Day
            </label>

            <input
              type="number"
              name="dailyPrice"
              placeholder="Example: 250"
              required
              onChange={handleChange}
            />
          </div>

          <div className="inputCard">
            <label>
              <FaRupeeSign />
              Price Per Month
            </label>

            <input
              type="number"
              name="monthlyPrice"
              placeholder="Example: 6000"
              required
              onChange={handleChange}
            />
          </div>

          <div className="inputCard">
            <label>
              <FaRupeeSign />
              Price Per Year
            </label>

            <input
              type="number"
              name="yearlyPrice"
              placeholder="Example: 70000"
              required
              onChange={handleChange}
            />
          </div>

          <div className="discountBox">

            <h3>
              <FaPercent />
              Offer Discount?
            </h3>

            <div className="discountBtns">

              <button
                type="button"
                className={
                  !pricing.hasDiscount
                    ? "activeChoice"
                    : ""
                }
                onClick={() =>
                  setPricing({
                    ...pricing,
                    hasDiscount: false,
                    discount: ""
                  })
                }
              >
                No
              </button>

              <button
                type="button"
                className={
                  pricing.hasDiscount
                    ? "activeChoice"
                    : ""
                }
                onClick={() =>
                  setPricing({
                    ...pricing,
                    hasDiscount: true
                  })
                }
              >
                Yes
              </button>

            </div>

            {pricing.hasDiscount && (
              <input
                type="number"
                name="discount"
                placeholder="Discount %"
                onChange={handleChange}
              />
            )}

          </div>

          <div className="previewCard">

            <h3>Pricing Preview</h3>

            <p>
              Day : ₹{pricing.dailyPrice || 0}
            </p>

            <p>
              Month : ₹{pricing.monthlyPrice || 0}
            </p>

            <p>
              Year : ₹{pricing.yearlyPrice || 0}
            </p>

            {pricing.hasDiscount && (
              <p className="discountText">
                Discount :
                {" "}
                {pricing.discount || 0}%
              </p>
            )}

          </div>

          <button
            className="continueBtn"
            type="submit"
          >
            Continue →
          </button>

        </form>

      </div>

    </div>
  );
}

export default HostelPricing;