import React from "react";
import { useBackDropStore, useShowCaseStore } from "../../app/store";

export const BackDrop: React.FC = () => {
  const backDropActive = useBackDropStore((state) => state.isActive);
  const closeBackDrop = useBackDropStore((state) => state.close);
  const openShowCase = useShowCaseStore((state) => state.open);

  const handleBackButton = () => {
    console.log("pressing back btn");
    closeBackDrop();
    openShowCase();
  };

  return (
    <div className="w-full h-full bg-nightcord-110">
      <div
        className={`w-full h-full transition-all duration-1000 ${
          backDropActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="bg-nightcord-30 w-[300px] h-[300px]"
          onClick={handleBackButton}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};
