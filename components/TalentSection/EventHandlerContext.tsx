import React from "react";

interface IEventHandlerContext {
  selectedId: string | null;
  hoveredId: string | null;
  setHoveredId: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const EventHandlerContext = React.createContext<IEventHandlerContext>({
  selectedId: null,
  hoveredId: null,
  setHoveredId: () => {},
  setSelectedId: () => {},
});

export const useTalentSectionEventHandler = () => {
  return React.useContext(EventHandlerContext);
};
