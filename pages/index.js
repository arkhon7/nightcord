import { useEffect, useState } from "react";

import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

// import { SlideShow, Slide } from "../components/Slider.js";
// import { CharacterSection } from "../components/CharacterSection";
// import { IntroVideo } from "../components/IntroVideo";
// import { Preloader } from "../components/Preloader";
// import { Navbar } from "../components/NavBar";

////// TSX Refactor
// components
import { Slider, Slide } from "../components/Slider";
import { Animation } from "../components/Animation";
import { ShowCase } from "../layouts/ShowCaseSection";

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
        className="relative flex justify-center items-center w-screen h-screen"
        offset={0}
      >
        <div className="fixed">SLIDER 0</div>
      </Slide>
      <Slide className="w-screen h-screen" offset={-100}>
        <Animation>
          <ShowCase />
        </Animation>
      </Slide>
      <Slide
        className="flex justify-center items-center w-screen h-screen"
        offset={-200}
      >
        <div className="fixed">SLIDER 2</div>
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
