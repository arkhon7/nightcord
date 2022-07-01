import React from "react";
interface IShowCaseContext {
  activeId: string | null;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ShowCaseContext = React.createContext<IShowCaseContext>({
  activeId: null,
  setActiveId: () => {},
  selectedId: null,
  setSelectedId: () => {},
});

export const useShowCase = () => React.useContext(ShowCaseContext);
