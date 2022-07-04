import React from "react";
import { TalentWrapper } from "./TalentWrapper";
import { ShowCaseContext } from "./ShowCaseContext";

import { kanadeStyles, mafuyuStyles, enaStyles, mizukiStyles } from "./helper";

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
        className={`invisible relative flex h-full w-full items-center justify-center sm:visible`}
      >
        <ul
          className={`absolute z-30 h-[60vh] w-[80vw] lg:max-w-[992px] ${
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
        <ul className="relative z-10 h-[60vh]  w-[80vw] lg:max-w-[992px]">
          <TalentWrapper
            name="kanade"
            fullName="yoisaki kanade"
            role="composer"
            voice="Kusunoki Tomori"
            description={`Kanade is traumatized by a time when her own music caused despair to 
            someone important to her. Ever since that incident, she has been writing music to 
            make others happy, and started the music circle 25-ji, Nightcord de.`}
            audio="/assets/audio/kanade.mp3"
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
            audio="/assets/audio/mafuyu.mp3"
            image="/assets/image/mafuyu-full.png"
            leftIds={["kanade"]}
            rightIds={["ena", "mizuki"]}
            styleState={mafuyuStyles}
          />
          <TalentWrapper
            name="ena"
            fullName="shinonome ena"
            role="illustrator"
            voice="Suzuki Minori"
            description={`Ena's father was a famous artist. She often draws and posts her drawings online. 
            She has a great sense of social media and would like to get more popular.
            Yoisaki Kanade saw some of her illustrations online and invited her to join her circle as an illustrator.`}
            audio="/assets/audio/ena.mp3"
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
      <div className="visible absolute flex h-full w-full items-center justify-center sm:invisible">
        <div className="h-full w-full bg-nightcord-30">TODO</div>
      </div>
    </ShowCaseContext.Provider>
  );
};
