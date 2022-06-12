import create from "zustand";

interface IMenuStore {
  isActive: boolean;
  toggleMenu: () => void;
}

export const useMenuStore = create<IMenuStore>((set) => ({
  isActive: false,
  toggleMenu: () => set((state) => ({ isActive: !state.isActive })),
}));
