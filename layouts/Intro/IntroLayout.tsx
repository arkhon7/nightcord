import React from "react";
interface IIntroLayout {
  children: React.ReactNode;
}

export const IntroLayout = (props: IIntroLayout) => {
  return (
    <div className="absolute w-full h-full z-30 flex justify-center items-center">
      {props.children}
    </div>
  );
};
