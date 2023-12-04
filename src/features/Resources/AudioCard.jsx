import { useState } from "react";
import { Pause, Play } from "react-bootstrap-icons";
import ReactPlayer from "react-player";
// import aud from "./audio.mp3";

export function AudioCard() {
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(!playing);
  }
  return (
    // <div className="flex items-center justify-between w-full md:w-1/2 py-6 px-4">
    <div
      className={`${
        playing
          ? "shadow-lg shadow-orange transition-all duration-300 flex items-center justify-between w-full md:w-1/2 py-6 px-4"
          : " transition-all duration-300 flex items-center justify-between w-full md:w-1/2 py-6 px-4"
      }`}
    >
      <p>01</p>
      <img src="/headphone.jpg" alt="" className="w-16 h-16 rounded-md" />

      <div className="">
        <h2>Mind at peace</h2>
        <p className="text-black font-light text-sm">
          Shared by: <span>Allison</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p>03:28</p>
        <ReactPlayer
          url="/kae.mpeg"
          playing={playing}
          width="100%"
          height="100%"
        />
        {playing ? (
          <Pause
            style={{ fontSize: "2rem", color: "#383634" }}
            onClick={handlePlay}
          />
        ) : (
          <Play
            style={{ fontSize: "1.6rem", color: "#383634" }}
            onClick={handlePlay}
          />
        )}
      </div>
    </div>
  );
}
