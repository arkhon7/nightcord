import React from "react";

export const Background = () => {
  return (
    <div className="absolute w-full h-full before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-nightcord-110 before:object-cover before:opacity-[0.90]">
      <img
        src="/bg_school_refusal.png"
        className="w-full h-full object-cover"
      ></img>
    </div>
  );
};
