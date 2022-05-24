import React from "react";

export function IntroVideo() {
  return (
    <div className="w-full h-full overflow-hidden">
      <video muted={true} className="w-full h-full object-cover">
        <source src="/aishite.mp4"></source>
      </video>
    </div>
  );
}
