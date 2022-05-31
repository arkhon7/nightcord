import create from "zustand";

export const useGlobalState = create((set) => ({
  sectionIndex: 0,
  isSliderActive: true,
  setSectionIndex: (payload) => set({ sectionIndex: payload }),
  toggleSliderActive: () =>
    set((state) => ({ isSliderActive: !state.isSliderActive })),
}));

export const useCharSectionState = create((set) => ({
  hasScrolledInto: false,
  isDetailsVisible: false,
  isCharsVisible: false,
  currentCharacter: {},
  videoState: "pause",
  durationValue: 0,
  preDurationValue: 0,
  videoModalVisible: false,
  initChars: () =>
    set((state) => {
      if (!state.hasScrolledInto) {
        return { isCharsVisible: true };
      }
    }),
  showChars: () => set({ isCharsVisible: true, hasScrolledInto: true }),
  showDetails: () => set({ isDetailsVisible: true, hasScrolledInto: true }),
  hideChars: () => set({ isCharsVisible: false, hasScrolledInto: true }),
  hideDetails: () => set({ isDetailsVisible: false, hasScrolledInto: true }),
  specifyMemberData: (payload) =>
    set(() => {
      if (payload.id === "Mizuki") {
        return { currentCharacter: payload.memberData.mizuki };
      } else if (payload.id === "Kanade") {
        return { currentCharacter: payload.memberData.kanade };
      } else if (payload.id === "Ena") {
        return { currentCharacter: payload.memberData.ena };
      } else if (payload.id === "Mafuyu") {
        return { currentCharacter: payload.memberData.mafuyu };
      }
    }),

  cleanMemberData: () => set({ currentCharacter: {} }),

  setDurationValue: (payload) => set({ durationValue: payload }),
  setPreDurationValue: (payload) => set({ preDurationValue: payload }),
  toggleVideoModal: () =>
    set((state) => {
      return { videoModalVisible: !state.videoModalVisible };
    }),
}));
