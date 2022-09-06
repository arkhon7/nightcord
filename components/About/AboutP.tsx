import React from "react";
import { useSliderStore } from "../../app/store";

export const AboutP = () => {
  const setIndex = useSliderStore((state) => state.setIndex);
  const doneFirst = useSliderStore((state) => state.doneFirst);
  // TODO ADD FADE IN ANIMATION

  return (
    <div className="flex h-full w-full justify-center md:items-center md:justify-start">
      <div className="min-w-[360px] max-w-[496px] p-5">
        <div className="flex flex-col items-center gap-[3vh]">
          <img
            src="/favicon-310.png"
            width={"10%"}
            height={"10%"}
            className={`${
              doneFirst
                ? "animate-[fade-in_500ms_ease-in-out_both_1000ms]"
                : "opacity-0"
            }`}
          ></img>

          <div
            className={`fluid-font about-font-val text-center font-proxima font-normal tracking-widest text-nightcord-70 ${
              doneFirst
                ? "animate-[fade-in_500ms_ease-in-out_both_1100ms]"
                : "opacity-0"
            }`}
          >
            <q>
              An underground music circle that makes songs on the internet at
              1:00 AM.
            </q>
          </div>
          <div
            className={`relative flex items-center after:absolute after:right-[10%] 
            after:h-[15px] after:w-[15px] after:bg-nightcord-30 after:transition 
            after:duration-500 after:content-[''] after:clip-triangle after:hover:translate-x-[5px] ${
              doneFirst
                ? "animate-[fade-in_500ms_ease-in-out_both_1200ms]"
                : "opacity-0"
            }`}
          >
            <button
              className="border-2 border-nightcord-30 px-12 py-2"
              onClick={() => setIndex(2)}
            >
              <a className="fluid-font readbtn-font-val font-proxima font-thin tracking-widest text-nightcord-70">
                Our Talents
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
