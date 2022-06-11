import React from "react";
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
