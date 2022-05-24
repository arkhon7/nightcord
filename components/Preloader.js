import React, { useState, useEffect } from "react";

export function Preloader() {
  const [preloadAnim, setPreloadAnim] = useState();

  const handlePreload = () => {
    console.log("loaded");
    setPreloadAnim("loaderModalCloseAnim");
  };
  useEffect(() => {
    window.addEventListener("load", handlePreload);
    return () => window.removeEventListener("load", handlePreload);
  });

  return (
    <div
      className="absolute z-50 flex justify-center items-center w-full h-screen bg-nightcord-110 transition-all animation-fill-forwards ease-in-out"
      style={{
        animationDelay: "2.4s",
        animationName: preloadAnim,
        animationDuration: "1.2s",
      }}
    >
      <div className="absolute w-[200px] flex justify-center items-center">
        <div
          className="h-[2px] bg-nightcord-20 transform-all animation-fill-forwards ease-in-out mt-4 rounded-lg"
          style={{
            animationDelay: "0.5s",
            animationName: "loaderBarAnim",
            animationDuration: "1.5s",
          }}
        ></div>
        <div
          className="absolute w-[200px] opacity-0 flex justify-center items-center animation-fill-forwards"
          style={{
            animationDelay: "1.4s",
            animationName: "loaderLogoAnim",
            animationDuration: "1.4s",
          }}
        >
          {/* TODO:
              - make this section into component
              - find a way to get nightcord logo (the shape one)
             */}
          <img src="/ni25_logo.png" className="w-[300px] h-auto"></img>
        </div>
      </div>
    </div>
  );
}
