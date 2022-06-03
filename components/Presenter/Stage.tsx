import React from "react";
import { usePresenter } from "./store";
import { useSlider } from "../Slider";
import { AnimatePresence } from "framer-motion";

interface StageProp {
  className: string;
  children: React.ReactNode;
}

export const Stage: React.FC = ({ className, children }: StageProp) => {
  const presenter = usePresenter();
  const slider = useSlider();

  // for tracking the index to open the presenter
  React.useEffect(() => {
    if (slider.index === 1) {
      presenter.open();
    } else {
      presenter.close();
    }
  }, [slider.index]);

  return (
    <div className={className}>
      <AnimatePresence>{presenter.active && <>{children}</>}</AnimatePresence>
    </div>
  );
};

// TODO:
// add the styles and other shiz
