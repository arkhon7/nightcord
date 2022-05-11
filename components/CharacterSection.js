import { useEffect } from "react";
import { useGlobalState, useCharSectionState } from "../app/store";

export function CharacterSection() {
  const sectionIndex = useGlobalState((state) => state.sectionIndex);

  const hasScrolledInto = useCharSectionState((state) => state.hasScrolledInto);
  const isDetailsVisible = useCharSectionState(
    (state) => state.isDetailsVisible
  );

  const isCharsVisible = useCharSectionState((state) => state.isCharsVisible);
  const { showChars, showDetails, hideChars, hideDetails, initCharSection } =
    useCharSectionState();

  useEffect(() => {
    if (sectionIndex === 2) {
      initCharSection();
      console.log("showing chars");
    }
  }, [sectionIndex]);

  const handleShowingChars = (transformVal) => {
    if (isCharsVisible && !hasScrolledInto) {
      return {
        transform: "translateY(0)",
        opacity: 1,
        transitionDelay: "1000ms",
      };
    } else if (isCharsVisible && hasScrolledInto) {
      return {
        transform: "translateY(0)",
        opacity: 1,
      };
    } else if (!isCharsVisible) {
      return { transform: `translateY(${transformVal}%)`, opacity: 0 };
    }
  };

  const handleClose = () => {
    hideChars();
    showDetails();
  };

  const handleOpen = () => {
    hideDetails();
    showChars();
  };

  console.log("from handle showing chars", {
    isCharsVisible: isCharsVisible,
    hasScrolledInto: hasScrolledInto,
    isDetailsVisible: isDetailsVisible,
  });

  return (
    <div className="relative flex h-full w-full justify-center items-center bg-nightcord-110">
      <button
        className={`absolute left-2 top-2 w-20 h-20 bg-nightcord-30 ${
          isDetailsVisible ? "visible" : "invisible"
        }`}
        onClick={handleOpen}
      >
        BACK TO TALENTS
      </button>

      <div className="grid gap-10 grid-cols-4 h-full">
        <div
          className={`w-[13vw] transistion-all duration-700`}
          style={handleShowingChars(50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/kanade.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="blur-sm w-full h-full z-10 transition-all duration-500 hover:blur-none char-box-shadow"
            ></div>
          </div>
        </div>
        <div
          className={`w-[13vw] transistion-all duration-700`}
          style={handleShowingChars(-50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/mafuyu.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="blur-sm w-full h-full z-10 transition-all duration-500 hover:blur-none char-box-shadow"
            ></div>
          </div>
        </div>
        <div
          className={`w-[13vw] transistion-all duration-700`}
          style={handleShowingChars(50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/ena.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="blur-sm w-full h-full z-10 transition-all duration-500 hover:blur-none char-box-shadow"
            ></div>
          </div>
        </div>
        <div
          className={`w-[13vw transistion-all duration-700`}
          style={handleShowingChars(-50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/mizuki.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="blur-sm w-full h-full z-10 transition-all duration-500 hover:blur-none char-box-shadow"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
