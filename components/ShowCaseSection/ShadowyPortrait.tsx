import React from "react";
import { useShowCaseStore } from "../../app/store";
import { useCharInfoStore } from "../../app/store";
import { useSliderStore } from "../../app/store";

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
  // const index = useSliderStore((state) => state.index);

  const handleClick = () => {
    closeShowCase();
    openCharInfo();
    // add func here to change char info state for showing details
  };

  return (
    <div className={`w-full h-full overflow-hidden`} onClick={handleClick}>
      <div className="relative w-full h-full group char-box-shadow">
        <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
          <img
            className="w-full h-auto transition duration-500 group-hover:scale-105 group-hover:blur-none group-hover:opacity-100 opacity-80 drop-shadow-30"
            src={props.src}
          ></img>
        </div>
      </div>
    </div>
  );
};
