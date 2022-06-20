import React from "react";

import { useMenuStore, useSliderStore } from "../../app/store";

export const Menu = () => {
  const setIndex = useSliderStore((state) => state.setIndex);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const isActive = useMenuStore((state) => state.isActive);

  const handleSectionScrollClick = (value: number) => {
    setIndex(value);
    toggleMenu();
  };

  return (
    <div
      className={`sm:invisible absolute w-full h-full flex justify-center items-center transition duration-500 bg-nightcord-110 bg-opacity-90 backdrop-blur-sm z-[998]  ${
        isActive ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
      }`}
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div
          className="w-full h-auto menu-btn my-4"
          onClick={() => handleSectionScrollClick(1)}
        >
          <div className="mx-[5vw] sm:mx-[3vw] fluid-font menu-btn-font-val font-proxima font-thin text-nightcord-70 opacity-70">
            About
          </div>
        </div>
        <div
          className="w-full h-auto menu-btn my-4"
          onClick={() => handleSectionScrollClick(2)}
        >
          <div className="mx-[5vw] sm:mx-[3vw] fluid-font menu-btn-font-val font-proxima font-thin text-nightcord-70 opacity-70">
            Talents
          </div>
        </div>
        <div
          className="w-full h-auto menu-btn my-4"
          onClick={() => handleSectionScrollClick(3)}
        >
          <div className="mx-[5vw] sm:mx-[3vw] fluid-font menu-btn-font-val font-proxima font-thin text-nightcord-70 opacity-70">
            Uploads
          </div>
        </div>
        <div
          className="w-full h-auto menu-btn my-4"
          onClick={() => handleSectionScrollClick(4)}
        >
          <div className="mx-[5vw] sm:mx-[3vw] fluid-font menu-btn-font-val font-proxima font-thin text-nightcord-70 opacity-70">
            Credits
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="w-full h-[50vh]">
<div
  className="h-[10vh] text-nightcord-70 menu-btn"
  onClick={() => {
    setIndex(1);
    toggleMenu();
  }}
>
  About
</div>
<div
  className="h-[10vh] font-nav text-nightcord-70 menu-btn"
  onClick={() => {
    setIndex(2);
    toggleMenu();
  }}
>
  Talents
</div>
<div
  className="h-[10vh] font-nav text-nightcord-70 menu-btn"
  onClick={() => {
    setIndex(3);
    toggleMenu();
  }}
>
  Uploads
</div>
<div
  className="h-[10vh] font-nav text-nightcord-70 menu-btn"
  onClick={() => {
    setIndex(4);
    toggleMenu();
  }}
>
  Credits
</div>
</div> */
}
