import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useSliderStore } from "../../app/store";

export const AboutVideo = () => {
  const index = useSliderStore((state) => state.index);

  return (
    <div
      className={`flex h-full w-full items-end justify-center md:items-center md:justify-end`}
    >
      <div className="min-w-[360px] max-w-[496px] p-5 md:max-w-[640px]">
        <div className="relative h-full w-full">
          <div className="group relative z-20 h-full w-full overflow-hidden">
            <video
              src="/assets/vid/aishite.mp4"
              autoPlay
              loop
              muted
              className="transition duration-500 group-hover:scale-110"
            ></video>
            <BsPlayCircleFill className="absolute left-[50%] top-[50%] h-[20%] w-[20%] translate-x-[-50%] translate-y-[-50%] text-nightcord-30 opacity-0 transition duration-500 group-hover:opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};
