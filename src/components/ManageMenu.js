import React, { useState } from 'react';

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "", description: "", price: "", image: null, category: "Main Course"
  });

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenuItems([...menuItems, { ...formData, id: Date.now() }]);
    setFormData({ name: "", description: "", price: "", image: null, category: "Main Course" });
    alert("Item added successfully to the menu!");
  };

  return (
    <div className="container-fluid bg-dark text-white" style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <div className="container">
        <h2 className="text-success mb-4">Detailed Menu Management [RS6]</h2>
        <div className="row">
          {/* Form Column */}
          <div className="col-md-5 mb-4">
            <form className="p-4 border border-secondary rounded bg-dark shadow" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Dish Name</label>
                <input type="text" className="form-control bg-dark text-white border-secondary" required
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control bg-dark text-white border-secondary" rows="3"
                  value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Price ($)</label>
                <input type="number" className="form-control bg-dark text-white border-secondary" required
                  value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Dish Image</label>
                <input type="file" className="form-control bg-dark text-white border-secondary" accept="image/*"
                  onChange={handleImageChange} required />
              </div>
              <button type="submit" className="btn btn-success w-100">Add to Menu</button>
            </form>
          </div>

          {/* Preview Column */}
          <div className="col-md-7">
            <h5>Live Preview [RS2]</h5>
            <div className="row">
              {menuItems.map(item => (
                <div key={item.id} className="col-md-6 mb-3">
                  <div className="card bg-dark border-secondary text-white h-100">
                    {item.image && <img src={item.image} className="card-img-top" alt={item.name} style={{height: '150px', objectFit: 'cover'}} />}
                    <div className="card-body">
                      <h6>{item.name} <span className="float-end text-success">${item.price}</span></h6>
                      <p className="small text-muted">{item.description}</p>
                      <button className="btn btn-outline-danger btn-sm w-100" onClick={() => setMenuItems(menuItems.filter(i => i.id !== item.id))}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMenu;