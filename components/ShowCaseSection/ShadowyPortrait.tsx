import React from "react";
import { useShowCaseStore } from "../../app/store";
import { useBackDropStore } from "../../app/store";

interface IShadowyPortrait {
  //   data: object; // add an interface for this
  src: string;
}

export const ShadowyPortrait: React.FC<IShadowyPortrait> = (
  props: IShadowyPortrait
) => {
  const closeShowCase = useShowCaseStore((state) => state.close);
  const openBackDrop = useBackDropStore((state) => state.open);

  const handleClick = () => {
    closeShowCase();
    openBackDrop();
    // add func here to change char info state for showing details
  };

  return (
    <div
      className="flex justify-center items-center w-full h-full overflow-hidden"
      onClick={handleClick}
    >
      <div className="relative w-full h-full group">
        <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
          <img
            className="w-full h-auto transition-all duration-500 group-hover:scale-105"
            src={props.src}
          ></img>
        </div>
      </div>
    </div>
  );
};
