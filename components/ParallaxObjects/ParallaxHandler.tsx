import React from "react";
import { Animate } from "../Animation";
import { useSliderStore } from "../../app/store";

interface IParallaxHandler {
  children: React.ReactNode;
  className?: string;
  xOffset: number;
  yOffset: number;
  style?: React.CSSProperties;
}

export const ParallaxHandler: React.FC<
  React.PropsWithChildren<IParallaxHandler>
> = (props: IParallaxHandler) => {
  const currOffset = useSliderStore((state) => state.currOffset);

  return (
    <div
      className={props.className}
      style={{
        transitionDuration: "2s",
        transform: `translateY(${currOffset * props.yOffset}px) translateX(${
          currOffset * props.xOffset
        }px)`,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
