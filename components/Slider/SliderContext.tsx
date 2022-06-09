import React from "react";

export interface ISliderContext {
  index: number;
  next: () => void;
  prev: () => void;
}

export const SliderContext: React.Context<ISliderContext> =
  React.createContext<ISliderContext>({
    index: 0,
    prev: null,
    next: null,
  });

export const useSlider = (): ISliderContext => {
  return React.useContext(SliderContext);
};
