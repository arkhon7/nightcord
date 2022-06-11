import create from "zustand";

interface ICharInfoStore {
  isActive: boolean;
  data: object; // add interface for this
  open: () => void;
  close: () => void;
}

export const useCharInfoStore = create<ICharInfoStore>((set) => ({
  isActive: false,
  data: {},
  open: () => set({ isActive: true }),
  close: () => set({ isActive: false }),
}));
