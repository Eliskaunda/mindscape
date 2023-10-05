import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AppLayout from "./ui/AppLayout";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import Appointments from "./Pages/Appointments";
import Notifications from "./Pages/Notifications";
import PageNotFound from "./Pages/PageNotFound";
import ResourceLayout from "./features/Resources/ResourceLayout";
import AllResources from "./features/Resources/AllResources";
import Documents from "./features/Resources/Documents";
import Videos from "./features/Resources/Videos";
import Audio from "./features/Resources/Audio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Homepage />} />
          <Route path="/chats" element={<Chat />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="/resources" element={<ResourceLayout />}>
            <Route index element={<Navigate replace to="/resources/all" />} />
            <Route path="/resources/all" element={<AllResources />} />
            <Route path="/resources/documents" element={<Documents />} />
            <Route path="/resources/videos" element={<Videos />} />
            <Route path="/resources/audios" element={<Audio />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
