import { useEffect } from "react";

import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

import { SlideShow, Slide } from "../components/Slider";
import { CharacterSection } from "../components/CharacterSection";
import { IntroVideo } from "../components/IntroVideo";
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
      image: "/mizuki.png",
    },
    ena: {
      firstName: "Ena",
      lastName: "Shinonome",
      voiceActor: "Suzuki Minori",
      introVideoLink: "https://www.youtube.com/watch?v=u7vu0ubr_nM",
      position: "Illustrator",
      gender: "Female",
      birthday: "April 30",
      height: "158 cm",
      school: "Kamiyama High School 2-D",
      image: "/ena.png",
    },
    mafuyu: {
      firstName: "Mizuki",
      lastName: "Akiyama",
      voiceActor: "Satou Hinata",
      introVideoLink: "https://www.youtube.com/watch?v=u7vu0ubr_nM",
      position: "MV Creator",
      gender: "Unknown",
      birthday: "August 27",
      height: "163 cm",
      school: "Kamiyama High School 1-A",
      image: "/mafuyu.png",
      // TODO
    },
    kanade: {
      firstName: "Mizuki",
      lastName: "Akiyama",
      voiceActor: "Satou Hinata",
      introVideoLink: "https://www.youtube.com/watch?v=u7vu0ubr_nM",
      position: "MV Creator",
      gender: "Unknown",
      birthday: "August 27",
      height: "163 cm",
      school: "Kamiyama High School 1-A",
      image: "/kanade.png",
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
    <div className="w-full h-full">
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
          <div className="flex h-full w-full justify-center items-center">
            FEED
          </div>
        </Slide>
        <Slide
          transformValueY={100}
          className="bg-nightcord-40 w-full h-screen"
        >
          <CharacterSection memberData={memberData} />
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
