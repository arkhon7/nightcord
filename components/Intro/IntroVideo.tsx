import React from "react";

export const IntroVideo = () => {
  return (
    <div className="absolute z-20 flex h-screen w-screen items-center justify-center overflow-hidden before:absolute before:h-full before:w-full before:bg-nightcord-110 before:bg-opacity-80 before:content-['']">
      <video
        src="./assets/vid/aishite.mp4"
        muted
        autoPlay
        loop
        className={`h-full w-full object-cover`}
      ></video>
    </div>
  );
};
