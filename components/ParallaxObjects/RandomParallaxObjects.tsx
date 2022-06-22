import React from "react";
import { Animate, useAnimation } from "../Animation";
import { useSliderStore } from "../../app/store";
import { ParallaxHandler } from "./ParallaxHandler";

interface IRandomParallaxObjects {
  num: number;
  maxSize: number;
  minSize: number;
  maxXOffset: number;
  minXOffset: number;
  maxYOffset: number;
  minYOffset: number;
  maxDelay: number;
  minDelay: number;

  topPos: { min: number; max: number };
  bottomPos: { min: number; max: number };
  leftPos: { min: number; max: number };
  rightPos: { min: number; max: number };

  clipPathClassNames: string[];
  classNames: string[];
}

export const RandomParallaxObjects: React.FC<IRandomParallaxObjects> = (
  props: IRandomParallaxObjects
) => {
  const doneFirst = useSliderStore((state) => state.doneFirst);
  const animation = useAnimation();

  console.log("done first from parallax", doneFirst);
  if (doneFirst) {
    animation.start();
  }

  console.log("Rerendered Parallax Objects!");
  return (
    <div className="absolute flex justify-center items-center w-full h-full">
      {[...Array(props.num)].map(() => {
        const randomSize = parseFloat(
          (
            Math.random() * (props.maxSize - props.minSize) +
            props.minSize
          ).toFixed(2)
        );
        const randomXOffset = parseFloat(
          (
            Math.random() * (props.maxXOffset - props.minXOffset) +
            props.minXOffset
          ).toFixed(2)
        );
        const randomYOffset = parseFloat(
          (
            Math.random() * (props.maxYOffset - props.minYOffset) +
            props.minYOffset
          ).toFixed(2)
        );

        const randomDelay = parseFloat(
          (
            Math.random() * (props.maxDelay - props.minDelay) +
            props.minDelay
          ).toFixed(2)
        );

        const randomClipName =
          props.clipPathClassNames[
            Math.floor(Math.random() * props.clipPathClassNames.length)
          ];

        const randomPos = () => {
          const randomRight = parseFloat(
            (
              Math.random() * (props.rightPos.max - props.rightPos.min) +
              props.rightPos.min
            ).toFixed(2)
          );

          const randomLeft = parseFloat(
            (
              Math.random() * (props.leftPos.max - props.leftPos.min) +
              props.leftPos.min
            ).toFixed(2)
          );
          const randomTop = parseFloat(
            (
              Math.random() * (props.topPos.max - props.topPos.min) +
              props.topPos.min
            ).toFixed(2)
          );

          const randomBottom = parseFloat(
            (
              Math.random() * (props.bottomPos.max - props.bottomPos.min) +
              props.bottomPos.min
            ).toFixed(2)
          );

          return {
            top: `${randomTop}%`,
            bottom: `${randomBottom}%`,
            left: `${randomLeft}%`,
            right: `${randomRight}%`,
          };
        };

        const randomKey = Math.random().toFixed(5);
        const randomClassNames =
          props.classNames[Math.floor(Math.random() * props.classNames.length)];

        const randomX = Math.floor(Math.random() * 360);
        const randomY = Math.floor(Math.random() * 360);
        const randomZ = Math.floor(Math.random() * 360);

        const randomDuration = Math.floor(Math.random() * (180 + 240)) + 180; // make this a prop

        return (
          <ParallaxHandler
            key={randomKey}
            xOffset={randomXOffset}
            yOffset={randomYOffset}
            className="absolute flex justify-center items-center"
            style={randomPos()}
          >
            <Animate
              // className="drop-shadow-30"
              renderAnim={{
                initial: {
                  y: "-100vh",
                  perspective: "1500px",
                  opacity: 0,
                  // rotateX: randomX,
                  // rotateY: randomY,
                  rotateZ: randomZ,
                },

                animate: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    delay: randomDelay,
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
                  rotateZ: [
                    0,
                    randomX,
                    -randomX,
                    randomY,
                    -randomY,
                    randomZ,
                    -randomZ,
                    0,
                  ],
                  transition: {
                    duration: randomDuration,
                    repeat: Infinity,
                  },
                },
              }}
            >
              <div className="drop-shadow-30">
                <div
                  style={{
                    width: randomSize,
                    height: randomSize,
                  }}
                  className={`${randomClipName} ${randomClassNames}`}
                ></div>
              </div>
            </Animate>
          </ParallaxHandler>
        );
      })}
    </div>
  );
};
