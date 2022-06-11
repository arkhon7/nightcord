import React from "react";
import { Animate } from "../Animation";

export const Mafuyu: React.FC = () => {
  return (
    <Animate
      className="flex w-full h-full char-box-shadow pointer-events-auto"
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
  );
};
