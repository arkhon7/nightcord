import React from "react";
import { AnimatePresence } from "framer-motion";
import { AnimationContext } from "./AnimationContext";

interface IAnimationWrapper {
  children?: React.ReactNode;
}

export const Animation: React.FC<
  React.PropsWithChildren<IAnimationWrapper>
> = ({ children }: IAnimationWrapper) => {
  const [active, setActive] = React.useState(false);

  const start = () => {
    setActive(true);
  };

  const stop = () => {
    setActive(false);
  };

  return (
    <AnimationContext.Provider
      value={{ active: active, start: start, stop: stop }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

// this component adds animation presence and context for the animation elements
