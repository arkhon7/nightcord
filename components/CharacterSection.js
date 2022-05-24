import { useEffect } from "react";
import { useGlobalState, useCharSectionState } from "../app/store";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";

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

  const { sectionIndex } = useGlobalState((state) => state);
  const { hasScrolledInto, isDetailsVisible, isCharsVisible } =
    useCharSectionState((state) => state);

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
        transitionDelay: "1000ms",
        animationName: "charboxanim",
        animationDuration: "2s",
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
      <div
        className={`absolute z-20 grid grid-cols-4 w-full h-full justify-center items-center px-[10px] gap-3 sm:w-full md:gap-6 md:w-full lg:gap-7 lg:w-[1024px] xl:gap-8 ${
          isCharsVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`w-full h-full transition-all ease-in-out duration-1000`}
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
              className="w-full h-full transition-all duration-500 char-box-shadow hover:scale-105 bg-[length:500px] sm:bg-[length:525px] md:bg-[length:550px] lg:bg-[length:600px]"
            ></div>
          </div>
        </div>
        <div
          className={`w-full h-full transition-all ease-in-out duration-1000`}
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
              className="w-full h-full transition-all duration-500 char-box-shadow hover:scale-105 bg-[length:500px] sm:bg-[length:525px] md:bg-[length:550px] lg:bg-[length:600px]"
            ></div>
          </div>
        </div>
        <div
          className={`w-full h-full transition-all ease-in-out duration-1000`}
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
              className="w-full h-full transition-all duration-500 char-box-shadow hover:scale-105 bg-[length:500px] sm:bg-[length:525px] md:bg-[length:550px] lg:bg-[length:600px]"
            ></div>
          </div>
        </div>
        <div
          className={`w-full h-full transition-all ease-in-out duration-1000`}
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
              className="w-full h-full transition-all duration-500 char-box-shadow hover:scale-105 bg-[length:500px] sm:bg-[length:525px] md:bg-[length:550px] lg:bg-[length:600px]"
            ></div>
          </div>
        </div>
      </div>

      <CharacterDetails
        isDetailsVisible={isDetailsVisible}
        characterData={currentCharacter}
        handleOpenCharBox={handleOpenCharBox}
      />
    </div>
  );
}

function CharacterDetails({
  isDetailsVisible,
  characterData,
  handleOpenCharBox,
}) {
  const { toggleVideoModal } = useCharSectionState();
  const videoModalVisible = useCharSectionState(
    (state) => state.videoModalVisible
  );

  const handleCloseModal = () => {
    console.log(videoModalVisible);
    toggleVideoModal();
  };

  return (
    <div
      className={`absolute z-10 flex w-full h-full justify-center items-center detail-char-box-shadow`}
    >
      {(() => {
        if (videoModalVisible) {
          return (
            <div className="absolute z-20 w-full h-full bg-nightcord-110 bg-opacity-[0.8]">
              <div
                className="absolute z-20 translate-x-[-50%] translate-y-[-50%] top-[22%] left-[71%]"
                onClick={handleCloseModal}
              >
                <AiOutlineClose className="fixed z-20 w-[40px] h-[40px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" />
              </div>

              <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] max-w-[768px] max-h-[432px] w-full h-full">
                <iframe
                  // width="1280"
                  // height="720"
                  src="https://www.youtube.com/embed/u7vu0ubr_nM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full z-10"
                ></iframe>
              </div>
            </div>
          );
        }
      })()}
      <div
        className={`transition-all duration-1000 absolute z-30 bg-nightcord-110  w-full h-full ${
          isDetailsVisible
            ? "delay-1000 opacity-[0] pointer-events-none"
            : "opacity-[1]"
        }`}
      ></div>

      <button
        className={`transition-all duration-1000 absolute z-10 left-2 top-2 w-20 h-20 bg-nightcord-30 ${
          isDetailsVisible ? "opacity-[1]" : "opacity-[0] pointer-events-none"
        }`}
        onClick={handleOpenCharBox}
      >
        BACK TO TALENTS
      </button>

      <div className={`flex transition-all duration-1000 w-[70%] h-full`}>
        <div className={`flex justify-center items-center w-[50%] h-full`}>
          <div className="w-full h-full py-10 px-2">
            <div
              id="mizuki"
              style={{
                backgroundImage: "url('/mizuki-full.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-full h-full p-6"
            ></div>
          </div>
        </div>
        <div className={`flex justify-center items-center w-[50%] h-full`}>
          <div className="w-full h-full py-10 px-2">
            <div>{characterData.firstName}</div>
            <div>{characterData.lastName}</div>
            <div>{characterData.voiceActor}</div>
            <VideoProxy src={characterData.introVideoLink} />
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-transparent to-nightcord-110 h-full w-full pointer-events-none">
        <img
          src="/bg_school_refusal.png"
          className="absolute z-[-1] blur-md opacity-30 object-none h-full w-full"
        ></img>
      </div>
    </div>
  );
}

function VideoProxy() {
  const { toggleVideoModal } = useCharSectionState();

  const handleButtonClick = () => {
    toggleVideoModal();
  };

  return (
    <div className="relative w-[500px] h-[300px] group">
      <div className="absolute z-0 w-full h-full overflow-hidden border-4 border-nightcord-40 rounded-lg">
        <div
          style={{
            backgroundImage: "url('/mizuki-cover.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="transition-all duration-500 w-full h-full group-hover:scale-105"
        ></div>
      </div>
      <div className="absolute flex justify-center items-center z-10 transition-all duration-500 w-full h-full group-hover:opacity-[0.8]">
        <AiFillPlayCircle
          className="w-20 h-20 text-nightcord-40"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}
