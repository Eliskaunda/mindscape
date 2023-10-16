import { FileEarmarkText, Film, Mic } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
function ResourcesBar() {
  return (
    <div className="px-6 py-2 bg-grey h-full min-w-max">
      <nav className="flex flex-col gap-6 transition-all duration-300">
        <NavLink
          to="/resources/documents"
          className="flex items-center gap-2 text-black font-medium"
        >
          <FileEarmarkText style={{ color: "#63aaa9", width: 30 }} />
          <span className="hidden md:block">Documents</span>
        </NavLink>
        <NavLink
          to="/resources/videos"
          className="flex items-center gap-2 text-black font-medium"
        >
          <Film style={{ color: "#63aaa9", width: 30 }} />
          <span className="hidden md:block">Videos</span>
        </NavLink>
        <NavLink
          to="/resources/audios"
          className="flex items-center gap-2 text-black font-medium"
        >
          <Mic style={{ color: "#63aaa9", width: 30 }} />
          <span className="hidden md:block">Audio</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default ResourcesBar;
