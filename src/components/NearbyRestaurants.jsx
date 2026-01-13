import { useState } from "react";
import restaurants from "../data/restaurants";
import "../Styles/NearbyRestaurants.css";


const NearbyRestaurants = () => {
  const [userCity, setUserCity] = useState("");
  const [results, setResults] = useState([]);

  const findRestaurants = () => {
    const filtered = restaurants.filter(
      (r) => r.city === userCity
    );
    setResults(filtered);
  };

  return (
    <div className="nearby-container">
      <div className="nearby-overlay" />

      <div className="nearby-content">
        <div className="header text-center">
          <h2>Find Nearest Restaurants</h2>
          <p>Discover great food places near you</p>
        </div>

        <div className="search-card">
          <select
            className="form-select mb-3"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
          >
            <option value="">Select your city</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>

          <button
            className="btn btn-success w-100"
            onClick={findRestaurants}
            disabled={!userCity}
          >
            Find Nearest Restaurants
          </button>
        </div>

        {results.length === 0 && userCity && (
          <p className="no-results">
            No restaurants found in your city.
          </p>
        )}

        <div className="results">
          {results.map((r, index) => (
            <div
              key={r.id}
              className="result-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h5>{r.name}</h5>
              <p>{r.address}</p>
              <span>{r.city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyRestaurants;
