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
// layouts
import { SmoothSlider } from "../layouts/SmoothSliderLayout";
import { Parallax } from "../layouts/ParallaxLayout";

// components
import { ShowCase, CharInfo } from "../components/ShowCaseSection";
import { Menu, MenuButton } from "../components/Menu";
import { Animate, Animation } from "../components/Animation";
import { NavBar } from "../components/NavBar";
import { Slide } from "../components/Slider";
import { Intro } from "../components/IntroSection";
import { Video } from "../components/Video";
import { ParallaxObjects } from "../components/ParallaxObjects";

//////

import Head from "next/head";

export default function Home() {
  // const index = useSliderStore((state) => state.index);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-nightcord-110">
      <Head>
        <title>Nightcord</title>
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MenuButton />
      <Menu />
      <Parallax>
        <Animation>
          <ParallaxObjects />
        </Animation>
      </Parallax>
      <SmoothSlider>
        <Slide className="relative w-screen h-screen z-50 " offset={0}>
          <Intro />
          <Video />
        </Slide>
        <Slide className={`relative w-screen h-screen z-40`} offset={-100}>
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
