import React from "react";
import { useSlider } from "./store";

interface SliderProp {
  className: string;
  children: React.ReactNode;
  interval: number;
  direction: "x" | "y";
  sliderStyle: object;
  style: object;
}

interface Point {
  x: number;
  y: number;
}

const throttle = (cb: any, delay: number = 500) => {
  let shouldWait = false;

  return (...arg: any) => {
    if (shouldWait) return;

    cb(...arg);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};

export const Slider: React.FC = ({
  className,
  children,
  interval,
  direction,
  sliderStyle,
  style,
}: SliderProp) => {
  // for tracking the pointer down event

  const [startPos, setStartPos] = React.useState<Point>({
    x: 0,
    y: 0,
  });

  const [currOffset, setCurrOffset] = React.useState<number>(0);

  const { index, next, prev, setMaxIndex } = useSlider();

  // track offset
  React.useEffect(() => {
    setCurrOffset(children[index].props.offset);
  }, [index]);

  // Initialize state
  React.useEffect(() => {
    setMaxIndex(React.Children.count(children) - 1);
  }, []);

  // for handling the wheel events function
  const changeSlideByWheel = (e: React.WheelEvent) => {
    if (e.deltaY === -100) {
      prev();
    } else {
      next();
    }
  };

  // for handling the touch events
  const changeSlideByPointer = (startPos: Point, e: React.PointerEvent) => {
    const endPos: Point = { x: e.clientX, y: e.clientY };

    if (startPos.y - endPos.y < 1) {
      prev();
    } else if (startPos.y - endPos.y > 1) {
      next();
    }
  };

  // for throttling wheel events
  const throttledWheelSlide = React.useRef(
    throttle((e: React.WheelEvent) => {
      changeSlideByWheel(e);
    }, interval)
  );

  const throttledPointerSlide = React.useRef(
    throttle((startPos: Point, e: React.PointerEvent) => {
      changeSlideByPointer(startPos, e);
    }, interval)
  );

  // Event handlers
  const handleWheelEvent = (e: React.WheelEvent<HTMLDivElement>) => {
    throttledWheelSlide.current(e);
  };

  const handlePointerDownEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMoveEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    throttledPointerSlide.current(startPos, e);
  };

  // helpers

  return (
    <div
      className={className}
      onWheel={handleWheelEvent}
      onPointerMove={handlePointerMoveEvent}
      onPointerDown={handlePointerDownEvent}
      style={{ overflow: "hidden", ...style }}
    >
      <div
        style={{
          transform:
            direction === "y"
              ? `translateY(${currOffset}vh)`
              : `translateX(${currOffset}vw)`,
          ...sliderStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

// TODO
// - add option for units
// - add attributes for further styling
// add support for direction
