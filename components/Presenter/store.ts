import create from "zustand";

interface PresenterStore {
  active: boolean;
  open: () => void;
  close: () => void;
}

export const usePresenter = create<PresenterStore>((set) => ({
  active: false,
  open: () => set({ active: true }),
  close: () => set({ active: false }),
}));
