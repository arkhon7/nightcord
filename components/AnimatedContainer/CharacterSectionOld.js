import { useEffect, useRef } from "react";
import { useGlobalState, useCharSectionState } from "../app/store";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

///// Experimental

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
/////

export function CharacterSection({ memberData }) {
  const { initChars, currentCharacter } = useCharSectionState();
  const { isCharsVisible } = useCharSectionState((state) => state);
  const { sectionIndex } = useGlobalState((state) => state);

  useEffect(() => {
    if (sectionIndex === 2) {
      initChars();
    }
  }, [sectionIndex]);

  return (
    <div className="relative flex h-full w-full justify-center items-center overflow-hidden bg-nightcord-110">
      <div
        className={`absolute z-20 hidden grid-cols-4 w-full h-screen gap-[2%] px-[2.5%] justify-center items-center md:grid lg:max-w-[1100px] ${
          isCharsVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <AnimatePresence>
          {isCharsVisible && (
            <>
              <CharacterBox
                id={"Kanade"}
                imageSrc={"/kanade.png"}
                transformVal={"50vh"}
                memberData={memberData}
              />
              <CharacterBox
                id={"Mafuyu"}
                imageSrc={"/mafuyu.png"}
                transformVal={"-50vh"}
                memberData={memberData}
              />
              <CharacterBox
                id={"Ena"}
                imageSrc={"/ena.png"}
                transformVal={"50vh"}
                memberData={memberData}
              />
              <CharacterBox
                id={"Mizuki"}
                imageSrc={"/mizuki.png"}
                transformVal={"-50vh"}
                memberData={memberData}
              />
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute z-20 md:hidden w-full h-full">
        <Swiper
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
              <img
                className="w-full h-auto transition-all duration-500"
                src={"/kanade.png"}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
              <img
                className="w-full h-auto transition-all duration-500"
                src={"/mafuyu.png"}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
              <img
                className="w-full h-auto transition-all duration-500"
                src={"/ena.png"}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
              <img
                className="w-full h-auto transition-all duration-500"
                src={"/mizuki.png"}
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <CharacterDetails characterData={currentCharacter} />
    </div>
  );
}

function CharacterBox({ id, imageSrc, transformVal, memberData }) {
  const {
    specifyMemberData,
    showDetails,
    hideChars,
    cleanMemberData,
    hasScrolledInto,
    isDetailsVisible,
    isCharsVisible,
  } = useCharSectionState();

  const { toggleSliderActive } = useGlobalState();

  const handleCloseCharBox = (e) => {
    cleanMemberData();
    toggleSliderActive();
    const { id } = e.target;
    specifyMemberData({ id: id, memberData: memberData });
    hideChars();
    showDetails();
  };

  const handleAnimateCharBox = (transformValue) => {
    if (isCharsVisible) {
      return {
        y: "0",
        opacity: 1,
      };
    } else if (!isCharsVisible) {
      return {
        y: transformValue,
        opacity: 0,
      };
    }
  };

  const handleTransCharBox = () => {
    const bounce = 5;
    const duration = 1;
    const delay = 1;
    const stiffness = 40;
    const type = "spring";

    if (!hasScrolledInto) {
      return {
        type: type,
        bounce: bounce,
        stiffness: stiffness,
        delay: delay,
        duration: duration,
      };
    } else {
      if (!isDetailsVisible) {
        return {
          type: type,
          bounce: bounce,
          stiffness: stiffness,
          delay: delay - 0.5,
          duration: duration,
        };
      } else {
        return {
          type: "spring",
          bounce: bounce,
          stiffness: stiffness - 15,
          duration: duration,
        };
      }
    }
  };

  return (
    <motion.div
      className={`w-full h-full`}
      initial={{ y: transformVal, opacity: 0 }}
      exit={{ y: transformVal, opacity: 0 }}
      animate={handleAnimateCharBox("-50vh")}
      transition={handleTransCharBox()}
    >
      <div className="CHARBAR relative flex justify-center items-center w-full h-full overflow-hidden lg:w-[228px]">
        <div
          id={id}
          onClick={handleCloseCharBox}
          className="relative w-full h-full char-box-shadow group char-box-img"
        >
          <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[512px] h-auto overflow-hidden">
            <img
              className="w-full h-auto transition-all duration-500 group-hover:scale-110"
              src={imageSrc}
            ></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CharacterDetails({ characterData }) {
  const { videoModalVisible, isDetailsVisible, currentCharacter } =
    useCharSectionState((state) => state);

  const { hideDetails, showChars } = useCharSectionState();
  const { toggleSliderActive } = useGlobalState();

  const detailsHolderRef = useRef();

  const handleOpenCharBox = () => {
    toggleSliderActive();
    hideDetails();
    showChars();
  };

  useEffect(() => {
    if (detailsHolderRef !== null) {
      detailsHolderRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentCharacter]);

  return (
    <div
      className={`absolute z-10 flex w-full h-full justify-center items-center detail-char-box-shadow`}
    >
      {(() => {
        if (videoModalVisible) {
          return <VideoModal />;
        }
      })()}
      <div
        className={`transition-all duration-1000 absolute z-30 bg-nightcord-110  w-full h-full ${
          isDetailsVisible
            ? "delay-500 opacity-[0] pointer-events-none"
            : "opacity-[1]"
        }`}
      ></div>

      <button
        className={`transition-all duration-1000 absolute z-10 left-2 top-2 w-20 h-20 bg-nightcord-30 ${
          isDetailsVisible
            ? "opacity-[1] visible"
            : "opacity-[0] pointer-events-none invisible"
        }`}
        onClick={handleOpenCharBox}
      >
        BACK TO TALENTS
      </button>
      <div
        ref={detailsHolderRef}
        className="flex flex-wrap w-full h-full overflow-auto"
      >
        <div className="flex justify-center items-center w-full h-full md:w-[50%]">
          <AnimatePresence>
            {isDetailsVisible && (
              <motion.div
                initial={{ y: "-100vh", opacity: 0 }}
                exit={{
                  y: "-100vh",
                  opacity: 0,
                  transition: {
                    duration: 2.5,
                  },
                }}
                animate={{
                  y: "0",
                  opacity: 1,
                  // y: ["0vh", "1vh", "-1.2vh", "0vh"],
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 20,
                  delay: 1,
                  duration: 2.5,
                }}
              >
                <div className="flex w-full h-full justify-center items-center">
                  <div
                    className="w-[500px] h-[500px] overflow-hidden"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  >
                    <img
                      src={characterData.image}
                      className="object-center object-cover"
                    ></img>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full h-full md:w-[50%]"></div>
      </div>
      <div className="absolute bg-gradient-to-b from-transparent to-nightcord-110 h-full w-full pointer-events-none">
        <img
          src={characterData.imageFull}
          className="absolute z-[-1] blur-sm opacity-10 object-cover object-top grayscale-[100%] h-full w-full"
        ></img>
      </div>
    </div>
  );
}

function VideoModal() {
  const { toggleVideoModal } = useCharSectionState();
  const handleCloseModal = () => {
    toggleVideoModal();
  };
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
