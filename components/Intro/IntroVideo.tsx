import React from "react";

export const IntroVideo = () => {
  return (
    <div className="absolute w-screen h-screen overflow-hidden flex justify-center items-center z-20 before:bg-nightcord-110 before:bg-opacity-80 before:content-[''] before:absolute before:w-full before:h-full">
      <video
        src="./aishite.mp4"
        muted
        autoPlay
        loop
        className={`w-full h-full object-cover`}
      ></video>
    </div>
  );
};
