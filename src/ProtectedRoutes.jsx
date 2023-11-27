import { Navigate, Route } from "react-router-dom";
import Updatedetails from "./users/Updatedetails";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import Notifications from "./Pages/Notifications";
import Appointments from "./Pages/Appointments";
import Patients from "./features/patients/Patients";
import ResourceLayout from "./features/Resources/ResourceLayout";
import AllResources from "./features/Resources/AllResources";
import Documents from "./features/Resources/Documents";
import Videos from "./features/Resources/Videos";
import Audio from "./features/Resources/Audio";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function ProtectedRoutes({ session, supabase }) {
  if (!session) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Route path="/update" element={<Updatedetails />} />
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
      </>
    );
  }
}

export default ProtectedRoutes;
