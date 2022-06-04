import React from "react";
import { useAnimatedContainer } from "./store";
import { AnimatePresence } from "framer-motion";

export interface AnimatedContainerProp {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedContainer: React.FC<
  React.PropsWithChildren<AnimatedContainerProp>
> = ({ className, children }: AnimatedContainerProp) => {
  const presenter = useAnimatedContainer();

  return (
    <div className={className}>
      <AnimatePresence>{presenter.active && <>{children}</>}</AnimatePresence>
    </div>
  );
};
