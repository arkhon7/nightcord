import { useEffect, useRef } from "react";
import { useGlobalState, useCharSectionState } from "../app/store";

export function CharacterSection({ memberData }) {
  const {
    showChars,
    showDetails,
    hideChars,
    hideDetails,
    initChars,
    specifyMemberData,
    currentCharacter,
  } = useCharSectionState();

  // initSection(memberData);

  const sectionIndex = useGlobalState((state) => state.sectionIndex);

  const hasScrolledInto = useCharSectionState((state) => state.hasScrolledInto);
  const isDetailsVisible = useCharSectionState(
    (state) => state.isDetailsVisible
  );

  const isCharsVisible = useCharSectionState((state) => state.isCharsVisible);

  useEffect(() => {
    if (sectionIndex === 2) {
      initChars();
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
      return {
        transform: `translateY(${transformVal}%)`,
        opacity: 0,
        pointerEvents: "none",
      };
    }
  };

  const handleClose = (e) => {
    e.preventDefault();

    const { id } = e.target;
    specifyMemberData({ id: id, memberData: memberData });

    hideChars();
    showDetails();
  };

  const handleOpen = () => {
    hideDetails();
    showChars();
  };

  // console.log("from handle showing chars", {
  //   isCharsVisible: isCharsVisible,
  //   hasScrolledInto: hasScrolledInto,
  //   isDetailsVisible: isDetailsVisible,
  // });

  return (
    <div
      className="relative flex h-full w-full justify-center items-center overflow-hidden bg-nightcord-110" // add this after debugging
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
      <CharacterDetails
        isDetailsVisible={isDetailsVisible}
        characterData={currentCharacter}
      />

      <div className="grid gap-10 grid-cols-4 h-full justify-center items-center">
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000`}
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
              className="w-full h-full transition-all duration-500 blur-sm char-box-shadow hover:blur-none hover:scale-105"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000`}
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
              className="w-full h-full transition-all duration-500 blur-sm char-box-shadow hover:blur-none hover:scale-105"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000`}
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
              className="w-full h-full transition-all duration-500 blur-sm char-box-shadow hover:blur-none hover:scale-105"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000`}
          style={handleShowingChars(-50)}
        >
          <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden">
            <div
              id="mizuki"
              style={{
                backgroundImage: "url('/mizuki.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleClose}
              className="w-full h-full transition-all duration-500 blur-sm char-box-shadow hover:blur-none hover:scale-105"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CharacterDetails({ isDetailsVisible, characterData }) {
  const videoRef = useRef();

  const introVideoDurationBarWidth = useCharSectionState(
    (state) => state.introVideoDurationBarWidth
  );
  const { setDurationBarWidth } = useCharSectionState();

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setDurationBarWidth(video);
  };

  useEffect(() => {
    // const video = videoRef.current;
    // setDurationBarWidth(video);
  }, [introVideoDurationBarWidth]);

  return (
    <div
      className={`DETAILS-CONTAINER absolute flex w-[70vw] h-full justify-center items-center ${
        isDetailsVisible ? "visible" : "invisible"
      }`}
    >
      <div className="w-[50%] h-full">
        <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
          <div
            style={{
              backgroundImage: `url('${characterData.image}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-full transition-all duration-500 detail-char-box-shadow hover:blur-none hover:scale-105"
          ></div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="w-full h-full">
          <div className="relative w-[80%] h-full">
            <div
              className={`absolute bottom-0 h-1 bg-nightcord-30`}
              style={{ width: `${introVideoDurationBarWidth}%` }}
            />
            <video
              ref={videoRef}
              src="/mizuki_intro.mp4"
              type="video/mp4"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
            ></video>
          </div>
        </div>
        <div>{characterData.firstName}</div>
        <div>{characterData.lastName}</div>
      </div>
    </div>
  );
}
