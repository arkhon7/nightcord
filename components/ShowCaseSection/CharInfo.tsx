import React from "react";
import { useCharInfoStore, useShowCaseStore } from "../../app/store";
import { motion } from "framer-motion";

export const CharInfo: React.FC = () => {
  const charInfoActive = useCharInfoStore((state) => state.isActive);
  const closeCharInfo = useCharInfoStore((state) => state.close);
  const openShowCase = useShowCaseStore((state) => state.open);

  const handleBackButton = () => {
    closeCharInfo();
    openShowCase();
  };

  return (
    <div className="w-full h-full">
      <div
        className={`w-full h-full transition-all duration-1000 ${
          charInfoActive ? "delay-1000 opacity-100" : "opacity-0"
        }`}
      >
        <motion.div
          initial={{
            borderRadius: "64% 36% 58% 42% / 38% 71% 29% 62%",
          }}
          animate={{
            borderRadius: [
              "64% 36% 58% 42% / 38% 71% 29% 62%",
              "79% 21% 72% 28% / 59% 71% 29% 41% ",
              "69% 31% 72% 28% / 43% 56% 44% 57% ",
              "69% 31% 42% 58% / 43% 66% 34% 57% ",
              "64% 36% 58% 42% / 38% 71% 29% 62% ",
            ],
            transition: {
              duration: 5,
              repeat: Infinity,
            },
          }}
          className="bg-nightcord-30 w-[100px] h-[100px]"
          onClick={handleBackButton}
        >
          CLOSE
        </motion.div>
      </div>
    </div>
  );
};
