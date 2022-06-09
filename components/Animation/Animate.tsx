import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "./AnimationContext";

interface IAnimationProp {
  initial?: object;
  animate?: object;
  exit?: object;
}

interface IAnimationElement {
  children?: React.ReactNode;
  key?: string;
  className?: string;
  renderAnim?: IAnimationProp;
  persistAnim?: IAnimationProp;
}

export const Animate: React.FC<React.PropsWithChildren<IAnimationElement>> = ({
  className,
  children,
  key,
  renderAnim,
  persistAnim,
}: IAnimationElement) => {
  const animation = useAnimation();

  return (
    <AnimatePresence>
      {animation.active && (
        <motion.div
          key={`${key}-parent`}
          initial={renderAnim.initial}
          animate={renderAnim.animate}
          exit={renderAnim.exit}
          className={className}
        >
          {persistAnim ? (
            <motion.div
              key={`${key}-child`}
              initial={persistAnim.initial}
              animate={persistAnim.animate}
              exit={persistAnim.exit}
              style={{ width: "100%", height: "100%" }}
            >
              {children}
            </motion.div>
          ) : (
            <div style={{ width: "100%", height: "100%" }}>{children}</div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
