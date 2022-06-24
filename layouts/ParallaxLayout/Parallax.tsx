import React from "react";

interface IParallax {
  children: React.ReactNode;
}

export const Parallax: React.FC<React.PropsWithChildren<IParallax>> = (
  props: IParallax
) => {
  return (
    <div className="absolute w-full h-full pointer-events-none flex justify-center items-center z-30">
      {props.children}
    </div>
  );
};
