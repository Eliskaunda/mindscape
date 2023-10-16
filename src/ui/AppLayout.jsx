import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
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
