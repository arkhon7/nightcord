import { useEffect, useState } from "react";

import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

////// TSX Refactor
// components
import { Animation } from "../components/Animation";
import { Slider, Slide } from "../components/Slider";
import { ShowCase, BackDrop } from "../components/ShowCaseSection";
// states hooks

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

export default function Home({ memberData }) {
  return (
    <Slider
      className="w-screen h-screen"
      interval={1000}
      direction="y"
      sliderStyle={{
        transition: "all",
        transitionDuration: "1s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <Slide
        className="relative flex justify-center items-center w-screen h-screen z-50"
        offset={0}
      >
        <div className="w-full h-full bg-slate-600">SLIDER 0</div>
      </Slide>
      <Slide className="relative w-screen h-screen z-40" offset={-100}>
        <Animation>
          <ShowCase />
          <BackDrop />
        </Animation>
      </Slide>
      <Slide
        className="relative flex justify-center items-center w-screen h-screen z-50"
        offset={-200}
      >
        <div className="w-full h-full bg-slate-600">SLIDER 2</div>
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
    </Slider>
  );
}

/// TODO
