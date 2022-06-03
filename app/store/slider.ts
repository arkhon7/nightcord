import create from "zustand";

interface SliderState {
  index: number;

  setIndex: (index: number) => void;
  incrementIndex: () => void;
  decrementIndex: () => void;

  maxIndex: number | null;
  setMaxIndex: (index: number) => void;

  isSliderActive: boolean;
  toggleSlider: () => void;
}

export const useSlider = create<SliderState>((set) => ({
  index: 0,
  setIndex: (index: number) => set({ index: index }),
  incrementIndex: () =>
    set((state) => {
      if (state.index + 1 >= state.maxIndex) {
        return { index: state.maxIndex };
      } else {
        return { index: state.index + 1 };
      }
    }),
  decrementIndex: () =>
    set((state) => {
      if (state.index - 1 < 0) {
        return { index: 0 };
      } else {
        return { index: state.index - 1 };
      }
    }),

  maxIndex: null,
  setMaxIndex: (index: number) => set({ maxIndex: index }),

  isSliderActive: true,
  toggleSlider: () =>
    set((state) => ({ isSliderActive: !state.isSliderActive })),
}));
