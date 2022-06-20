import React from "react";
import { useSliderStore } from "../../app/store";

export const NavBar = () => {
  const setIndex = useSliderStore((state) => state.setIndex);
  const index = useSliderStore((state) => state.index);

  return (
    <div className="absolute z-[999] w-full flex justify-start invisible sm:visible">
      <nav className="flex mx-5 my-7">
        <a
          onClick={() => setIndex(1)}
          className={`transition duration-500 text-nightcord-70 font-proxima font-normal nav-btn-font-val fluid-font  ${
            index == 0 ? "opacity-50" : "opacity-0"
          }  hover:opacity-100 flex justify-center mx-[2vw] max-w-[150px]`}
        >
          <div className="nav-btn">about</div>
        </a>
        <a
          onClick={() => setIndex(2)}
          className={`transition duration-500 text-nightcord-70 font-proxima font-normal nav-btn-font-val fluid-font  ${
            index == 0 ? "opacity-50" : "opacity-0"
          }  hover:opacity-100 flex justify-center mx-[2vw] max-w-[150px]`}
        >
          <div className="nav-btn">talents</div>
        </a>
        <a
          onClick={() => setIndex(3)}
          className={`transition duration-500 text-nightcord-70 font-proxima font-normal nav-btn-font-val fluid-font  ${
            index == 0 ? "opacity-50" : "opacity-0"
          }  hover:opacity-100 flex justify-center mx-[2vw] max-w-[150px]`}
        >
          <div className="nav-btn">uploads</div>
        </a>
        <a
          onClick={() => setIndex(4)}
          className={`transition duration-500 text-nightcord-70 font-proxima font-normal nav-btn-font-val fluid-font  ${
            index == 0 ? "opacity-50" : "opacity-0"
          }  hover:opacity-100 flex justify-center mx-[2vw] max-w-[150px]`}
        >
          <div className="nav-btn">credits</div>
        </a>
      </nav>
    </div>
  );
};
