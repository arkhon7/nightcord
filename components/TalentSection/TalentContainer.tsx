import React, { CSSProperties } from "react";
import { useTalentSectionEventHandler } from "./EventHandlerContext";
import { BsMicFill } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { AudioState, ITalentContainer } from "./types";

const ensure = (cb: (id: string, index: number) => boolean) => {
  return (id: string | null, index: number | null) => {
    if (id !== null && index !== null) return cb(id, index);
    else return false;
  };
};

const isHovered = (id: string, index: number) => {
  const hoveredIndex = parseInt(id);
  return hoveredIndex === index ? true : false;
};

const isLeftHovered = (id: string, index: number) => {
  const hoveredIndex = parseInt(id);
  return hoveredIndex < index ? true : false;
};

const isRightHovered = (id: string, index: number) => {
  const hoveredIndex = parseInt(id);
  return hoveredIndex > index ? true : false;
};

const isSelected = (id: string, index: number) => {
  return parseInt(id) === index ? true : false;
};

export const TalentContainer: React.FC<ITalentContainer> = (props) => {
  const { selectedId, hoveredId, setSelectedId } =
    useTalentSectionEventHandler();

  const hovered = ensure(isHovered)(hoveredId, props.index);
  const leftHovered = ensure(isLeftHovered)(hoveredId, props.index);
  const rightHovered = ensure(isRightHovered)(hoveredId, props.index);
  const selected = ensure(isSelected)(selectedId, props.index);

  const placement = props.index / 4;
  const audio: React.RefObject<HTMLAudioElement> = React.useRef(null);

  const [micStatus, setMicStatus] = React.useState<AudioState>("inactive");

  const handleAudio: () => void = async () => {
    const currAudio = audio.current;

    if (currAudio !== null) {
      if (currAudio.paused && currAudio.currentTime >= 0) {
        currAudio.volume = 0.2;
        await currAudio.play();
        setMicStatus("active");
      } else {
        currAudio.pause();
        setMicStatus("paused");
      }
    }
  };

  const handleResetResource: () => void = () => {
    const currAudio = audio.current;
    if (currAudio !== null) {
      currAudio.currentTime = 0;
      currAudio.pause();
    }
    setMicStatus("inactive");
  };

  return (
    <div
      data-index={props.index}
      className={`absolute h-auto w-[25%] items-center justify-center transition duration-300
      ${
        selected
          ? "animate-[select_300ms_ease-in-out_both]"
          : "animate-[unselect_300ms_ease-in-out_both]"
      }`}
      style={(() => {
        if (selected) {
          return {
            transform: `translateX(calc(min(80vw,1000px) * 0.10)`,
          };
        } else if (hovered) {
          return {
            transform: `translateX(calc(min(80vw,1000px) * ${placement})`,
          };
        } else if (leftHovered) {
          return {
            transform: `translateX(calc(min(80vw,1000px) * ${placement} + 1.25rem)`,
          };
        } else if (rightHovered) {
          return {
            transform: `translateX(calc(min(80vw,1000px) * ${placement} - 1.25rem)`,
          };
        } else {
          return {
            transform: `translateX(calc(min(80vw,1000px) * ${placement})`,
          };
        }
      })()}
    >
      <audio ref={audio} onEnded={() => setMicStatus("inactive")}>
        <source src={props.data.audio} />
      </audio>
      <div className="relative flex h-[min(30vh,25vw)] w-full justify-center">
        <div className="pointer-events-none absolute top-[50%] left-[50%] z-20 h-auto w-[200%] translate-x-[-50%] translate-y-[-50%]">
          <img
            src={props.data.link}
            className={`transition duration-300`}
            style={(() => {
              if (selected) {
                return { transform: "scale(1.1)", filter: "brightness(1)" };
              } else if (hovered) {
                return {
                  transform: "scale(1.1)",
                  filter: "brightness(0.75)",
                };
              } else if (selectedId !== null && !selected) {
                return {
                  transform: "scale(0.9)",
                  filter: "brightness(0.25)",
                };
              } else {
                return {
                  transform: "scale(1)",
                  filter: "brightness(0.5)",
                };
              }
            })()}
          />
        </div>
        <div className="absolute z-10 flex h-full items-center justify-center">
          <div
            className="flex h-full items-center"
            style={{
              transform: "translateX(50%)",
              width:
                "calc(min(80vw,1000px) - ((min(80vw,1000px) * 0.10) + ((min(80vw,1000px) * 0.25) * 0.5)) * 2",
            }}
          >
            {(() => {
              return (
                <div
                  className={`h-full overflow-hidden ${
                    selected
                      ? "animate-[expand-width_300ms_ease-in-out_both_300ms]"
                      : "animate-[shrink-width_ease-in-out_both_300ms]"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <div className="absolute right-0 z-10 h-[15%]">
                      <VscClose
                        className="h-full w-full text-nightcord-30"
                        onClick={() => {
                          setSelectedId(null);
                          handleResetResource();
                        }}
                      />
                    </div>

                    <div className="absolute z-30 flex h-[30%] w-[70%] items-center justify-end bg-nightcord-30">
                      <h1 className="fluid-font-lg fluid-font px-[2vw] font-brandon tracking-widest text-nightcord-70">
                        {props.data.role.toUpperCase()}
                      </h1>
                    </div>
                    <div className="absolute bottom-0 z-20 flex h-[85%] w-full justify-end bg-nightcord-110">
                      <div
                        className={`absolute z-20 h-full w-full bg-nightcord-110 transition duration-300 ${
                          selected
                            ? "translate-y-[100%] delay-[900ms]"
                            : "translate-y-0"
                        }`}
                      ></div>
                      <div className="absolute z-10 flex h-full w-full justify-end overflow-hidden px-[2vw]">
                        <div className="absolute bottom-0 flex h-[80%] w-[65%] flex-col">
                          <div className="flex h-[30%] w-full px-2">
                            <div className="flex w-full items-center justify-evenly">
                              <span className="flex w-[50%] items-center">
                                <div className="px-1">
                                  <BsMicFill
                                    onClick={handleAudio}
                                    className={`${(() => {
                                      if (micStatus === "active") {
                                        return "animate-pulse text-nightcord-30";
                                      } else if (micStatus === "paused") {
                                        return "text-nightcord-30";
                                      } else {
                                        return "text-nightcord-70";
                                      }
                                    })()}`}
                                  />
                                </div>
                                <span className="flex gap-[10%]">
                                  <p className="fluid-font-xs fluid-font font-proxima tracking-wide text-nightcord-70 first-letter:capitalize">
                                    {props.data.VA.lastName}
                                  </p>
                                  <p className="fluid-font-xs fluid-font font-proxima tracking-wide text-nightcord-70 first-letter:capitalize">
                                    {props.data.VA.firstName}
                                  </p>
                                </span>
                              </span>
                              <span className="flex w-[50%] items-center">
                                <p className="fluid-font-md fluid-font break-words font-brandon tracking-widest text-nightcord-70">
                                  {props.data.lastName.toUpperCase() +
                                    " " +
                                    props.data.firstName.toUpperCase()}
                                </p>
                              </span>
                            </div>
                          </div>
                          <div className="flex h-[70%] w-full">
                            <p className="fluid-font-xs fluid-font font-proxima text-nightcord-70">
                              {props.data.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
