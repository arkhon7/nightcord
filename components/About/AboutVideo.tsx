import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useSliderStore } from "../../app/store";

export const AboutVideo = () => {
  const doneFirst = useSliderStore((state) => state.doneFirst);

  return (
    <div
      className={`flex h-full w-full items-end justify-center 
      md:items-center md:justify-end`}
    >
      <div className="min-w-[360px] max-w-[496px] p-5 md:max-w-[640px]">
        <div
          className="relative h-full w-full before:absolute before:top-[-10px] before:right-[-10px] 
      before:z-20 before:h-[20%] before:w-[20%] before:border-t-4 before:border-r-4 before:border-nightcord-30 
      before:content-[''] after:absolute after:bottom-[-10px] after:left-[-10px] after:-z-20 after:h-[20%] after:w-[20%] 
      after:border-b-4 after:border-l-4 after:border-nightcord-30 after:content-['']"
        >
          <div
            className={`group relative z-20 h-full w-full overflow-hidden ${
              doneFirst
                ? "animate-[fade-in_500ms_both_1000ms_ease-in-out]"
                : "opacity-0"
            }`}
          >
            <video
              src="/assets/vid/aishite.mp4"
              autoPlay
              loop
              muted
              className="transition duration-500 group-hover:scale-110"
            ></video>
            <BsPlayCircleFill
              className="absolute left-[50%] top-[50%] h-[20%] w-[20%] translate-x-[-50%] translate-y-[-50%]
             text-nightcord-30 opacity-0 transition duration-500 group-hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
