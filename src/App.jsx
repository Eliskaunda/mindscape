import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AppLayout from "./ui/AppLayout";
import Chat from "./Pages/Chat";
import Resources from "./Pages/Resources";
import Profile from "./Pages/Profile";
import Appointments from "./Pages/Appointments";
import Notifications from "./Pages/Notifications";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Homepage />} />
          <Route path="/chats" element={<Chat />} />
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
