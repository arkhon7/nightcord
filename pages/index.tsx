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
import { Menu } from "../components/Menu/Menu";
import { NavBar } from "../components/NavBar";

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
    <div className="relative w-screen h-screen overflow-hidden">
      <NavBar />
      <MenuButton />
      <Menu />

      <SmoothSlider>
        <Slide className="relative w-screen h-screen z-50" offset={0}>
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
          <div className="w-full h-full text-nightcord-60">ABOUT</div>
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
          <div className="w-full h-full text-nightcord-60">
            SLIDER 4 UPLOADS
          </div>
        </Slide>
        <Slide
          className="flex justify-center items-center w-screen h-[30vh]"
          offset={-330}
        >
          <div className="w-full h-full text-nightcord-60">
            SLIDER 5 CREDITS
          </div>
        </Slide>
      </SmoothSlider>
    </div>
  );
}

/// TODO
