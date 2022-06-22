import create from "zustand";

interface ISliderStore {
  index: number;
  setIndex: (index: number) => void;
  currOffset: number;
  setCurrOffset: (offset: number) => void;
  doneFirst: boolean;
  setDoneFirst: () => void;
}

export const useSliderStore = create<ISliderStore>((set) => ({
  index: 0,
  setIndex: (index: number) => set({ index: index }),
  currOffset: 0,
  setCurrOffset: (offset: number) => set({ currOffset: offset }),
  doneFirst: false,
  setDoneFirst: () => set({ doneFirst: true }),
}));
