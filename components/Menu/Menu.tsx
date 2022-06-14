import React from "react";

import { useMenuStore, useSliderStore } from "../../app/store";

export const Menu = () => {
  const setIndex = useSliderStore((state) => state.setIndex);

  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  const isActive = useMenuStore((state) => state.isActive);
  return (
    <div
      className={`absolute w-[105%] h-full flex justify-center items-center transition duration-500 bg-nightcord-110 bg-opacity-90 backdrop-blur-sm z-[998]  ${
        isActive ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div className="w-full">
        <div
          className="w-full h-[10vh] hover:scale-105"
          onClick={() => {
            setIndex(1);
            toggleMenu();
          }}
        >
          <div className="font-raleway text-nightcord-70">About</div>
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
