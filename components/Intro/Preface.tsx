import React from "react";
import { useSliderStore } from "../../app/store";

export const Preface = () => {
  const setIndex = useSliderStore((state) => state.setIndex);

  const handleReadMore = () => {
    setIndex(1);
  };
  return (
    <div className="absolute z-30 flex flex-col w-full justify-center items-center max-w-[288px] sm:max-w-[384px] md:max-w-[496px]">
      <div>
        <div className="font-proxima font-bold tracking-widest text-nightcord-70 fluid-font-val fluid-font name-font-val">
          NIGHTCORD AT 25:00
        </div>
        <div className="font-raleway break-normal font-bold text-nightcord-70 fluid-font cphrase-font-val">
          Elegance
        </div>
        <div className="font-raleway break-normal font-bold text-nightcord-70 fluid-font cphrase-font-val">
          through
        </div>
        <div className="font-raleway break-normal font-bold text-nightcord-30 fluid-font cphrase-font-val">
          Music
        </div>
        <button
          onClick={handleReadMore}
          className="bg-nightcord-70 bg-opacity-70 rounded-[25px] mt-5  group hover:bg-nightcord-30 transition duration-500"
        >
          <div className="text-nightcord-110 shadow-md font-proxima tracking-widest font-normal pt-3 pb-2 px-4 fluid-font readbtn-font-val group-hover:text-nightcord-70 transition duration-500">
            READ MORE
          </div>
        </button>
      </div>
    </div>
  );
};
