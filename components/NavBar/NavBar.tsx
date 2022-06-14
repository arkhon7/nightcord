import React from "react";
import { useSliderStore } from "../../app/store";

export const NavBar = () => {
  const setIndex = useSliderStore((state) => state.setIndex);

  return (
    <nav className="group invisible md:visible absolute flex justify-center items-center z-30 w-full p-2">
      {/* <div className="flex items-center w-[120px] h-full">
        <div className="w-[20px] h-[20px] rhombus-clip bg-nightcord-30 mr-2"></div>
        <div className="font-nav text-sm text-center flex justify-center items-center sm:text-lg">
          NIGHTCORD
        </div>
      </div> */}

      <a
        onClick={() => setIndex(1)}
        className="font-nav text-sm px-5  text-nightcord-110 group-hover:text-nightcord-30"
      >
        About
      </a>
      <a
        onClick={() => setIndex(2)}
        className="font-nav text-sm px-5  text-nightcord-110 group-hover:text-nightcord-30"
      >
        Talents
      </a>
      <a
        onClick={() => setIndex(3)}
        className="font-nav text-sm px-5  text-nightcord-110 group-hover:text-nightcord-30"
      >
        Uploads
      </a>
      <a
        onClick={() => setIndex(4)}
        className="font-nav text-sm px-5  text-nightcord-110 group-hover:text-nightcord-30"
      >
        Credits
      </a>
    </nav>
  );
};
