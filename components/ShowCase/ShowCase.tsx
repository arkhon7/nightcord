import React from "react";
import { VscClose } from "react-icons/vsc";
import { BsMicFill } from "react-icons/bs";

import useSound from "use-sound";

type styleState = {
  id: string;
  leftIds: string[] | null;
  rightIds: string[] | null;
  active: string;
  inactive: string;
  leftOfActive: string;
  rightOfActive: string;
  selected: string;
  unselected: string;
};

const mizukiStyles: styleState = {
  id: "mizuki",
  leftIds: ["ena", "mafuyu", "kanade"],
  rightIds: null,
  active:
    "transition duration-500 brightness-75 scale-105 translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
  inactive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
  leftOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.75+80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.75+992px*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.75-80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.75-992px*0.02)]",
  selected:
    "transition duration-500 brightness-[.9] translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[calc(60vh*0.05)] z-10",
  unselected:
    "transition duration-500 brightness-[.4] translate-x-[calc(80vw*0.75)] lg:translate-x-[calc(min(992px,80vw)*0.75)]",
};

const enaStyles: styleState = {
  id: "ena",
  leftIds: ["mafuyu", "kanade"],
  rightIds: ["mizuki"],
  active:
    "transition duration-500 brightness-75 scale-105 translate-x-[calc(80vw*0.5)] lg:translate-x-[calc(min(992px,80vw)*0.5)]",
  inactive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.5)] lg:translate-x-[calc(min(992px,80vw)*0.5)]",
  leftOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.5+80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.5+992px*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.5-80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.5-992px*0.02)]",
  selected:
    "transition duration-500 brightness-[.9] translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[10%] z-10",
  unselected:
    "transition duration-500 brightness-[.4] translate-x-[calc(80vw*0.5)] lg:translate-x-[calc(min(992px,80vw)*0.5)]",
};

const mafuyuStyles: styleState = {
  id: "mafuyu",
  leftIds: ["kanade"],
  rightIds: ["ena", "mizuki"],
  active:
    "transition duration-500 brightness-75 scale-105 translate-x-[calc(80vw*0.25)] lg:translate-x-[calc(min(992px,80vw)*0.25)]",
  inactive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.25)] lg:translate-x-[calc(min(992px,80vw)*0.25)]",
  leftOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.25+80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.25+992px*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.25-80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.25-992px*0.02)]",
  selected:
    "transition duration-500 brightness-[.9] translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[10%] z-10",
  unselected:
    "transition duration-500 brightness-[.4] translate-x-[calc(80vw*0.25)] lg:translate-x-[calc(min(992px,80vw)*0.25)]",
};

const kanadeStyles: styleState = {
  id: "kanade",
  leftIds: null,
  rightIds: ["mafuyu", "ena", "mizuki"],
  active: "transition duration-500 brightness-75 scale-105",
  inactive: "transition duration-500 brightness-[.6]",
  leftOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*0.02)] lg:translate-x-[calc(min(992px,80vw)*0.02)]",
  rightOfActive:
    "transition duration-500 brightness-[.6] translate-x-[calc(-(80vw*0.02))] lg:translate-x-[calc(-(min(992px,80vw)*0.02))]",
  selected:
    "transition duration-500 brightness-[.9] translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[10%] z-10",
  unselected: "transition duration-500 brightness-[.4]",
};

