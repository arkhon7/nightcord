import { useEffect, useRef, forwardRef } from "react";
import { useGlobalState, useCharSectionState } from "../app/store";
import Slider from "react-rangeslider";

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

  const sectionIndex = useGlobalState((state) => state.sectionIndex);
  const hasScrolledInto = useCharSectionState((state) => state.hasScrolledInto);
  const isDetailsVisible = useCharSectionState(
    (state) => state.isDetailsVisible
  );

  const isCharsVisible = useCharSectionState((state) => state.isCharsVisible);

  useEffect(() => {
    if (sectionIndex === 2) {
      initChars();
    }
  }, [sectionIndex]);

  const handleShowingChars = (transformVal) => {
    if (isCharsVisible && !hasScrolledInto) {
      return {
        transform: "translateY(0)",
        opacity: 1,
        transitionDelay: "1000ms",
        animationName: "charboxanim",
        animationDuration: "2s",
      };
    } else if (isCharsVisible && hasScrolledInto) {
      return {
        transform: "translateY(0)",
        opacity: 1,
        animationName: "charboxanim",
        animationDuration: "1s",
      };
    } else if (!isCharsVisible) {
      return {
        transform: `translateY(${transformVal}%)`,
        opacity: 0,
        pointerEvents: "none",
      };
    }
  };

  const handleCloseCharBox = (e) => {
    const { id } = e.target;
    specifyMemberData({ id: id, memberData: memberData });
    hideChars();
    showDetails();
  };

  const handleOpenCharBox = () => {
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
        className={`transition-all duration-1000 absolute left-2 top-2 w-20 h-20 bg-nightcord-30 ${
          isDetailsVisible ? "opacity-[1]" : "opacity-[0] pointer-events-none"
        }`}
        onClick={handleOpenCharBox}
      >
        BACK TO TALENTS
      </button>
      <CharacterDetails
        isDetailsVisible={isDetailsVisible}
        characterData={currentCharacter}
      />

      <div className="grid gap-10 grid-cols-4 h-full justify-center items-center">
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000 shadow-lg`}
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
              onClick={handleCloseCharBox}
              className="w-full h-full transition-all duration-500 blur-sm char-box-shadow hover:blur-none hover:scale-105"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000 shadow-lg`}
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
              onClick={handleCloseCharBox}
              className="w-full h-full transition-all duration-500 blur-sm char-box-shadow hover:blur-none hover:scale-105"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000 shadow-lg`}
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
              onClick={handleCloseCharBox}
              className="w-full h-full transition-all duration-500 blur-sm char-box-shadow hover:blur-none hover:scale-105"
            ></div>
          </div>
        </div>
        <div
          className={`w-[15vw] h-full transition-all ease-in-out duration-1000 shadow-lg`}
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
              onClick={handleCloseCharBox}
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

  const { durationValue, preDurationValue } = useCharSectionState(
    (state) => state
  );

  const { setDurationValue, setPreDurationValue } = useCharSectionState();

  // setDurationValue(0);

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
    const newDurationVal = (video.currentTime / video.duration) * 100;
    setDurationValue(newDurationVal);
  };

  // ADD THIS TO CHAR STATE

  useEffect(() => {
    const video = videoRef?.current;
    video.currentTime = 0;
    // setTimeout(() => {
    //   video.currentTime = 0;
    // }, 1000);
    video.pause();
  }, [isDetailsVisible]);

  const handleOnChange = (value) => {
    const video = videoRef.current;
    setPreDurationValue(value);
    setDurationValue(value);
    video.pause();
  };

  const handleOnComplete = () => {
    const video = videoRef.current;
    video.currentTime = (preDurationValue / 100) * video.duration;
    setDurationValue(preDurationValue);
    video.play();
  };

  return (
    <div
      className={`DETAILS-CONTAINER transition-all duration-500 absolute flex w-[70vw] h-full justify-center items-center ${
        isDetailsVisible ? "" : "bg-nightcord-110"
      }`}
    >
      <div
        className={`transition-all duration-1000 delay-500  w-[50%] h-full `}
      >
        <div
          className={`relative flex justify-center items-center w-full h-full overflow-hidden ${
            isDetailsVisible ? "opacity-[1]" : "opacity-[0]"
          }`}
        >
          <div
            style={{
              backgroundImage: `url('${characterData.image}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className={`w-full h-full opacity-50 detail-char-box-shadow ${
              isDetailsVisible ? "opacity-[1]" : "opacity-[0]"
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`w-[50%] ${
          isDetailsVisible
            ? "opacity-[1]"
            : "pointer-events-none delay-[0ms] opacity-[0]"
        }`}
      >
        <div className="w-full h-full">
          <div className="relative w-[80%] h-full">
            <Slider
              min={0}
              max={100}
              step={0.001}
              value={durationValue}
              onChange={handleOnChange}
              onChangeComplete={handleOnComplete}
            />

            <video
              ref={videoRef}
              src={characterData.video}
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
