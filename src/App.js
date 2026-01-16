import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; 

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookTable from "./components/BookTable";
import NearbyRestaurants from "./components/NearbyRestaurants";
import Admin_Dashboard from "./components/Admin_Dashboard";
import ManageMenu from "./components/ManageMenu";
import MenuExperience from "./components/MenuExperience";
import StartersMenu from "./components/StartersMenu";
import MainCourseMenu from "./components/MainCourseMenu";
import SeafoodMenu from "./components/SeafoodMenu";
import DessertsMenu from "./components/DessertsMenu";
import Delivery from "./components/Delivery";
import Checkout from "./components/Checkout";
import PlaceOrder from "./components/PlaceOrder";
import OrderSuccess from "./components/OrderSuccess";
import Locations from "./components/Locations";
import Login from "./components/Login"; // Ensure this is imported here

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar user={user} setShowLogin={setShowLogin} /> 

      <Routes>
        <Route 
          path="/" 
          element={<Home user={user} setShowLogin={setShowLogin} />} 
        />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/nearby" element={<NearbyRestaurants />} />
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        <Route path="/admin/manage-menu" element={<ManageMenu />} />
        <Route path="/view-menus" element={<MenuExperience />} />
        <Route path="/menu/starters" element={<StartersMenu />} />
        <Route path="/menu/mains" element={<MainCourseMenu />} />
        <Route path="/menu/seafood" element={<SeafoodMenu />} />
        <Route path="/menu/desserts" element={<DessertsMenu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/place-order" element={<PlaceOrder />} /> 
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      {/* Global Login Modal Trigger */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}
    </>
  );
}

export default App;