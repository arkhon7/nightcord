import React from "react";

export interface ISliderContext {
  index: number;
  next: () => void;
  prev: () => void;
  slideTo: (index: number) => void;
}

export const SliderContext: React.Context<ISliderContext> =
  React.createContext<ISliderContext>({
    index: 0,
    prev: null,
    next: null,
    slideTo: null,
  });

export const useSlider = (): ISliderContext => {
  return React.useContext(SliderContext);
};
