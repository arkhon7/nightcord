import React from "react";
import { RandomParallaxObjects } from "./RandomParallaxObjects";

export const ParallaxObjects = () => {
  return (
    <RandomParallaxObjects
      num={30}
      maxSize={100}
      minSize={10}
      maxXOffset={0.2}
      minXOffset={0.1}
      maxYOffset={4}
      minYOffset={0.2}
      maxDelay={1.5}
      minDelay={1}
      topPos={{ min: 75, max: 150 }}
      bottomPos={{ min: 75, max: 150 }}
      rightPos={{ min: -25, max: 125 }}
      leftPos={{ min: -25, max: 125 }}
      clipPathClassNames={[
        "clip-triangle",
        "clip-triangle-hole",
        "clip-square",
        "clip-square-hole",
        "clip-cross",
        "clip-circle",
      ]}
      classNames={[
        "bg-nightcord-30 opacity-30",
        "bg-nightcord-40 opacity-30",
        "bg-nightcord-50 opacity-30",
        "bg-nightcord-60 opacity-30",
        "bg-nightcord-70 opacity-30",
        "bg-nightcord-80 opacity-30",

        "bg-nightcord-30 opacity-60",
        "bg-nightcord-40 opacity-60",
        "bg-nightcord-50 opacity-60",
        "bg-nightcord-60 opacity-60",
        "bg-nightcord-70 opacity-60",
        "bg-nightcord-80 opacity-60",

        "bg-nightcord-30 opacity-90",
        "bg-nightcord-40 opacity-90",
        "bg-nightcord-50 opacity-90",
        "bg-nightcord-60 opacity-90",
        "bg-nightcord-70 opacity-90",
        "bg-nightcord-80 opacity-90",
      ]}
    />
  );
};

// TODO add drop shadow as randomized value
