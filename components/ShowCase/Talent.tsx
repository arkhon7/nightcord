import { BsMicFill } from "react-icons/bs";

import React from "react";

export const Talent = () => {
  return (
    <div>
      <div className="absolute left-[50%] top-[50%] z-20 w-[50vw] min-w-[300px] max-w-[500px] translate-x-[-50%] translate-y-[-50%]">
        <img src="./assets/image/mizuki-full.png" />
      </div>

      <div className="pointer-events-auto absolute left-[50%] top-[50%] z-10 h-[45%] w-[calc((80vw*0.5625)-(80vw*0.0625))] min-w-[360px] translate-y-[-50%] text-nightcord-70 lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))]">
        <div
          className={`overflow-hidden ${
            targetId === "mizuki"
              ? "animate-[expand_300ms_ease-in-out_both_500ms]"
              : "animate-[shrink_500ms_ease-in-out_both]"
          } h-full`}
        >
          <div className="relative h-full w-full">
            <div className="absolute z-20 flex h-[25%] w-[60%] items-center justify-end bg-nightcord-30">
              <h1 className="fluid-font-md px-[2vw] font-brandon tracking-widest text-nightcord-70">
                MV CREATOR
              </h1>
            </div>
            <div className="absolute bottom-0 z-10 flex h-[87.5%] w-full flex-col items-end justify-evenly bg-nightcord-110 p-[2vw] opacity-[.95]">
              <div className="flex w-[80%] justify-between">
                <div className="flex items-center gap-2">
                  <BsMicFill onPlay={() => play()} />

                  <h3 className="fluid-font-xs font-proxima">Satou Hinata</h3>
                </div>

                <h3 className="fluid-font-md font-brandon tracking-widest">
                  AKIYAMA MIZUKI
                </h3>
              </div>

              <p className="fluid-font-xs w-[80%] font-proxima tracking-wide opacity-70">
                Akiyama Mizuki is a first year student at Kamiyama High School.
                They're the animator of the underground music circle 25-ji,
                Nightcord de. — also known as Niigo (N25) — going by the alias
                "Amia".
              </p>
            </div>
            <button
              className="absolute right-0 top-0 h-[calc(((60vh*0.45)*0.875)*0.125)] w-[calc(((60vh*0.45)*0.875)*0.125)]"
              onClick={() => setTargetId("")}
            >
              <VscClose className="h-full w-full text-nightcord-30" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// REFACTOR THIS
