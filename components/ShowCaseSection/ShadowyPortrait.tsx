import React from "react";
import { useShowCaseStore } from "../../app/store";
import { useCharInfoStore } from "../../app/store";

import { Animate } from "../Animation";

interface IShadowyPortrait {
  //   data: object; // add an interface for this
  src: string;
}

export const ShadowyPortrait: React.FC<IShadowyPortrait> = (
  props: IShadowyPortrait
) => {
  const closeShowCase = useShowCaseStore((state) => state.close);
  const openCharInfo = useCharInfoStore((state) => state.open);

  const handleClick = () => {
    closeShowCase();
    openCharInfo();
    // add func here to change char info state for showing details
  };

  return (
    <div
      className="w-full h-full overflow-hidden bg-nightcord-110 border-nightcord-110 border-8"
      onClick={handleClick}
    >
      <div className="relative w-full h-full group char-box-shadow">
        <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden ">
          <img
            className="w-full h-auto transition duration-500 group-hover:scale-105 group-hover:blur-none"
            src={props.src}
          ></img>
          <div className="absolute w-40 h-40 clip-triangle-hole bg-nightcord-30 drop-shadow-30 top-0 left-52 -z-10"></div>
        </div>
      </div>
    </div>
  );
};
