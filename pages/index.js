import { useEffect } from "react";

import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

import { SlideShow, Slide } from "../components/Slider";
import { CharacterSection } from "../components/CharacterSection";
import { Navbar } from "../components/NavBar";

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
// CONTINUE CHARACTER PART - REFACTOR THE OPENING/CLOSING CHARS MECHANISM IN ORDER TO FIX THE DELAY ON OPENING CHARS
// implement opening modal
