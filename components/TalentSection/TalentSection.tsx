import React from "react";

import { EventHandlerContext } from "./EventHandlerContext";
import { TalentContainer } from "./TalentContainer";
import { TalentData } from "./types";

export const TalentSection: React.FC = () => {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const handleMouseEnter = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const index = e.currentTarget.dataset.index;
    if (index === undefined) return;
    setHoveredId(index);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const index = e.currentTarget.dataset.index;
    if (index === undefined) return;
    setSelectedId(index);
  };

  const talents: TalentData[] = [
    {
      firstName: "kanade",
      lastName: "yoisaki",
      nickName: "K",
      VA: { firstName: "tomori", lastName: "kusunoki" },
      role: "composer",
      link: "/assets/image/kanade-full.png",
      color: "#BB6588",
      description: `Kanade is traumatized by a time when her own music caused despair to 
      someone important to her. Ever since that incident, she has been writing music to 
      make others happy, and started the music circle 25-ji, Nightcord de.`,
      audio: "/assets/audio/kanade.mp3",
    },
    {
      firstName: "mafuyu",
      lastName: "asahina",
      nickName: "yuki",
      VA: { firstName: "rui", lastName: "tanabe" },
      role: "lyricist",
      link: "/assets/image/mafuyu-full.png",
      color: "#8889CC",
      description: `Mafuyu is an honor student, and the only one who in her
    group who regularly attends school. However, not all is what it seems with her...`,
      audio: "/assets/audio/mafuyu.mp3",
    },
    {
      firstName: "ena",
      lastName: "shinonome",
      nickName: "enanan",
      VA: { firstName: "minori", lastName: "suzuki" },
      role: "illustrator",
      link: "/assets/image/ena-full.png",
      color: "#CCAA87",
      description: `Ena's father was a famous artist. She often draws and posts her drawings online. 
    She has a great sense of social media and would like to get more popular.
    Yoisaki Kanade saw some of her illustrations online and invited her to join her circle as an illustrator.`,
      audio: "/assets/audio/ena.mp3",
    },
    {
      firstName: "mizuki",
      lastName: "akiyama",
      nickName: "amia",
      VA: { firstName: "hinata", lastName: "satou" },
      role: "MV Creator",
      link: "/assets/image/mizuki-full.png",
      color: "#E4A8CA",
      description: `Mizuki likes to uploads MVs online. They were captivated by Yoisaki Kanade's music upon listening to it. 
      Kanade saw the MVs Mizuki made and invited them to her circle.
      Mizuki has a secret no one in the circle knows about.`,
      audio: "/assets/audio/mizuki.mp3",
    },
  ];

  return (
    <EventHandlerContext.Provider
      value={{
        hoveredId: hoveredId,
        selectedId: selectedId,
        setHoveredId: setHoveredId,
        setSelectedId: setSelectedId,
      }}
    >
      <main className="relative flex h-full w-full items-center justify-center">
        {selectedId === null && (
          <section className="absolute z-20 flex h-full w-[min(80vw,1000px)] items-center justify-start ">
            {talents.map((data, index) => {
              const placement = index / 4;

              return (
                <div
                  className="absolute h-auto w-[25%] items-center justify-center"
                  style={{
                    transform: `translateX(calc(min(80vw,1000px) * ${placement})`,
                  }}
                >
                  <div
                    data-index={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    className="relative flex h-auto w-full"
                  >
                    <div className="pointer-events-auto h-[min(50vw,640px)] w-full"></div>
                  </div>
                </div>
              );
            })}
          </section>
        )}
        <section className="absolute z-10 flex h-full w-[min(80vw,1000px)] items-center justify-start">
          {talents.map((data, index) => {
            return <TalentContainer data={data} index={index} />;
          })}
        </section>
      </main>
    </EventHandlerContext.Provider>
  );
};
