import React from "react";

import { useMenuStore, useSliderStore } from "../../app/store";

export const Menu = () => {
  const setIndex = useSliderStore((state) => state.setIndex);

  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  const isActive = useMenuStore((state) => state.isActive);
  return (
    <div
      className={`absolute w-full h-full flex justify-center items-center transition duration-500 bg-nightcord-110 bg-opacity-90 backdrop-blur-sm z-20  ${
        isActive ? "translate-x-0 sm:translate-x-[80%]" : "translate-x-[100%]"
      }`}
    >
      <div className="w-full p-10">
        <div
          className="w-full h-[10vh] font-nav text-nightcord-70 hover:scale-105"
          onClick={() => {
            setIndex(1);
            toggleMenu();
          }}
        >
          About
        </div>
        <div
          className="w-full h-[10vh] font-nav text-nightcord-70 hover:scale-105"
          onClick={() => {
            setIndex(2);
            toggleMenu();
          }}
        >
          Talents
        </div>
        <div
          className="w-full h-[10vh] font-nav text-nightcord-70 hover:scale-105"
          onClick={() => {
            setIndex(3);
            toggleMenu();
          }}
        >
          Uploads
        </div>
        <div
          className="w-full h-[10vh] font-nav text-nightcord-70 hover:scale-105"
          onClick={() => {
            setIndex(4);
            toggleMenu();
          }}
        >
          Credits
        </div>
      </div>
    </div>
  );
};
