import { Outlet } from "react-router-dom";
import ResourcesBar from "./ResourcesBar";

export default function ResourceLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 h-full">
      <ResourcesBar />
      <section className="py-8">
        <Outlet />
      </section>
    </div>
  );
}
