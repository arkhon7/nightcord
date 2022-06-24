import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
export const AboutVideo = () => {
  return (
    <div className="w-full h-full flex justify-center items-end md:justify-end md:items-center">
      <div className="min-w-[360px] max-w-[496px] p-5 md:max-w-[640px]">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full group overflow-hidden z-20">
            <video
              src="/aishite.mp4"
              autoPlay
              loop
              muted
              className="transition duration-500 group-hover:scale-110"
            ></video>
            <BsPlayCircleFill className="w-[20%] h-[20%] text-nightcord-30 transition duration-500 opacity-0 group-hover:opacity-70 absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
