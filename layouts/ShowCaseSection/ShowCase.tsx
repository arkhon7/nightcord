import { AnimatePresence } from "framer-motion";
import React from "react";
import { Animate, useAnimation } from "../../components/Animation";
// import { useShowCaseStore } from "./store";

import { useSlider } from "../../components/Slider";

export const ShowCase: React.FC = () => {
  const slider = useSlider();
  const animation = useAnimation();

  React.useEffect(() => {
    if (slider.index === 1) {
      animation.start();
    } else {
      animation.stop();
    }
  }, [slider.index]);

  return (
    <div className="flex justify-center items-center w-full h-full bg-nightcord-110">
      <div className="flex w-full gap-4 h-full justify-center items-center p-4 lg:w-[1024px]">
        <Animate
          className="flex w-full h-full char-box-shadow"
          renderAnim={{
            initial: { opacity: 0, y: "-50vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 3,
                type: "spring",
                bounce: 5,
                stiffness: 30,
              },
            },
            exit: {
              opacity: 0,
              y: "-50vh",
              transition: { duration: 1 },
            },
          }}
        >
          <div
            className="flex justify-center items-center w-full h-full overflow-hidden"
            onClick={() => console.log("pressed")}
          >
            <div id={"kanade"} className="relative w-full h-full group">
              <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
                <img
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                  src={"./kanade.png"}
                ></img>
              </div>
            </div>
          </div>
        </Animate>
        <Animate
          className="flex w-full h-full char-box-shadow"
          renderAnim={{
            initial: { opacity: 0, y: "50vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 3,
                type: "spring",
                bounce: 5,
                stiffness: 30,
              },
            },
            exit: {
              opacity: 0,
              y: "50vh",
              transition: { duration: 1 },
            },
          }}
        >
          <div
            className="flex justify-center items-center w-full h-full overflow-hidden"
            onClick={() => console.log("pressed")}
          >
            <div id={"mafuyu"} className="relative w-full h-full group">
              <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
                <img
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                  src={"./mafuyu.png"}
                ></img>
              </div>
            </div>
          </div>
        </Animate>
        <Animate
          className="flex w-full h-full char-box-shadow"
          renderAnim={{
            initial: { opacity: 0, y: "-50vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 3,
                type: "spring",
                bounce: 5,
                stiffness: 30,
              },
            },
            exit: {
              opacity: 0,
              y: "-50vh",
              transition: { duration: 1 },
            },
          }}
        >
          <div
            className="flex justify-center items-center w-full h-full overflow-hidden"
            onClick={() => console.log("pressed")}
          >
            <div id={"ena"} className="relative w-full h-full group">
              <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
                <img
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                  src={"./ena.png"}
                ></img>
              </div>
            </div>
          </div>
        </Animate>
        <Animate
          className="flex w-full h-full char-box-shadow"
          renderAnim={{
            initial: { opacity: 0, y: "50vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 3,
                type: "spring",
                bounce: 5,
                stiffness: 30,
              },
            },
            exit: {
              opacity: 0,
              y: "50vh",
              transition: { duration: 1 },
            },
          }}
        >
          <div
            className="flex justify-center items-center w-full h-full overflow-hidden"
            onClick={() => console.log("pressed")}
          >
            <div id={"mizuki"} className="relative w-full h-full group">
              <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
                <img
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                  src={"./mizuki.png"}
                ></img>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
};
