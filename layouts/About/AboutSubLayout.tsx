import React from "react";

interface IAboutSubLayout {
  children: React.ReactNode;
}

export const AboutSubLayout = (props: IAboutSubLayout) => {
  return (
    <div className="w-[100vw] h-[50vh] md:w-[50vw] md:h-[100vh]">
      {props.children}
    </div>
  );
};
