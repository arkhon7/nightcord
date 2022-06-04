import create from "zustand";

interface AnimatedContainerStore {
  active: boolean;
  open: () => void;
  close: () => void;
}

export const useAnimatedContainer = create<AnimatedContainerStore>((set) => ({
  active: false,
  open: () => set({ active: true }),
  close: () => set({ active: false }),
}));
