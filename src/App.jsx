import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./features/Home/Homepage";
import AppLayout from "./ui/AppLayout";
import Chat from "./features/chat/Chat";
import Resources from "./features/Resources/Resources";
import Profile from "./features/users/Profile";

function App() {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(!showNav);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage handleShowNav={handleShowNav} showNav={showNav} />}
        />
        <Route
          path="/app"
          element={
            <AppLayout showNav={showNav} handleShowNav={handleShowNav} />
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route
            path="/app/chat"
            element={<Chat showNav={showNav} handleShowNav={handleShowNav} />}
          />
          <Route path="/app/profile" element={<Profile />} />
          <Route path="/app/resource" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
