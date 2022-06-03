import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePresenter } from "./store";

interface AnimationProp {
  from?: object;
  to?: object;
}

interface StageElementProp {
  className: string;
  children: React.ReactNode;
  key: string;
  onEnter: object;
  onExit: object;
  onPersist: AnimationProp;
}

export const StageElement: React.FC<StageElementProp> = ({
  className,
  children,
  onEnter,
  onExit,
  key,
}: StageElementProp) => {
  return (
    <motion.div
      key={`${key}-parent`}
      style={{ width: "fit-content", height: "fit-content" }}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
      exit={{ opacity: 0, x: -200 }}
    >
      <motion.div
        key={`${key}-child`}
        className={className}
        initial={{ x: 0, opacity: 1 }}
        animate={{
          x: [0, 50, -50, -50, 50, 0],
          transition: {
            delay: 1,
            duration: 3,
            repeat: Infinity,
          },
        }}
        exit={{ x: 0, opacity: 0, transition: { duration: 1 } }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
