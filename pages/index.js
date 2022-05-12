import { useEffect } from "react";

import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

import { SlideShow, Slide } from "../components/Slider";
import { CharacterSection } from "../components/CharacterSection";
import { Navbar } from "../components/NavBar";

export async function getStaticProps() {
  const memberData = {
    mizuki: {
      firstName: "Mizuki",
      lastName: "Akiyama",
      voiceActor: "Satou Hinata",
      introVideoLink: "https://www.youtube.com/watch?v=u7vu0ubr_nM",
      position: "MV Creator",
      gender: "Unknown",
      birthday: "August 27",
      height: "163 cm",
      school: "Kamiyama High School 1-A",
    },
    // TODO: add other mem data
  };

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <SlideShow width={"100vw"} height={"100vh"} direction={"y"}>
        <Slide transformValueY={0} className="bg-nightcord-20 w-full h-screen">
          <div className="flex h-full w-full justify-center items-center">
            INTRO
          </div>
        </Slide>
        <Slide
          transformValueY={100}
          className="bg-nightcord-30 w-full h-screen"
        >
          <div className="flex h-full w-full justify-center items-center">
            FEED
          </div>
        </Slide>
        <Slide
          transformValueY={100}
          className="bg-nightcord-40 w-full h-screen"
        >
          <CharacterSection />
        </Slide>
        <Slide transformValueY={30} className="bg-nightcord-40 w-full h-screen">
          <div className="flex h-[30vh] w-full justify-center items-center">
            FOOTER
          </div>
        </Slide>
      </SlideShow>
    </div>
  );
}

/// TODO
