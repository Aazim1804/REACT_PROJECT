import React, { useState } from "react";
import "../Styles/BookTable.css";

const BookTable = () => {
  const [guests, setGuests] = useState(2);
  const [location, setLocation] = useState("");

  return (
    <div className="booking-page">
      {/* LEFT — EXPERIENCE */}
      <section className="booking-experience">
        <span className="booking-eyebrow">RestoCabana</span>

        <h1 className="booking-title">
          Reserve <br /> Your Table
        </h1>

        <p className="booking-intro">
          An intimate dining experience curated with precision,
          elegance, and attention to every detail.
        </p>

        <div className="booking-notes">
          <p>• Fine dining · Curated menus · Signature hospitality</p>
          <p>• Smart casual dress code</p>
          <p>• Reservations recommended</p>
        </div>
      </section>

      {/* CENTER — FORM */}
      <section className="booking-form-wrap">
        <form className="booking-form">
          <h2 className="form-title">Reservation Details</h2>

          {/* LOCATION */}
          <div className="form-group">
            <label>Select Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Choose a RestoCabana location</option>
              <option value="downtown">RestoCabana – Downtown</option>
              <option value="beachside">RestoCabana – Beachside</option>
              <option value="uptown">RestoCabana – Uptown</option>
              <option value="heritage">RestoCabana – Heritage Square</option>
            </select>
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" />
            </div>
          </div>

          <div className="form-group">
            <label>Guests</label>
            <div className="guest-control">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >
                −
              </button>
              <span>{guests}</span>
              <button
                type="button"
                onClick={() => setGuests(guests + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Occasion (optional)</label>
            <input type="text" placeholder="Birthday, Anniversary…" />
          </div>

          <div className="form-group">
            <label>Special Requests</label>
            <textarea placeholder="Dietary needs, seating preferences…" />
          </div>

          <button className="booking-submit">
            Confirm Reservation
          </button>
        </form>
      </section>

      {/* RIGHT — ATMOSPHERE */}
      <section className="booking-visual">
        <div className="booking-visual-overlay" />
        <div className="booking-visual-text">
          <p>
            Evenings at RestoCabana are defined by warm light,
            thoughtful service, and dishes crafted to be remembered.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookTable;
