import create from "zustand";

interface SliderStore {
  index: number;

  setIndex: (index: number) => void;
  next: () => void;
  prev: () => void;

  maxIndex: number | null;
  setMaxIndex: (index: number) => void;
}

export const useSlider = create<SliderStore>((set) => ({
  index: 0,
  setIndex: (index: number) => set({ index: index }),
  next: () =>
    set((state: SliderStore) => {
      if (state.index + 1 >= state.maxIndex) {
        return { index: state.maxIndex };
      } else {
        return { index: state.index + 1 };
      }
    }),
  prev: () =>
    set((state: SliderStore) => {
      if (state.index - 1 < 0) {
        return { index: 0 };
      } else {
        return { index: state.index - 1 };
      }
    }),

  maxIndex: null,
  setMaxIndex: (index: number) => set({ maxIndex: index }),
}));
