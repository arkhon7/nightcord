import create from "zustand";

interface ISliderStore {
  index: number;
  setIndex: (index: number) => void;
  currOffset: number;
  setCurrOffset: (offset: number) => void;
  doneFirst: boolean;

  doneSecond: boolean;
}

export const useSliderStore = create<ISliderStore>((set) => ({
  index: 0,
  setIndex: (index: number) =>
    set((state) => {
      if (state.doneFirst !== true && index === 1) {
        return { index: index, doneFirst: true };
      } else if (state.doneSecond !== true && state.index === 2) {
        return { index: index, doneSecond: true };
      } else {
        return { index: index };
      }
    }),
  currOffset: 0,
  setCurrOffset: (offset: number) => set({ currOffset: offset }),
  doneFirst: false,
  doneSecond: false,
}));
