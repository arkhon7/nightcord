import React from "react";
import { useMenuStore } from "../../app/store";

export const MenuButton: React.FC = () => {
  const isActive = useMenuStore((state) => state.isActive);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  const handleToggleMenu = () => {
    toggleMenu();
  };

  return (
    <div className="visible absolute z-[999] flex w-full justify-end sm:invisible">
      <div
        className={`m-2 rounded-md bg-opacity-70 p-[0.5rem] transition duration-300 ${
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
