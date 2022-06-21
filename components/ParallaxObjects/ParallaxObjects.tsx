import React, { useEffect } from "react";
import { Animate, useAnimation } from "../Animation";
import { useSliderStore } from "../../app/store";
import { ParallaxHandler } from "./ParallaxHandler";

export const ParallaxObjects = () => {
  const index = useSliderStore((state) => state.index);
  const animation = useAnimation();

  useEffect(() => {
    if (index > 0) {
      animation.start();
    } else {
      animation.stop();
    }
  });

  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <ParallaxHandler
        xOffset={0.5}
        yOffset={2}
        className="absolute bottom-0 left-0 flex justify-center items-center"
      >
        <Animate
          renderAnim={{
            initial: {
              x: "20vw",
              y: "-100vh",
              perspective: "1500px",
              opacity: 0,
            },

            animate: {
              y: "20vh",
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
              // x: [0, 20, -20, -20, 10, 0],
              y: [-20, 20, 0, 0, 20, -20],
              rotateX: [0, 45, -45, 0],
              rotateY: [0, 45, -45, 0],
              rotateZ: [0, 360],
              transition: {
                duration: 120,
                repeat: Infinity,
              },
            },
          }}
        >
          <div className="w-[500px] h-[500px] bg-nightcord-70 holed-triangle-clip opacity-30"></div>
        </Animate>
      </ParallaxHandler>
      <ParallaxHandler
        xOffset={0}
        yOffset={4}
        className="absolute flex justify-center items-center"
      >
        <Animate
          renderAnim={{
            initial: {
              x: "80%",
              y: "-100vh",
              perspective: "1500px",
              rotateY: 30,
              rotateX: -45,
              rotateZ: 45,
              opacity: 0,
            },

            animate: {
              y: "20vh",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 1.2,
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
              rotateX: [0, 45, 45, 0],
              rotateY: [0, -45, -45, 0],
              rotateZ: [0, -360],
              transition: {
                duration: 120,
                repeat: Infinity,
              },
            },
          }}
        >
          <div className="w-[400px] h-[400px] bg-nightcord-30 holed-triangle-clip opacity-30 rotate-60"></div>
        </Animate>
      </ParallaxHandler>
      <ParallaxHandler
        xOffset={0}
        yOffset={2}
        className="absolute left-[70%] flex justify-center items-center"
      >
        <Animate
          renderAnim={{
            initial: {
              x: "50%",
              y: "-100vh",
              perspective: "1500px",
              rotateX: 45,
              opacity: 0,
            },

            animate: {
              y: "20vh",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 1.5,
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
              rotateX: [0, -45, 45, -45],
              rotateY: [0, 45, -45, 45, -45],
              rotateZ: [0, 360],
              transition: {
                duration: 120,
                repeat: Infinity,
              },
            },
          }}
        >
          <div className="w-[150px] h-[150px] bg-nightcord-10 holed-triangle-clip opacity-30"></div>
        </Animate>
      </ParallaxHandler>
    </div>
  );
};