const getStyles = (
  activeId: string,
  targetId: string,
  styleState: styleState
) => {
  if (targetId !== "") {
    if (targetId === styleState.id) {
      return styleState.selected;
    } else {
      return styleState.unselected;
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

  const [currentSound, setCurrentSound] = React.useState<string>(""); // to specify audio to play
  const [playing, togglePlaying] = React.useState(false); // to determine if audio is playing or not

  const [play, { stop }] = useSound(`/assets/audio/mizuki.mp3`, {
    volume: 0.25,
  }); // TODO

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
    <div className={`relative flex h-full w-full items-center justify-center`}>
      <ul
        className={`absolute z-30 h-[60vh] w-[80vw] lg:max-w-[992px] ${
          targetId === "" ? "invisible sm:visible" : "invisible"
        }`}
      >
        <li
          className="absolute inline-block h-full w-[25%]"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"kanade"}
        ></li>

        <li
          className="absolute inline-block h-full w-[25%] translate-x-[calc(80vw*0.25)] 
          lg:translate-x-[calc(min(992px,80vw)*0.25)]"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"mafuyu"}
        ></li>

        <li
          className="absolute inline-block h-full w-[25%] translate-x-[calc(80vw*0.5)] 
          lg:translate-x-[calc(min(992px,80vw)*0.5)]"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"ena"}
        ></li>

        <li
          className="absolute inline-block h-full w-[25%] translate-x-[calc(80vw*0.75)]  
          lg:translate-x-[calc(min(992px,80vw)*0.75)]"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          onClick={handleClickActive}
          data-name={"mizuki"}
        ></li>
      </ul>
      <ul className="invisible relative z-10 h-[60vh]  w-[80vw] sm:visible lg:max-w-[992px]">
        <li
          className={`pointer-events-none absolute inline-block h-full w-[25%] ${getStyles(
            activeId,
            targetId,
            kanadeStyles
          )}`}
        >
          <div
            className="absolute left-[50%] top-[50%] w-[50vw] min-w-[300px] 
          max-w-[500px] translate-x-[-50%] translate-y-[-50%]"
          >
            <img src="./assets/image/kanade-full.png" />
          </div>
          <div
            className="pointer-events-auto absolute left-[50%] top-[50%] z-10 h-[45%]
           w-[calc((80vw*0.5625)-(80vw*0.0625))] translate-y-[-50%] text-nightcord-70 lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))]"
          >
            <div
              className={`overflow-hidden  ${
                targetId === "kanade"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative h-full w-full">
                <div className="absolute z-20 h-[25%] w-[60%] bg-nightcord-30">
                  <h1>YOISAKI KANADE</h1>
                </div>
                <div className="absolute bottom-0 z-10 h-[87.5%] w-full bg-nightcord-110 opacity-90"></div>
                <button
                  className="absolute right-0 top-0 h-[calc(((60vh*0.45)*0.875)*0.125)] w-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="h-full w-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={`pointer-events-none absolute inline-block h-full w-[25%] ${getStyles(
            activeId,
            targetId,
            mafuyuStyles
          )}`}
        >
          <div className="absolute left-[50%] top-[50%] z-20 w-[50vw] min-w-[300px] max-w-[500px] translate-x-[-50%] translate-y-[-50%]">
            <img src="./assets/image/mafuyu-full.png" />
          </div>
          <div className="pointer-events-auto absolute left-[50%] top-[50%] z-10 h-[45%] w-[calc((80vw*0.5625)-(80vw*0.0625))] translate-y-[-50%] text-nightcord-70 lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))]">
            <div
              className={`overflow-hidden  ${
                targetId === "mafuyu"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative h-full w-full">
                <div className="absolute z-20 h-[25%] w-[60%] bg-nightcord-30">
                  <h1>ASAHINA MAFUYU</h1>
                </div>
                <div className="absolute bottom-0 z-10 h-[87.5%] w-full bg-nightcord-110 opacity-90"></div>
                <button
                  className="absolute right-0 top-0 z-10 h-[calc(((60vh*0.45)*0.875)*0.125)] w-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="h-full w-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={`pointer-events-none absolute inline-block h-full w-[25%] ${getStyles(
            activeId,
            targetId,
            enaStyles
          )}`}
        >
          <div className="absolute left-[50%] top-[50%] z-20 w-[50vw] min-w-[300px] max-w-[500px] translate-x-[-50%] translate-y-[-50%]">
            <img src="./assets/image/ena-full.png" className="opacity-" />
          </div>
          <div className="pointer-events-auto absolute left-[50%] top-[50%] z-10 h-[45%] w-[calc((80vw*0.5625)-(80vw*0.0625))] translate-y-[-50%] text-nightcord-70 lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))]">
            <div
              className={`overflow-hidden  ${
                targetId === "ena"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative h-full w-full">
                <div className="absolute z-20 h-[25%] w-[60%] bg-nightcord-30">
                  <h1>SHINONOME ENA</h1>
                </div>
                <div className="absolute bottom-0 z-10 h-[87.5%] w-full bg-nightcord-110 opacity-90"></div>
                <button
                  className="absolute right-0 top-0 h-[calc(((60vh*0.45)*0.875)*0.125)] w-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="h-full w-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={`pointer-events-none absolute inline-block h-full w-[25%] ${getStyles(
            activeId,
            targetId,
            mizukiStyles
          )}`}
        >
          <div className="absolute left-[50%] top-[50%] z-20 w-[50vw] min-w-[300px] max-w-[500px] translate-x-[-50%] translate-y-[-50%]">
            <img src="./assets/image/mizuki-full.png" />
          </div>

          <div className="pointer-events-auto absolute left-[50%] top-[50%] z-10 h-[45%] min-h-[] w-[calc((80vw*0.5625)-(80vw*0.0625))] min-w-[290px] translate-y-[-50%] text-nightcord-70 lg:w-[calc((min(992px,80vw)*0.5625)-(min(992px,80vw)*0.0625))]">
            <div
              className={`overflow-hidden ${
                targetId === "mizuki"
                  ? "animate-[expand_300ms_ease-in-out_both_500ms]"
                  : "animate-[shrink_500ms_ease-in-out_both]"
              } h-full`}
            >
              <div className="relative h-full w-full">
                <div className="absolute z-20 flex h-[25%] w-[60%] items-center justify-end bg-nightcord-30">
                  <h1 className="fluid-font-md px-[2vw] font-brandon tracking-widest text-nightcord-70">
                    MV CREATOR
                  </h1>
                </div>
                <div className="absolute bottom-0 z-10 flex h-[87.5%] w-full flex-col items-end justify-evenly bg-nightcord-110 p-[2vw] opacity-[.95]">
                  <div className="flex w-[80%] justify-between">
                    <div className="flex items-center gap-2">
                      <BsMicFill
                        onClick={() => {
                          play();
                          console.log("playing!");
                        }}
                      />

                      <h3 className="fluid-font-xs font-proxima">
                        Satou Hinata
                      </h3>
                    </div>

                    <h3 className="fluid-font-md font-brandon tracking-widest">
                      AKIYAMA MIZUKI
                    </h3>
                  </div>

                  <p className="fluid-font-xs w-[80%] font-proxima tracking-wide opacity-70">
                    Akiyama Mizuki is a first year student at Kamiyama High
                    School. They're the animator of the underground music circle
                    25-ji, Nightcord de. — also known as Niigo (N25) — going by
                    the alias "Amia".
                  </p>
                </div>
                <button
                  className="absolute right-0 top-0 h-[calc(((60vh*0.45)*0.875)*0.125)] w-[calc(((60vh*0.45)*0.875)*0.125)]"
                  onClick={() => setTargetId("")}
                >
                  <VscClose className="h-full w-full text-nightcord-30" />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
