import React from "react";

export const Background = () => {
  return (
    <div className="absolute h-full w-full before:absolute before:top-0 before:h-full before:w-full before:bg-nightcord-110 before:object-cover before:opacity-[0.90] before:content-['']">
      <img
        src="/assets/image/bg_school_refusal.png"
        className="h-full w-full object-cover"
      ></img>
    </div>
  );
};
