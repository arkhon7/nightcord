import { useEffect, useState } from "react";

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsXLg,
  BsJustify,
  BsPlayCircleFill,
} from "react-icons/bs";

////// TSX Refactor
// layouts
import { SmoothSlider } from "../layouts/SmoothSliderLayout";
import { Parallax } from "../layouts/ParallaxLayout";

// components
// import { ShowCase, CharInfo } from "../components/ShowCaseSection";
import { ShowCase } from "../components/ShowCase";
import { Menu, MenuButton } from "../components/Menu";
import { Animate, Animation } from "../components/Animation";
import { NavBar } from "../components/NavBar";
import { Slide } from "../components/Slider";
import { Preface, IntroVideo } from "../components/Intro";

import { ParallaxObjects } from "../components/ParallaxObjects";

//////

import Head from "next/head";
import { AboutLayout, AboutSubLayout } from "../layouts/About";
import { AboutP, AboutVideo } from "../components/About";
import { Background } from "../components/Background";
import { IntroLayout } from "../layouts/Intro";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Head>
        <title>Nightcord</title>
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MenuButton />
      <Menu />
      <Background />
      {/* <Parallax>
        <Animation>
          <ParallaxObjects />
          
        </Animation>
      </Parallax> */}

      <SmoothSlider>
        <Slide className="relative w-screen h-screen z-50 " offset={0}>
          <IntroLayout>
            <Preface />
            <IntroVideo />
          </IntroLayout>
        </Slide>
        <Slide className={`relative w-screen h-screen z-40`} offset={-100}>
          <AboutLayout>
            <AboutSubLayout>
              <AboutVideo />
            </AboutSubLayout>
            <AboutSubLayout>
              <AboutP />
            </AboutSubLayout>
          </AboutLayout>
        </Slide>
        <Slide
          className="relative flex justify-center items-center w-screen h-screen z-50"
          offset={-200}
        >
          {/* <Animation>
            <ShowCase />
            <CharInfo />
          </Animation> */}
          <ShowCase />
        </Slide>
        <Slide
          className="flex justify-center items-center w-screen h-screen"
          offset={-300}
        >
          <div className="w-full h-full text-nightcord-60">
            SLIDER 4 UPLOADS TODO
          </div>
        </Slide>
        <Slide
          className="flex justify-center items-center w-screen h-screen"
          offset={-400}
        >
          <div className="w-full h-full text-nightcord-60">
            SLIDER 5 GALLERY TODO
          </div>
        </Slide>
        <Slide
          className="flex justify-center items-center w-screen h-[30vh]"
          offset={-430}
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
