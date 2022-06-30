export type styleState = {
  active: string;
  inactive: string;
  leftOfActive: string;
  rightOfActive: string;
  selected: string;
  unselected: string;
};

export const chooseStyleByState = (
  currentActiveId: string | null,
  currentSelectedId: string | null,
  id: string,
  leftIds: string[],
  rightIds: string[],
  styleState: styleState
) => {
  if (currentSelectedId !== null) {
    if (currentSelectedId === id) {
      return styleState.selected;
    } else {
      return styleState.unselected;
    }
  } else {
    if (currentActiveId !== null) {
      if (currentActiveId === id) {
        return styleState.active;
      } else if (leftIds.includes(currentActiveId)) {
        return styleState.leftOfActive;
      } else if (rightIds.includes(currentActiveId)) {
        return styleState.rightOfActive;
      } else {
        return styleState.inactive;
      }
    } else {
      return styleState.inactive;
    }
  }
};

export const mizukiStyles: styleState = {
  active:
    "transition duration-500 brightness-75 scale-105 translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
  inactive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
  leftOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.75+80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.75+992px*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.75-80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.75-992px*0.02)]",
  selected:
    "transition duration-500 brightness-[.9] translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[calc(60vh*0.05)] z-10",
  unselected:
    "transition duration-500 brightness-[.4] translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
};
