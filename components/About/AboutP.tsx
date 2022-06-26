import React from "react";

export const AboutP = () => {
  return (
    <div className="w-full h-full flex justify-center md:justify-start md:items-center">
      <div className="min-w-[360px] max-w-[496px] p-5">
        <div className="flex flex-col gap-[3vh] items-center">
          <img src="/favicon-310.png" width={"10%"} height={"10%"}></img>

          <div className="text-center fluid-font about-font-val font-proxima font-normal tracking-widest text-nightcord-70">
            <q>
              An underground music circle that makes songs on the internet at
              1:00 AM.
            </q>
          </div>
          <div className="relative flex items-center after:absolute after:content-[''] after:w-[15px] after:h-[15px] after:right-[10%] after:hover:translate-x-[5px] after:bg-nightcord-30 after:clip-triangle after:transition after:duration-500">
            <button className="px-12 py-2 border-2 border-nightcord-30">
              <a className="text-nightcord-70 fluid-font readbtn-font-val font-proxima font-thin tracking-widest">
                Our Talents
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
