import React, { useEffect } from "react";
import { Animate, useAnimation } from "../Animation";
import { useSliderStore } from "../../app/store";

export const ParallaxObjects = () => {
  const index = useSliderStore((state) => state.index);
  const currOffset = useSliderStore((state) => state.currOffset);
  const animation = useAnimation();

  useEffect(() => {
    if (index > 0) {
      animation.start();
    } else {
      animation.stop();
    }
  });
  console.log(currOffset);

  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <div
        style={{
          transitionDuration: "2s",
          transform: `translateY(${currOffset * 0.8}px)`,
        }}
        className=""
      >
        <Animate
          renderAnim={{
            initial: {
              x: "20vw",
              y: "-100vh",
              opacity: 0,
            },

            animate: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 1,
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
              rotate: [0, 360],
              // x: [0, 20, -20, -20, 10, 0],
              y: [-20, 20, 0, 0, 20, -20],
              transition: {
                duration: 60,
                repeat: Infinity,
              },
            },
          }}
        >
          <div className="w-[500px] h-[500px] bg-nightcord-30 holed-triangle-clip opacity-30"></div>
        </Animate>
      </div>
    </div>
  );
};
