import React from "react";
import { useMenuStore } from "../../app/store";

export const MenuButton: React.FC = () => {
  const isActive = useMenuStore((state) => state.isActive);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  // use slider to slide into other sections

  const handleToggleMenu = () => {
    toggleMenu();
  };

  console.log(isActive);
  return (
    <div className="absolute z-[999] w-full flex justify-end visible sm:invisible">
      <div
        className={`bg-opacity-70 p-[0.5rem] rounded-md transition duration-300 m-2 ${
          isActive ? "transparent" : "bg-nightcord-110"
        }`}
      >
        <input
          type="checkbox"
          id="btn-proxy"
          className="burger-inp"
          onChange={handleToggleMenu}
          checked={isActive}
        />
        <label id="burger" htmlFor="btn-proxy" className="burger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
    </div>
  );
};
