import { Outlet } from "react-router-dom";
import ResourcesBar from "./ResourcesBar";

export default function ResourceLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 h-screen">
      <ResourcesBar />
      <section className="py-2">
        <Outlet />
      </section>
    </div>
  );
}
