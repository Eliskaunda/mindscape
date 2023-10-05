import { AspectRatio, FileEarmarkText, Film, Mic } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
function ResourcesBar() {
  return (
    <div className="px-6 py-2 bg-white h-full">
      <nav className="flex flex-col gap-6">
        <NavLink
          to="/resources/all"
          className="flex items-center gap-2 text-black"
        >
          <AspectRatio style={{ color: "#f28e1e", width: 30 }} />
          <span>All Resources</span>
        </NavLink>

        <NavLink
          to="/resources/documents"
          className="flex items-center gap-2 text-black"
        >
          <FileEarmarkText style={{ color: "#f28e1e", width: 30 }} />
          <span>Documents</span>
        </NavLink>
        <NavLink
          to="/resources/videos"
          className="flex items-center gap-2 text-black"
        >
          <Film style={{ color: "#f28e1e", width: 30 }} />
          <span>Videos</span>
        </NavLink>
        <NavLink
          to="/resources/audios"
          className="flex items-center gap-2 text-black"
        >
          <Mic style={{ color: "#f28e1e", width: 30 }} />
          <span>Audio</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default ResourcesBar;
