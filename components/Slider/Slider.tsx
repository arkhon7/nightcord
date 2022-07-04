import React from "react";
import { SliderContext } from "./SliderContext";
import { throttle } from "./helper";
import { useSliderStore } from "../../app/store";

export interface ISlide {
  className: string;
  children: React.ReactNode;
  offset: any;
  props?: {
    offset: any;
  };
}

export interface ISlider {
  className?: string;
  children?: any;
  interval?: number;
  direction?: "x" | "y";
  sliderStyle?: object;
  sliderClass?: string;
  style?: object;
}

type Point = {
  x: number | null;
  y: number | null;
};

export const Slider: React.FC<React.PropsWithChildren<ISlider>> = (
  props: ISlider
) => {
  // for tracking the pointer down event
  const [startPos, setStartPos] = React.useState<Point>({ x: 0, y: 0 });
  const [endPos, setEndPos] = React.useState<Point>({ x: 0, y: 0 });

  // const [currOffset, setCurrOffset] = React.useState<number>(0);

  const [index, setIndex] = React.useState(0);

  const getValidChildren = () => {
    const validChildren: ISlide[] = [];

    React.Children.forEach(props.children, (c) => {
      if (c.type.name !== undefined || c.type.name === "Slide") {
        validChildren.push(c);
      }
    });
    return validChildren;
  };

  const children = getValidChildren();
  const sliderStoreIndex = useSliderStore((state) => state.index);
  const sliderCurrOffset = useSliderStore((state) => state.currOffset);

  const setSliderStoreIndex = useSliderStore((state) => state.setIndex);
  const setCurrOffset = useSliderStore((state) => state.setCurrOffset);

  // track offset
  React.useEffect(() => {
    const currSlide: ISlide = children[index];
    if (currSlide.props !== undefined) {
      setCurrOffset(currSlide.props.offset);
      setSliderStoreIndex(index);
    }
  }, [index]);

  // remove this hook when isolating this component
  React.useEffect(() => {
    setIndex(sliderStoreIndex);
  }, [sliderStoreIndex]);

  const next = () => {
    setIndex((index) => {
      const maxIndex = children.length - 1;
      if (index + 1 > maxIndex) {
        setSliderStoreIndex(index);
        return index;
      } else {
        setSliderStoreIndex(index + 1);
        return index + 1;
      }
    });
  };

  const prev = () => {
    setIndex((index) => {
      if (index - 1 < 0) {
        setSliderStoreIndex(0);
        return 0;
      } else {
        setSliderStoreIndex(index - 1);
        return index - 1;
      }
    });
    // if (doneFirst !== true && index === 1) {
    //   setDoneFirst();
    // }
  };

  const slideTo = (index: number) => {
    setIndex(index);
  };

  // for handling the wheel events function (fix this on touch events)
  const changeSlideByWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      prev();
    } else if (e.deltaY >= 1) {
      next();
    }
  };

  // for handling the touch events
  const changeSlideByPointer = (startPos: Point, endPos: Point) => {
    const minimum = 30;
    if (endPos.y === null || endPos.x === null) return;

    if (startPos.y !== null) {
      if (startPos.y - endPos.y > minimum) {
        next();
      } else if (startPos.y - endPos.y < -minimum) {
        prev();
      }
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
    <SliderContext.Provider
      value={{ index: index, prev: prev, next: next, slideTo: slideTo }}
    >
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
            transform:
              props.direction === "y"
                ? `translateY(${sliderCurrOffset}vh)`
                : `translateX(${sliderCurrOffset}vw)`,
            ...props.sliderStyle,
          }}
          className={props.sliderClass}
        >
          {props.children}
        </div>
      </div>
    </SliderContext.Provider>
  );
};
// TODO
