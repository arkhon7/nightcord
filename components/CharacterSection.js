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

  const handleClose = (e) => {
    e.preventDefault();

    const { id } = e.target;
    console.log(id);

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
    <div
      className="relative flex h-full w-full justify-center items-center overflow-hidden bg-nightcord-110 char-bg-shadow" // bg-nightcord-110 add this after debugging
      // TODO add a meaningful blurred background "sekai" on character details
    >
      <img src="/bg_school_refusal.png" className="absolute opacity-0"></img>
      <button
        className={`absolute left-2 top-2 w-20 h-20 bg-nightcord-30 ${
          isDetailsVisible ? "visible" : "invisible"
        }`}
        onClick={handleOpen}
      >
        BACK TO TALENTS
      </button>
      <CharacterDetails isDetailsVisible={isDetailsVisible} />

      <div className="grid gap-10 grid-cols-4 h-full justify-center items-center">
        <div
          className={`w-[15vw] h-full transistion-all ease-in-out duration-[1.2s]`}
          style={handleShowingChars(50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              id="kanade"
              style={{
                backgroundImage: "url('/kanade.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="w-full h-full z-10 transition-all duration-300 char-box-shadow"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transistion-all ease-in-out duration-[1.2s]`}
          style={handleShowingChars(-50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              id="mafuyu"
              style={{
                backgroundImage: "url('/mafuyu.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="w-full h-full z-10 transition-all duration-300 char-box-shadow"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transistion-all ease-in-out duration-[1.2s]`}
          style={handleShowingChars(50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              id="ena"
              style={{
                backgroundImage: "url('/ena.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="w-full h-full z-10 transition-all duration-300 char-box-shadow"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transistion-all ease-in-out duration-[1.2s]`}
          style={handleShowingChars(-50)}
        >
          <div className="CHARBAR relative z-[-1] flex justify-center items-center w-full h-full overflow-hidden">
            <div
              id="mizuki"
              onClick={handleClose}
              className="absolute w-[1500px] h-full transition-all duration-300 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden"
            >
              <img
                src="/mizuki.png"
                className="absolute w-auto h-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transistion-all duration-500 hover:scale-110"
              ></img>

              {/*TODO add shadow on the image while keeping the hover effect*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="relative w-[1500px] h-[1700px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            
            <img
              src="/mizuki.png"
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150"
            />
          </div> */
}

function CharacterDetails({ isDetailsVisible }) {
  return (
    <div
      className={`DETAILS-CONTAINER absolute flex w-[70vw] justify-center items-center ${
        isDetailsVisible ? "visible" : "invisible"
      }`}
    >
      <div className="w-[50%] flex flex-col">
        <img src="/vercel.svg" className="object-contain" />
      </div>
      <div className="w-[50%]">
        <div>FIRST NAME</div>
        <div>LAST NAME</div>
      </div>
    </div>
  );
}
