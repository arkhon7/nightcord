import { useEffect, useState } from "react";

import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

import { SlideShow, Slide } from "../components/Slider";
import { CharacterSection } from "../components/CharacterSection";
import { IntroVideo } from "../components/IntroVideo";
import { Preloader } from "../components/Preloader";
import { Navbar } from "../components/NavBar";

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
    <div className="relative w-full h-full">
      <Preloader />
      <Navbar />
      <SlideShow width={"100vw"} height={"100vh"} direction={"y"}>
        <Slide transformValueY={0} className="bg-nightcord-20 w-full h-screen">
          <div className="flex h-full w-full justify-center items-center">
            <IntroVideo />
          </div>
        </Slide>
        <Slide
          transformValueY={100}
          className="bg-nightcord-30 w-full h-screen"
        >
          <div className="flex h-full w-full justify-center items-center bg-nightcord-110">
            <div className="font-nightcord max-w-[400px] max-h-[200px] text-center text-nightcord-30 bg-nightcord-70 text-xl overflow-hidden typewriter">
              &ldquo;An underground music circle that operates at 1&#58;00 AM
              (25:00)&#44; and whose identities are shrouded in
              mystery&#46;&rdquo;
              {/* <div className="relative inline-flex w-[2px] h-5 left-0 bg-nightcord-70"></div> */}
            </div>
          </div>
        </Slide>
        <Slide
          transformValueY={100}
          className="bg-nightcord-30 w-full h-screen"
        >
          <CharacterSection memberData={memberData} />
        </Slide>
        <Slide
          transformValueY={100}
          className="bg-nightcord-40 w-full h-screen"
        >
          <div className="flex h-full w-full justify-center items-center bg-nightcord-110 text-nightcord-70">
            FEED
          </div>
        </Slide>
        <Slide
          transformValueY={30}
          className="bg-nightcord-110 w-full h-screen shadow-xl shadow-nightcord-110"
        >
          <div className="flex h-[30vh] w-full justify-center items-center">
            FOOTER
          </div>
        </Slide>
      </SlideShow>
    </div>
  );
}

/// TODO
