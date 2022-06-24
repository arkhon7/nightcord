import React from "react";

interface IAboutLayout {
  children: React.ReactNode;
}
export const AboutLayout = (props: IAboutLayout) => {
  return <div className="flex flex-wrap w-full h-screen">{props.children}</div>;
};
