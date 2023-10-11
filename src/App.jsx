import { Route, Routes } from "react-router-dom";
import Collab from "./Pages/Collab";
import Profile from "./Pages/Profile/Profile";
import Header from "./Components/Shared/Header/Header";
import CollabStatus from "./Pages/CollabStatus/CollabStatus";
import CollabStatusDs from "./Pages/CollabStatusDs/CollabStatusDs";
import CollabStatusCs from "./Pages/CollabStatusCs/CollabStatusCs";
import CollabCompleted from "./Pages/CollabCompleted/CollabCompleted";

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      <Routes>
        <Route path="/collab" element={<Collab />} />
        <Route path="/" element={<Profile />} />
        <Route path="/collabstatus" element={<CollabStatus/>} />
        <Route path="/collabstatusds" element={<CollabStatusDs/>} />
        <Route path="/collabstatuscs" element={<CollabStatusCs/>} />
        <Route path="/collabcompleted" element={<CollabCompleted/>} />
      </Routes>
    </div>
  );
}

export default App;
