import create from "zustand";

interface IShowCaseStore {
  beenActive: boolean;
  isActive: boolean;

  nowActive: () => void;
  open: () => void;
  close: () => void;
}

export const useShowCaseStore = create<IShowCaseStore>((set) => ({
  beenActive: false,
  isActive: false,
  nowActive: () => set({ beenActive: true }),
  open: () => set({ isActive: true }),
  close: () => set({ isActive: false }),
}));
