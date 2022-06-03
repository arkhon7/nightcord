import React from "react";

interface SlideProp {
  className: string;
  children: React.ReactNode;
  offset: number;
}

export const Slide: React.FC = ({ className, children, offset }: SlideProp) => {
  return (
    <div data-offset={offset} className={className}>
      {children}
    </div>
  );
};
