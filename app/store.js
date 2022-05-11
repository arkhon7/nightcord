import create from "zustand";

export const useGlobalState = create((set) => ({
  sectionIndex: 0,
  setSectionIndex: (payload) => set({ sectionIndex: payload }),
}));

export const useCharSectionState = create((set) => ({
  hasScrolledInto: false,
  isDetailsVisible: false,
  isCharsVisible: false,
  initCharSection: () =>
    set((state) => {
      if (!state.hasScrolledInto) {
        return { isCharsVisible: true };
      }
    }),
  showChars: () => set({ isCharsVisible: true, hasScrolledInto: true }),
  showDetails: () => set({ isDetailsVisible: true, hasScrolledInto: true }),
  hideChars: () => set({ isCharsVisible: false, hasScrolledInto: true }),
  hideDetails: () => set({ isDetailsVisible: false, hasScrolledInto: true }),
}));
