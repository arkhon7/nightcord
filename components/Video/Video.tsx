import React from "react";
import { useSliderStore } from "../../app/store";

export const Video = () => {
  const index = useSliderStore((state) => state.index);

  return (
    <div className="absolute w-screen h-screen overflow-hidden flex justify-center items-center z-20">
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
