import React from "react";
// import { BsJustify, BsXLg } from "react-icons/bs";
import { useSlider } from "../Slider";
import { useMenuStore } from "../../app/store";
// import { Burger } from "./Burger";

export const MenuButton: React.FC = () => {
  const slider = useSlider();
  const isActive = useMenuStore((state) => state.isActive);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  // use slider to slide into other sections

  const handleToggleMenu = () => {
    toggleMenu();
  };

  console.log(isActive);
  return (
    <div>
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
  );
};
