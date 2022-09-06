// import { useEffect, useState } from "react";

////// TSX Refactor
// layouts
import { SmoothSlider } from "../layouts/SmoothSliderLayout";

// components
import { Menu, MenuButton } from "../components/Menu";
import { NavBar } from "../components/NavBar";
import { Slide } from "../components/Slider";
import { Preface, IntroVideo } from "../components/Intro";

//////

import Head from "next/head";
import { AboutLayout, AboutSubLayout } from "../layouts/About";
import { AboutP, AboutVideo } from "../components/About";
import { Background } from "../components/Background";
import { IntroLayout } from "../layouts/Intro";
import { TalentSection } from "../components/TalentSection";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Head>
        <title>Nightcord</title>
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MenuButton />
      <Menu />
      <Background />
      <SmoothSlider>
        <Slide className="relative z-50 h-screen w-screen " offset={0}>
          <IntroLayout>
            <Preface />
            <IntroVideo />
          </IntroLayout>
        </Slide>
        <Slide className={`relative z-40 h-screen w-screen`} offset={-100}>
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
          className="relative z-50 flex h-screen w-screen items-center justify-center"
          offset={-200}
        >
          <TalentSection />
        </Slide>
        <Slide
          className="flex h-screen w-screen items-center justify-center"
          offset={-300}
        >
          <div className="h-full w-full text-nightcord-60">
            SLIDER 4 UPLOADS TODO
          </div>
        </Slide>
        <Slide
          className="flex h-screen w-screen items-center justify-center"
          offset={-400}
        >
          <div className="h-full w-full text-nightcord-60">
            SLIDER 5 GALLERY TODO
          </div>
        </Slide>
        <Slide
          className="flex h-[30vh] w-screen items-center justify-center"
          offset={-430}
        >
          <div className="h-full w-full text-nightcord-60">
            SLIDER 5 CREDITS
          </div>
        </Slide>
      </SmoothSlider>
    </div>
  );
}

/// TODO
