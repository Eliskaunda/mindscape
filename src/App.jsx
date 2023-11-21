import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Homepage from "./Pages/Homepage";
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
import Patients from "./features/patients/Patients";
import Signup from "./features/users/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./features/users/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<User />} /> */}
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Homepage />} />
            <Route path="/chats" element={<Chat />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="patients" element={<Patients />} />
            <Route path="/resources" element={<ResourceLayout />}>
              <Route
                index
                element={<Navigate replace to="/resources/documents" />}
              />
              <Route path="/resources/all" element={<AllResources />} />
              <Route path="/resources/documents" element={<Documents />} />
              <Route path="/resources/videos" element={<Videos />} />
              <Route path="/resources/audios" element={<Audio />} />
            </Route>
          </Route>
        </Routes>
        <Toaster
          position="bottom-left"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 12px",
              backgroundColor: "var(--color-grey)",
              color: "var(--color-black)",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
