import create from "zustand";

interface IBackDropStore {
  isActive: boolean;
  open: () => void;
  close: () => void;
}

export const useBackDropStore = create<IBackDropStore>((set) => ({
  isActive: false,
  open: () => set({ isActive: true }),
  close: () => set({ isActive: false }),
}));
