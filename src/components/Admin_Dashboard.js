import "../Styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <div>
          <h1>RestoCabana</h1>
          <span>Administration Panel</span>
        </div>

        <button className="admin-logout">Logout</button>
      </header>

      {/* METRICS */}
      <section className="admin-metrics">
        <div className="metric-card">
          <p className="metric-label">Active Reservations</p>
          <h2>1</h2>
          <span className="metric-note">Today</span>
        </div>

        <div className="metric-card">
          <p className="metric-label">Tables Available</p>
          <h2>12 / 20</h2>
          <span className="metric-note">Live capacity</span>
        </div>

        <div className="metric-card">
          <p className="metric-label">Registered Customers</p>
          <h2>85</h2>
          <span className="metric-note">Total users</span>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="admin-grid">
        {/* MENU MANAGEMENT */}
        <div className="admin-card">
          <h3>Menu Management</h3>

          <div className="menu-row">
            <span>Classic Burger</span>
            <span>₹420</span>
          </div>

          <div className="menu-row">
            <span>Garlic Bread</span>
            <span>₹180</span>
          </div>

          <button className="admin-action">Add Menu Item</button>
        </div>

        {/* RESTAURANT INFO */}
        <div className="admin-card">
          <h3>Restaurant Information</h3>

          <p><strong>Address:</strong> 123 Foodie Lane, Bangalore</p>
          <p><strong>Contact:</strong> +91 98765 43210</p>

          <button className="admin-outline">Edit Details</button>
        </div>
      </section>

      {/* LIVE RESERVATIONS */}
      <section className="admin-card admin-table">
        <h3>Live Reservations</h3>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Aazim Rahman</td>
              <td>2026-01-12</td>
              <td>19:30</td>
              <td>4</td>
              <td className="table-actions">
                <button className="confirm">Confirm</button>
                <button className="cancel">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
