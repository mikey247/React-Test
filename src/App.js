import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ProfileDetail from "./ProfileDetail";
import CreateProfile from "./CreateProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/:id" element={<ProfileDetail />} />
        <Route path="create" element={<CreateProfile />} />
      </Routes>
    </>
  );
}

export default App;
