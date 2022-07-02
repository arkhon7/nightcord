import React from "react";
import { styleState, chooseStyleByState } from "./helper";
import { useShowCase } from "./ShowCaseContext";

import { BsMicFill } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";

const micButtonStyle = {
  active: "drop-shadow-30 text-nightcord-30 animate-pulse",
  inactive: "",
  paused: "text-nightcord-30",
};

interface ITalentWrapper {
  name: string;
  fullName: string;
  role: string;
  voice: string;
  description: string;
  audio: string;
  image: string;
  leftIds: string[];
  rightIds: string[];
  styleState: styleState;
}

type buttonState = "active" | "inactive" | "paused";
export const TalentWrapper = (props: ITalentWrapper) => {
  const showcase = useShowCase();
  const audio: React.RefObject<HTMLAudioElement> = React.useRef(null);
  const [micStatus, setMicStatus] = React.useState<buttonState>("inactive");

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
    showcase.setSelectedId(null);
    setMicStatus("inactive");
  };

  const styleByState = chooseStyleByState(
    showcase.activeId,
    showcase.selectedId,
    props.name,
    props.leftIds,
    props.rightIds,
    props.styleState
  );

  const chooseButtonStyle = (status: buttonState) => {
    if (status === "paused") {
      return micButtonStyle.paused;
    } else if (status === "active") {
      return micButtonStyle.active;
    } else {
      return micButtonStyle.inactive;
    }
  };

  return (
    <li
      className={`pointer-events-none absolute inline-block h-full w-[25%] ${styleByState}`}
    >
      <audio ref={audio} onEnded={() => setMicStatus("inactive")}>
        <source src={props.audio} />
      </audio>
      <div className="absolute left-[50%] top-[50%] z-20 w-[50vw] min-w-[300px] max-w-[500px] translate-x-[-50%] translate-y-[-50%]">
        <img src={props.image} />
      </div>

      <div className="pointer-events-auto absolute left-[50%] top-[50%] z-10 h-[45%] w-[calc((80vw*0.5625)-(80vw*0.0625))] min-w-[320px] translate-y-[-50%] text-nightcord-70 lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))]">
        <div
          className={`overflow-hidden ${
            showcase.selectedId === props.name
              ? "animate-[expand_300ms_ease-in-out_both_500ms]"
              : "animate-[shrink_500ms_ease-in-out_both]"
          } h-full`}
        >
          <div className="relative h-full w-full">
            <div className="absolute z-20 flex h-[25%] w-[60%] items-center justify-end bg-nightcord-30">
              <h1 className="fluid-font-md px-[2vw] font-brandon tracking-widest text-nightcord-70">
                {props.role.toUpperCase()}
              </h1>
            </div>
            <div className="absolute bottom-0 z-10 flex h-[87.5%] w-full flex-col items-end justify-evenly gap-[2vh] bg-nightcord-110  opacity-[.95]">
              <div className="flex h-[60%] w-[70%] flex-col justify-evenly gap-[0.5vw] pr-[2vw]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    <BsMicFill
                      onClick={handleAudio}
                      className={`${chooseButtonStyle(
                        micStatus
                      )} transition duration-500 hover:drop-shadow-30`}
                    />

                    <h3 className="fluid-font-xs text-left font-proxima">
                      {props.voice}
                    </h3>
                  </div>

                  <h3 className="fluid-font-md text-left font-brandon tracking-widest">
                    {props.fullName.toUpperCase()}
                  </h3>
                </div>

                <p className="fluid-font-xs font-proxima tracking-wide opacity-70">
                  {props.description}
                </p>
              </div>
            </div>
            <button
              className="absolute right-0 top-0 h-[calc(((60vh*0.45)*0.875)*0.125)] w-[calc(((60vh*0.45)*0.875)*0.125)]"
              onClick={handleResetResource}
            >
              <VscClose className="h-full w-full text-nightcord-30" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
