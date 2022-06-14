import React from "react";
import { Slider } from "../../components/Slider";
// this layout shows the styles to the main slider, helpful for parallax effects

interface ISmoothSlider {
  children?: React.ReactNode;
}

export const SmoothSlider = (props: ISmoothSlider) => {
  return (
    <Slider
      className="absolute w-screen h-screen z-30"
      interval={1000}
      direction="y"
      sliderStyle={{
        transition: "all",
        transitionDuration: "1s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      {props.children}
    </Slider>
  );
};
