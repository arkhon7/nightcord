import React from "react";

export const AboutP = () => {
  return (
    <div className="flex h-full w-full justify-center md:items-center md:justify-start">
      <div className="min-w-[360px] max-w-[496px] p-5">
        <div className="flex flex-col items-center gap-[3vh]">
          <img src="/favicon-310.png" width={"10%"} height={"10%"}></img>

          <div className="fluid-font about-font-val text-center font-proxima font-normal tracking-widest text-nightcord-70">
            <q>
              An underground music circle that makes songs on the internet at
              1:00 AM.
            </q>
          </div>
          <div className="relative flex items-center after:absolute after:right-[10%] after:h-[15px] after:w-[15px] after:bg-nightcord-30 after:transition after:duration-500 after:content-[''] after:clip-triangle after:hover:translate-x-[5px]">
            <button className="border-2 border-nightcord-30 px-12 py-2">
              <a className="fluid-font readbtn-font-val font-proxima font-thin tracking-widest text-nightcord-70">
                Our Talents
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
