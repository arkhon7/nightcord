import React from "react";

import { useShowCaseStore } from "../../app/store";
import { useBackDropStore } from "../../app/store";
import { useAnimation } from "../Animation";
import { useSlider } from "../Slider";

import { ShadowyPortrait } from "./ShadowyPortrait";
import { Animate } from "../Animation";

export const ShowCase: React.FC = () => {
  const slider = useSlider();
  const animation = useAnimation();

  const backDropActive = useBackDropStore((state) => state.isActive);

  const showCaseBeenActive = useShowCaseStore((state) => state.beenActive);
  const showCaseActive = useShowCaseStore((state) => state.isActive);
  const openShowCase = useShowCaseStore((state) => state.open);
  const makeShowCasePersist = useShowCaseStore((state) => state.nowActive);

  React.useEffect(() => {
    if (slider.index === 2 && showCaseBeenActive === false) {
      openShowCase();
      makeShowCasePersist();
      animation.start();
    }
  }, [slider.index]);

  React.useEffect(() => {
    if (showCaseActive && showCaseBeenActive !== false) {
      animation.start();
    } else {
      animation.stop();
    }
  }, [showCaseActive]);

  // ${
  //   showCaseActive
  //     ? "bg-nightcord-110"
  //     : showCaseBeenActive
  //     ? "delay-1000 transparent"
  //     : "bg-nightcord-110"
  // }

  return (
    <div
      className={`absolute flex justify-center items-center w-full h-full transition-all duration-[1s] z-30 pointer-events-none`}
    >
      <div className="flex w-full h-full gap-8 justify-center items-center p-4">
        <Animate
          className="pointer-events-auto w-[13vw] h-full"
          renderAnim={{
            initial: { opacity: 0, y: "-50vh" },
            animate: {
              opacity: 1,
              y: "0vh",
              transition: {
                delay: backDropActive ? 0 : 1.2,
                type: "spring",
                mass: 2,
                duration: 3,
                stiffness: 25,
                bounce: 0.5,
              },
            },
            exit: {
              opacity: 0,
              y: "-50vh",
              transition: { duration: 1 },
            },
          }}
        >
          <ShadowyPortrait src="./kanade.png" />
          {/* <CharIcon src="./kanade.png" clip="clip-square" /> */}
        </Animate>
        <Animate
          className="pointer-events-auto w-[13vw] h-full"
          renderAnim={{
            initial: { opacity: 0, y: "-50vh" },
            animate: {
              opacity: 1,
              y: "0vh",
              transition: {
                delay: backDropActive ? 0 : 1,
                type: "spring",
                mass: 2,
                duration: 3,
                stiffness: 25,
                bounce: 0.5,
              },
            },
            exit: {
              opacity: 0,
              y: "-50vh",
              transition: { duration: 1.5 },
            },
          }}
        >
          <ShadowyPortrait src="./mafuyu.png" />
          {/* <CharIcon src="./mafuyu.png" clip="clip-square" /> */}
        </Animate>
        <Animate
          className="pointer-events-auto w-[13vw] h-full"
          renderAnim={{
            initial: { opacity: 0, y: "-50vh" },
            animate: {
              opacity: 1,
              y: "0vh",
              transition: {
                delay: backDropActive ? 0 : 1.3,
                type: "spring",
                mass: 2,
                duration: 3,
                stiffness: 25,
                bounce: 0.5,
              },
            },
            exit: {
              opacity: 0,
              y: "-50vh",
              transition: { duration: 1.1 },
            },
          }}
        >
          <ShadowyPortrait src="./ena.png" />
          {/* <CharIcon src="./ena.png" clip="clip-square" /> */}
        </Animate>
        <Animate
          className="pointer-events-auto w-[13vw] h-full"
          renderAnim={{
            initial: { opacity: 0, y: "-50vh" },
            animate: {
              opacity: 1,
              y: "0vh",
              transition: {
                delay: backDropActive ? 0 : 1.1,
                type: "spring",
                mass: 2,
                duration: 3,
                stiffness: 25,
                bounce: 0.5,
              },
            },
            exit: {
              opacity: 0,
              y: "-50vh",
              transition: { duration: 1.3 },
            },
          }}
        >
          <ShadowyPortrait src="./mizuki.png" />
          {/* <CharIcon src="./mizuki.png" clip="clip-square" /> */}
        </Animate>
      </div>
    </div>
  );
};
