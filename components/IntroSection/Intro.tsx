import React from "react";
import { useSliderStore } from "../../app/store";

export const Intro = () => {
  const setIndex = useSliderStore((state) => state.setIndex);

  const handleReadMore = () => {
    setIndex(1);
  };

  return (
    <div className="absolute w-full h-full bg-nightcord-110 bg-opacity-90 z-30 flex justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center max-w-[288px] sm:max-w-[384px] md:max-w-[496px]">
        <div className="">
          <div className="font-proxima font-bold text-nightcord-70 fluid-font-val fluid-font name-font-val">
            NIGHTCORD @25:00
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
            <div className="text-nightcord-110 shadow-md font-proxima font-normal pt-3 pb-2 px-4 fluid-font readbtn-font-val group-hover:text-nightcord-70 transition duration-500">
              READ MORE
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
