import React from "react";
import { useSliderStore } from "../../app/store";
import { Animate, useAnimation } from "../Animation";
import { ParallaxHandler } from "./ParallaxHandler";
// import { RandomParallaxObjects } from "./RandomParallaxObjects";

export const ParallaxObjects = () => {
  const doneFirst = useSliderStore((state) => state.doneFirst);
  const animation = useAnimation();

  if (doneFirst) {
    animation.start();
  }

  return (
    <div className="relative w-full h-full">
      <ParallaxHandler
        yOffset={0.9}
        xOffset={0}
        className="absolute bottom-[-100vh] right-[-50vw]"
      >
        <Animate
          className="drop-shadow-30"
          renderAnim={{
            initial: {
              y: "-100vh",
              perspective: "500px",
              rotateX: -50,
              rotateY: 20,
              rotateZ: -10,
              opacity: 0,
            },

            animate: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 1.1,
                bounce: 0.2,
                duration: 2,
              },
            },

            exit: {
              y: "-100vh",
              opacity: 0,
              transition: {
                duration: 2,
              },
            },
          }}
          persistAnim={{
            animate: {
              // x: [0, 20, -20, -20, 10, 0],
              y: [-20, 20, 0, 0, 20, -20],
              rotateX: [0, 45, 45, -45, -45],
              rotateY: [0, 45, -45, 45, -45],
              rotateZ: [0, -180],
              transition: {
                duration: 120,
                repeat: Infinity,
              },
            },
          }}
        >
          <div className="w-[1000px] h-[1000px] bg-nightcord-30 opacity-50 clip-triangle"></div>
        </Animate>
      </ParallaxHandler>
    </div>
    // <RandomParallaxObjects
    //   num={20}
    //   maxSize={100}
    //   minSize={20}
    //   maxXOffset={0}
    //   minXOffset={0}
    //   maxYOffset={4}
    //   minYOffset={1}
    //   maxDelay={1.5}
    //   minDelay={1}
    //   topPos={{ min: 0, max: 100 }}
    //   bottomPos={{ min: 0, max: -330 }}
    //   rightPos={{ min: 0, max: 100 }}
    //   leftPos={{ min: 0, max: 100 }}
    //   clipPathClassNames={[
    //     "clip-triangle",
    //     "clip-triangle-hole",
    //     "clip-square",
    //     "clip-square-hole",
    //     "clip-cross",
    //     "clip-circle",
    //   ]}
    //   classNames={[
    //     "bg-nightcord-30 opacity-30",
    //     "bg-nightcord-40 opacity-30",
    //     "bg-nightcord-50 opacity-30",
    //     "bg-nightcord-60 opacity-30",
    //     "bg-nightcord-70 opacity-30",
    //     "bg-nightcord-80 opacity-30",

    //     "bg-nightcord-30 opacity-60",
    //     "bg-nightcord-40 opacity-60",
    //     "bg-nightcord-50 opacity-60",
    //     "bg-nightcord-60 opacity-60",
    //     "bg-nightcord-70 opacity-60",
    //     "bg-nightcord-80 opacity-60",

    //     "bg-nightcord-30 opacity-90",
    //     "bg-nightcord-40 opacity-90",
    //     "bg-nightcord-50 opacity-90",
    //     "bg-nightcord-60 opacity-90",
    //     "bg-nightcord-70 opacity-90",
    //     "bg-nightcord-80 opacity-90",
    //   ]}
    // />
  );
};

// TODO add drop shadow as randomized value
