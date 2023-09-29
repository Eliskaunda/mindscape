import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AppLayout from "./ui/AppLayout";
import Chat from "./Pages/Chat";
import Resources from "./Pages/Resources";
import Profile from "./Pages/Profile";
import Appointments from "./Pages/Appointments";
import Notifications from "./Pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route element={<AppLayout />}>
          <Route path="/chat" element={<Chat />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="appointments" element={<Appointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
