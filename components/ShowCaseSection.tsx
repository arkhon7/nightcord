import React from "react";
import {
  AnimatedContainer,
  AnimatedElement,
  useAnimatedContainer,
} from "./AnimatedContainer";
import { useSlider } from "./Slider";

export const ShowCaseSection: React.FC = () => {
  const showCaseContainer = useAnimatedContainer();
  const slider = useSlider();

  // for tracking the index to open the presenter
  React.useEffect(() => {
    if (slider.index === 1) {
      showCaseContainer.open();
    } else {
      showCaseContainer.close();
    }
  }, [slider.index]);

  const duration: number = 2;
  const animateDelay: number = 1;

  return (
    <AnimatedContainer className="relative flex h-full w-full justify-center items-center bg-nightcord-110 z-[-1]">
      <div className="relative flex w-[70vw] h-[90vh] justify-center items-center">
        <AnimatedElement
          className="w-[15vw] h-[100vh]"
          renderAnim={{
            initial: { opacity: 0, y: "100vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: { delay: animateDelay, duration: duration },
            },
            exit: {
              opacity: 0,
              y: "100vh",
              transition: { duration: duration },
            },
          }}
        >
          <div className="showcase-box relative w-full h-full bg-nightcord-110">
            Kanade
          </div>
        </AnimatedElement>
        <AnimatedElement
          className="w-[15vw] h-[100vh]"
          renderAnim={{
            initial: { opacity: 0, y: "-100vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: { delay: animateDelay, duration: duration },
            },
            exit: {
              opacity: 0,
              y: "-100vh",
              transition: { duration: duration },
            },
          }}
        >
          <div className="showcase-box relative w-full h-full bg-nightcord-110">
            Kanade
          </div>
        </AnimatedElement>
        <AnimatedElement
          className="w-[15vw] h-[100vh]"
          renderAnim={{
            initial: { opacity: 0, y: "100vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: { delay: animateDelay, duration: duration },
            },
            exit: {
              opacity: 0,
              y: "100vh",
              transition: { duration: duration },
            },
          }}
        >
          <div className="showcase-box relative w-full h-full bg-nightcord-110">
            Kanade
          </div>
        </AnimatedElement>
        <AnimatedElement
          className="w-[15vw] h-[100vh]"
          renderAnim={{
            initial: { opacity: 0, y: "-100vh" },
            animate: {
              opacity: 1,
              y: 0,
              transition: { delay: animateDelay, duration: duration },
            },
            exit: {
              opacity: 0,
              y: "-100vh",
              transition: { duration: duration },
            },
          }}
        >
          <div className="showcase-box relative w-full h-full bg-nightcord-110">
            Kanade
          </div>
        </AnimatedElement>
      </div>
    </AnimatedContainer>
  );
};

/// TODO
// - use shapes instead of bars for characters
// - add parallax effect on shapes
