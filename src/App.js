import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ProfileDetail from "./ProfileDetail";
import CreateProfile from "./CreateProfile";
import ProfileUpdate from "./ProfileUpdate";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<ProfileDetail />} />
        <Route path="create" element={<CreateProfile />} />
        <Route path="update/:id" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
}

export default App;
