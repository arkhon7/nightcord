import React from "react";
import { motion } from "framer-motion";

interface AnimationProp {
  initial?: object;
  animate?: object;
  exit?: object;
}

interface AnimationElementProp {
  children?: React.ReactNode;
  key?: string;
  className?: string;
  renderAnim?: AnimationProp;
  persistAnim?: AnimationProp;
}

export const AnimatedElement: React.FC<
  React.PropsWithChildren<AnimationElementProp>
> = ({
  className,
  children,
  key,
  renderAnim,
  persistAnim,
}: AnimationElementProp) => {
  return (
    <motion.div
      key={`${key}-parent`}
      style={{ width: "fit-content", height: "fit-content" }}
      initial={renderAnim.initial}
      animate={renderAnim.animate}
      exit={renderAnim.exit}
    >
      {persistAnim ? (
        <motion.div
          className={className}
          key={`${key}-child`}
          initial={persistAnim.initial}
          animate={persistAnim.animate}
          exit={persistAnim.exit}
        >
          {children}
        </motion.div>
      ) : (
        <div className={className}>{children}</div>
      )}
    </motion.div>
  );
};
