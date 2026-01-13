import { Routes, Route } from "react-router-dom";
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





import "./App.css";



function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/nearby" element={<NearbyRestaurants />} />
        {/* RS5: Secure Admin Login leads here */}
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        <Route path="/admin/manage-menu" element={<ManageMenu />} />
        <Route path="/view-menus" element={<MenuExperience />} />
        <Route path="/menu/starters" element={<StartersMenu />} />
        <Route path="/menu/mains" element={<MainCourseMenu />} />
        <Route path="/menu/seafood" element={<SeafoodMenu />} />
        <Route path="/menu/desserts" element={<DessertsMenu />} />
        <Route path="/menu/desserts" element={<DessertsMenu />} />
      </Routes>
    </>
  );
}

export default App;