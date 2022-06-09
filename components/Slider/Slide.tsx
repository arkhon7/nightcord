import React from "react";

interface ISlide {
  className: string;
  children: React.ReactNode;
  offset: number;
}

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
