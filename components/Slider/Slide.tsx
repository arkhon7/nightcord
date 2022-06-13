import React from "react";
import { ISlide } from "../../components/Slider";

export const Slide: React.FC<React.PropsWithChildren<ISlide>> = ({
  className,
  children,
  offset,
}: ISlide) => {
  return (
    <div data-offset={offset} className={className}>
      {children}
    </div>
  );
};
