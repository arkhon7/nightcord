import React from "react";
import { VscClose } from "react-icons/vsc";

type styleState = {
  id: string;
  leftIds: string[] | null;
  rightIds: string[] | null;
  active: string;
  inactive: string;
  leftOfActive: string;
  rightOfActive: string;
  selected: string;
};

const mizukiStyles: styleState = {
  id: "mizuki",
  leftIds: ["ena", "mafuyu", "kanade"],
  rightIds: null,
  active:
    "transition duration-500 brightness-75 scale-105 translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
  inactive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
  leftOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.75+80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.75+992px*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.75-80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.75-992px*0.02)]",
  selected:
    "transition duration-500 brightness-75 translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[10%] z-[9999]",
};

const enaStyles: styleState = {
  id: "ena",
  leftIds: ["mafuyu", "kanade"],
  rightIds: ["mizuki"],
  active:
    "transition duration-500 brightness-75 scale-105 translate-x-[calc(80vw*0.5)] lg:translate-x-[calc(min(992px,80vw)*0.5)]",
  inactive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.5)] lg:translate-x-[calc(min(992px,80vw)*0.5)]",
  leftOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.5+80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.5+992px*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.5-80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.5-992px*0.02)]",
  selected:
    "transition duration-500 brightness-75 translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125  translate-y-[10%] z-[9999]",
};

const mafuyuStyles: styleState = {
  id: "mafuyu",
  leftIds: ["kanade"],
  rightIds: ["ena", "mizuki"],
  active:
    "transition duration-500 brightness-75 scale-105 translate-x-[calc(80vw*0.25)] lg:translate-x-[calc(min(992px,80vw)*0.25)]",
  inactive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.25)] lg:translate-x-[calc(min(992px,80vw)*0.25)]",
  leftOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.25+80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.25+992px*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.25-80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.25-992px*0.02)]",
  selected:
    "transition duration-500 brightness-75 translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[10%] z-[9999]",
};

const kanadeStyles: styleState = {
  id: "kanade",
  leftIds: null,
  rightIds: ["mafuyu", "ena", "mizuki"],
  active: "transition duration-500 brightness-75 scale-105",
  inactive: "transition duration-500 brightness-50",
  leftOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-50 translate-x-[calc(-80vw*0.02)] lg:translate-x-[calc(-min(992px,80vw)*0.02)]",
  selected:
    "transition duration-500 brightness-75 translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[10%] z-[9999]",
};

const getStyles = (
  activeId: string,
  targetId: string,
  styleState: styleState
) => {
  console.log("rerender!");
  if (targetId !== "") {
    if (targetId === styleState.id) {
      return styleState.selected;
    } else {
      return styleState.inactive;
    }
  } else {
    if (activeId === styleState.id) {
      return styleState.active;
    } else if (styleState.leftIds?.includes(activeId)) {
      return styleState.leftOfActive;
    } else if (styleState.rightIds?.includes(activeId)) {
      return styleState.rightOfActive;
    } else {
      return styleState.inactive;
    }
  }
};

