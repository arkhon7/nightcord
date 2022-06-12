import { useEffect, useState } from "react";

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsXLg,
  BsJustify,
} from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

////// TSX Refactor
// components
import { Animation } from "../components/Animation";
import { Slide } from "../components/Slider";
import { SmoothSlider } from "../layouts/SmoothSliderLayout";
import { ShowCase, CharInfo } from "../components/ShowCaseSection";
import { MenuButton } from "../components/Menu/MenuButton";

//////

export async function getStaticProps() {
  const memberData = {
    mizuki: {
      firstName: "Mizuki",
      lastName: "Akiyama",
      voiceActor: "Satou Hinata",
      introVideoLink: "https://www.youtube.com/embed/u7vu0ubr_nM",
      position: "MV Creator",
      gender: "Unknown",
      birthday: "August 27",
      height: "163 cm",
      school: "Kamiyama High School 1-A",
      image: "/mizuki.png",
      imageFull: "/mizuki-full.png",
      video: "/mizuki_intro.mp4",
    },
    ena: {
      firstName: "Ena",
      lastName: "Shinonome",
      voiceActor: "Suzuki Minori",
      introVideoLink: "https://www.youtube.com/embed/u7vu0ubr_nM",
      position: "Illustrator",
      gender: "Female",
      birthday: "April 30",
      height: "158 cm",
      school: "Kamiyama High School 2-D",
      image: "/ena.png",
      imageFull: "/mizuki-full.png",
      video: "/ena_intro.mp4",
    },
    mafuyu: {
      firstName: "Mafuyu",
      lastName: "Asahina",
      voiceActor: "Satou Hinata",
      introVideoLink: "https://www.youtube.com/embed/u7vu0ubr_nM",
      position: "MV Creator",
      gender: "Unknown",
      birthday: "August 27",
      height: "163 cm",
      school: "Kamiyama High School 1-A",
      image: "/mafuyu.png",
      imageFull: "/mizuki-full.png",
      video: "/mafuyu_intro.mp4",
      // TODO
    },
    kanade: {
      firstName: "Kanade",
      lastName: "Akiyama",
      voiceActor: "Satou Hinata",
      introVideoLink: "https://www.youtube.com/embed/u7vu0ubr_nM",
      position: "MV Creator",
      gender: "Unknown",
      birthday: "August 27",
      height: "163 cm",
      school: "Kamiyama High School 1-A",
      image: "/kanade.png",
      imageFull: "/mizuki-full.png",
      video: "/kanade_intro.mp4",
      // TODO
    },
  };

  return {
    props: {
      memberData,
    },
  };
}

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <SmoothSlider>
        <Slide className="relative w-screen h-screen z-50" offset={0}>
          <nav className="absolute flex justify-between items-center z-30 w-screen h-[50px] p-3">
            <div className="flex items-center w-[120px] h-full">
              <div className="w-[18px] h-[18px] rhombus-clip bg-nightcord-30 mr-2"></div>
              <div className="font-nav text-sm text-center flex justify-center items-center  sm:text-lg">
                NIGHTCORD
              </div>
            </div>
            {/* <div className="relative w-[50px] h-[50px]">
              <BsJustify className="absolute w-[30px] h-[30px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" />
            </div> */}
            <MenuButton />
          </nav>
          <div className="absolute w-full h-full overflow-hidden flex justify-center items-center z-20">
            <video
              src="./aishite.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>
        </Slide>
        <Slide className="relative w-screen h-screen z-40" offset={-100}>
          <div className="w-full h-full">SLIDER 2</div>
        </Slide>
        <Slide
          className="relative flex justify-center items-center w-screen h-screen z-50"
          offset={-200}
        >
          <Animation>
            <ShowCase />
            <CharInfo />
          </Animation>
        </Slide>
        <Slide
          className="flex justify-center items-center w-screen h-screen"
          offset={-300}
        >
          <div className="fixed">SLIDER 3</div>
        </Slide>
        <Slide
          className="flex justify-center items-center w-screen h-[30vh]"
          offset={-330}
        >
          <div className="fixed">SLIDER 4</div>
        </Slide>
      </SmoothSlider>
    </div>
  );
}

/// TODO
