import React from "react";
import { SliderContext } from "./SliderContext";
import { throttle } from "./helper";

interface ISlide extends React.ReactElement {
  offset: any;
}

interface ISliderChildren extends React.ReactElement {
  props: ISlide;
}

interface ISlider {
  className?: string;
  children?: ISliderChildren;
  interval?: number;
  direction?: "x" | "y";
  sliderStyle?: object;
  style?: object;
}

type Point = {
  x: number;
  y: number;
};

export const Slider: React.FC<React.PropsWithChildren<ISlider>> = (
  props: ISlider
) => {
  // for tracking the pointer down event
  const [startPos, setStartPos] = React.useState<Point>({ x: null, y: null });
  const [endPos, setEndPos] = React.useState<Point>({ x: null, y: null });

  const [currOffset, setCurrOffset] = React.useState<number>(0);
  const [index, setIndex] = React.useState(0);

  // track offset
  React.useEffect(() => {
    const currSlide: ISlide = props.children[index];
    console.log(currSlide);
    setCurrOffset(currSlide.props.offset);
  }, [index]);

  const next = () => {
    setIndex((index) => {
      const maxIndex = React.Children.count(props.children) - 1;
      if (index + 1 > maxIndex) {
        return index;
      } else {
        return index + 1;
      }
    });
  };

  const prev = () => {
    setIndex((index) => {
      if (index - 1 < 0) {
        return 0;
      } else {
        return index - 1;
      }
    });
  };

  // for handling the wheel events function
  const changeSlideByWheel = (e: React.WheelEvent) => {
    if (e.deltaY === -100) {
      prev();
    } else {
      next();
    }
  };

  // for handling the touch events
  const changeSlideByPointer = (startPos: Point, endPos: Point) => {
    const minimum = 50;
    if (endPos.y === null || endPos.x === null) return;

    console.log(startPos.y, endPos.y, startPos.y - endPos.y);
    if (startPos.y - endPos.y > minimum) {
      next();
    } else if (startPos.y - endPos.y < -minimum) {
      prev();
    }
  };

  // for throttling wheel events
  const throttledWheelSlide = React.useRef(
    throttle((e: React.WheelEvent) => {
      changeSlideByWheel(e);
    }, props.interval)
  );

  const throttledPointerSlide = React.useRef(
    throttle((startPos: Point, endPos: Point) => {
      changeSlideByPointer(startPos, endPos);
    }, props.interval)
  );

  // Event handlers
  const handleWheelEvent = (e: React.WheelEvent<HTMLDivElement>) => {
    throttledWheelSlide.current(e);
  };

  const handlePointerDownEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    setEndPos({ x: null, y: null });
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMoveEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    setEndPos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerLeaveEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    throttledPointerSlide.current(startPos, endPos);
  };

  // helpers

  return (
    <SliderContext.Provider value={{ index: index, prev: prev, next: next }}>
      <div
        className={props.className}
        onWheel={handleWheelEvent}
        onPointerMove={handlePointerMoveEvent}
        onPointerDown={handlePointerDownEvent}
        onPointerLeave={handlePointerLeaveEvent}
        style={{ overflow: "hidden", ...props.style, touchAction: "none" }}
      >
        <div
          style={{
            display: "grid",
            // gridTemplateColumns: "100vw 100vw 100vw 100vw 30vw",
            transform:
              props.direction === "y"
                ? `translateY(${currOffset}vh)`
                : `translateX(${currOffset}vw)`,
            ...props.sliderStyle,
          }}
        >
          {props.children}
        </div>
      </div>
    </SliderContext.Provider>
  );
};
// TODO
// - add support for direction