export const ShowCase = () => {
  const [activeId, setActiveId] = React.useState<string>("");
  const [targetId, setTargetId] = React.useState<string>("");

  const handleClickActive = (e: React.SyntheticEvent<HTMLLIElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    const name = e.target.dataset.name;

    if (name !== undefined) {
      setTargetId(name);
    }
  };

  const handleEnterHover = (e: React.SyntheticEvent<HTMLLIElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    const name = e.target.dataset.name;

    if (name !== undefined) {
      setActiveId(name);
    }
  };

  const handleLeaveHover = () => {
    setActiveId("");
  };

  //styles

  return (
    <div
      className={`main showcase relative flex justify-center items-center w-full h-full`}
    >
      <ul
        className={`absolute h-[60vh] w-[80vw] z-20 lg:max-w-[992px] ${
          targetId === "" ? "invisible sm:visible" : "invisible"
        }`}
      >
        <li
          className="inline-block w-[25%] h-full absolute"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"kanade"}
        ></li>

        <li
          className="inline-block w-[25%] h-full absolute translate-x-[calc(80vw*0.25)] lg:translate-x-[calc(min(992px,80vw)*0.25)]"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"mafuyu"}
        ></li>

        <li
          className="inline-block w-[25%] h-full absolute translate-x-[calc(80vw*0.5)] lg:translate-x-[calc(min(992px,80vw)*0.5)]"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"ena"}
        ></li>

        <li
          className="inline-block w-[25%] h-full absolute translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"mizuki"}
        ></li>
      </ul>
      <ul className="absolute h-[60vh] w-[80vw] invisible sm:visible z-10 lg:max-w-[992px]">
        <li
          className={`pointer-events-none inline-block w-[25%] h-full absolute ${getStyles(
            activeId,
            targetId,
            kanadeStyles
          )}`}
        >
          <div className="absolute z-20 translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] min-w-[300px] max-w-[500px]">
            <img src="./kanade-full.png" />
          </div>
          <div className="pointer-events-auto absolute z-10 translate-y-[-50%] left-[50%] top-[50%] w-[calc((80vw*0.5625)-(80vw*0.0625))] lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))] h-[45%] text-nightcord-70">
            <div
              className={`overflow-hidden  ${
                targetId === "kanade"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative w-full h-full">
                <div className="absolute z-20 w-[60%] h-[25%] bg-nightcord-30">
                  <h1>YOISAKI KANADE</h1>
                </div>
                <div className="absolute z-10 w-full h-[87.5%] bottom-0 opacity-90 bg-nightcord-110"></div>
                <button
                  className="absolute right-0 top-0 w-[calc(((60vh*0.45)*0.875)*0.125)] h-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="w-full h-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={`pointer-events-none inline-block w-[25%] h-full absolute ${getStyles(
            activeId,
            targetId,
            mafuyuStyles
          )}`}
        >
          <div className="absolute z-20 translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] min-w-[300px] max-w-[500px]">
            <img src="./mafuyu-full.png" />
          </div>
          <div className="pointer-events-auto absolute z-10 translate-y-[-50%] left-[50%] top-[50%] w-[calc((80vw*0.5625)-(80vw*0.0625))] lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))] h-[45%] text-nightcord-70">
            <div
              className={`overflow-hidden  ${
                targetId === "mafuyu"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative w-full h-full">
                <div className="absolute z-20 w-[60%] h-[25%] bg-nightcord-30">
                  <h1>ASAHINA MAFUYU</h1>
                </div>
                <div className="absolute z-10 w-full h-[87.5%] bottom-0 opacity-90 bg-nightcord-110"></div>
                <button
                  className="absolute right-0 top-0 w-[calc(((60vh*0.45)*0.875)*0.125)] h-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="w-full h-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={`pointer-events-none inline-block w-[25%] h-full absolute ${getStyles(
            activeId,
            targetId,
            enaStyles
          )}`}
        >
          <div className="absolute z-20 translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] min-w-[300px] max-w-[500px]">
            <img src="./ena-full.png" className="opacity-" />
          </div>
          <div className="pointer-events-auto absolute z-10 translate-y-[-50%] left-[50%] top-[50%] w-[calc((80vw*0.5625)-(80vw*0.0625))] lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))] h-[45%] text-nightcord-70">
            <div
              className={`overflow-hidden  ${
                targetId === "ena"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative w-full h-full">
                <div className="absolute z-20 w-[60%] h-[25%] bg-nightcord-30">
                  <h1>SHINONOME ENA</h1>
                </div>
                <div className="absolute z-10 w-full h-[87.5%] bottom-0 opacity-90 bg-nightcord-110"></div>
                <button
                  className="absolute right-0 top-0 w-[calc(((60vh*0.45)*0.875)*0.125)] h-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="w-full h-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={`pointer-events-none inline-block w-[25%] h-full absolute ${getStyles(
            activeId,
            targetId,
            mizukiStyles
          )}`}
        >
          <div className="absolute z-20 translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] min-w-[300px] max-w-[500px]">
            <img src="./mizuki-full.png" />
          </div>

          <div className="pointer-events-auto absolute z-10 translate-y-[-50%] left-[50%] top-[50%] w-[calc((80vw*0.5625)-(80vw*0.0625))] lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))] h-[45%] text-nightcord-70">
            <div
              className={`overflow-hidden  ${
                targetId === "mizuki"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative w-full h-full">
                <div className="absolute z-20 w-[60%] h-[25%] bg-nightcord-30">
                  <h1>AKIYAMA MIZUKI</h1>
                </div>
                <div className="absolute z-10 w-full h-[87.5%] bottom-0 opacity-90 bg-nightcord-110"></div>
                <button
                  className="absolute right-0 top-0 w-[calc(((60vh*0.45)*0.875)*0.125)] h-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="w-full h-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
