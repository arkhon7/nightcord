import React from "react";
import { useSliderStore } from "../../app/store";

export const NavBar = () => {
  const setIndex = useSliderStore((state) => state.setIndex);

  return (
    <div className="invisible absolute z-[999] flex w-full justify-start sm:visible">
      <nav className="mx-5 my-7 flex">
        <a
          onClick={() => {
            setIndex(1);
          }}
          className={`nav-btn-font-val fluid-font mx-[2vw] flex max-w-[150px] justify-center font-proxima font-normal text-nightcord-70 opacity-50 transition duration-500 hover:opacity-100`}
        >
          <div className="nav-btn">about</div>
        </a>
        <a
          onClick={() => {
            setIndex(2);
          }}
          className={`nav-btn-font-val fluid-font mx-[2vw] flex max-w-[150px] justify-center font-proxima font-normal text-nightcord-70 opacity-50 transition duration-500 hover:opacity-100`}
        >
          <div className="nav-btn">talents</div>
        </a>
        <a
          onClick={() => {
            setIndex(3);
          }}
          className={`nav-btn-font-val fluid-font mx-[2vw] flex max-w-[150px] justify-center font-proxima font-normal text-nightcord-70 opacity-50 transition duration-500 hover:opacity-100`}
        >
          <div className="nav-btn">uploads</div>
        </a>
        <a
          onClick={() => {
            setIndex(4);
          }}
          className={`nav-btn-font-val fluid-font mx-[2vw] flex max-w-[150px] justify-center font-proxima font-normal text-nightcord-70 opacity-50 transition duration-500 hover:opacity-100`}
        >
          <div className="nav-btn">gallery</div>
        </a>
      </nav>
    </div>
  );
};
