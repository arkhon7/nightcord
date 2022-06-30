import React, { SetStateAction } from "react";
import { VscClose } from "react-icons/vsc";
import { BsMicFill } from "react-icons/bs";

import useSound from "use-sound";
import { TalentWrapper } from "./TalentWrapper";

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
    "transition duration-500 brightness-[.6] translate-x-[calc(80vw*-0.02)] lg:translate-x-[calc(min(992px,80vw)*-0.02)]",
  selected:
    "transition duration-500 brightness-[.9] translate-x-[calc(80vw*0.0625)] lg:translate-x-[calc(min(992px,80vw)*0.0625)] scale-125 translate-y-[10%] z-10",
  unselected: "transition duration-500 brightness-[.4]",
};

interface IShowCaseContext {
  activeId: string | null;
  setActiveId: React.Dispatch<SetStateAction<string | null>>;
  selectedId: string | null;
  setSelectedId: React.Dispatch<SetStateAction<string | null>>;
}

const ShowCaseContext = React.createContext<IShowCaseContext>({
  activeId: null,
  setActiveId: () => {},
  selectedId: null,
  setSelectedId: () => {},
});

export const useShowCase = () => React.useContext(ShowCaseContext);

const getStyles = (
  activeId: string,
  selectedId: string,
  styleState: styleState
) => {
  if (selectedId !== "") {
    if (selectedId === styleState.id) {
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
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const handleClickActive = (e: React.SyntheticEvent<HTMLLIElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    const name = e.target.dataset.name;

    if (name !== undefined) {
      setSelectedId(name);
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
    <ShowCaseContext.Provider
      value={{
        activeId: activeId,
        selectedId: selectedId,
        setActiveId: setActiveId,
        setSelectedId: setSelectedId,
      }}
    >
      <div
        className={`relative flex h-full w-full items-center justify-center`}
      >
        <ul
          className={`invisible absolute z-30 h-[60vh] w-[80vw] sm:visible lg:max-w-[992px] ${
            selectedId === null ? "pointer-events-auto" : "pointer-events-none"
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
          <TalentWrapper
            name="kanade"
            fullName="yoisaki kanade"
            role="composer"
            voice="Kusunoki Tomori"
            description={`Kanade is traumatized by a time when her own music caused despair to 
            someone important to her. Ever since that incident, she has been writing music to 
            make others happy, and started the music circle 25-ji, Nightcord de.`}
            audio="/assets/audio/mizuki-lower-cover.mp3"
            image="/assets/image/kanade-full.png"
            leftIds={[]}
            rightIds={["mafuyu", "ena", "mizuki"]}
            styleState={kanadeStyles}
          />
          <TalentWrapper
            name="mafuyu"
            fullName="asahina mafuyu"
            role="lyricist"
            voice="Tanabe Rui"
            description={`Mafuyu is an honor student, and the only one who in her 
            group who regularly attends school. However, not all is what it seems with her...`}
            audio="/assets/audio/mizuki-lower-cover.mp3"
            image="/assets/image/mafuyu-full.png"
            leftIds={["kanade"]}
            rightIds={["ena", "mizuki"]}
            styleState={mafuyuStyles}
          />
          <TalentWrapper
            name="ena"
            fullName="shinonome ena"
            role="artist"
            voice="Suzuki Minori"
            description={`Ena's father was a famous artist. She often draws and posts her drawings online. 
            She has a great sense of social media and would like to get more popular.
            Yoisaki Kanade saw some of her illustrations online and invited her to join her circle as an illustrator.`}
            audio="/assets/audio/mizuki-lower-cover.mp3"
            image="/assets/image/ena-full.png"
            leftIds={["kanade", "mafuyu"]}
            rightIds={["mizuki"]}
            styleState={enaStyles}
          />
          <TalentWrapper
            name="mizuki"
            fullName="akiyama mizuki"
            role="mv creator"
            voice="Satou Hinata"
            description={`Mizuki likes to uploads MVs online. They were captivated by Yoisaki Kanade's music upon listening to it. 
            Kanade saw the MVs Mizuki made and invited them to her circle.

            Mizuki has a secret no one in the circle knows about.`}
            audio="/assets/audio/mizuki.mp3"
            image="/assets/image/mizuki-full.png"
            leftIds={["ena", "mafuyu", "kanade"]}
            rightIds={[]}
            styleState={mizukiStyles}
          />
        </ul>
      </div>
    </ShowCaseContext.Provider>
  );
};
