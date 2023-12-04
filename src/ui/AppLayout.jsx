import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import supabase from "./../services/Supabase";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function AppLayout() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);
  // if (!session) {
  //   return (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <div>
  //         <Auth
  //           supabaseClient={supabase}
  //           appearance={{ theme: ThemeSupa }}
  //           providers={["google"]}
  //         />
  //       </div>
  //     </div>
  //   );
  // } else {

  return (
    <div className="w-full">
      <Header />

      <main className="min-h-full ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
