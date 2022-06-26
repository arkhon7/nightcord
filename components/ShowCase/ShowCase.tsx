import React from "react";

const styles = {
  active: "transform duration-500 scale-110 drop-shadow-30 brightness-75",
  left: "transform duration-500 -translate-x-5 brightness-50",
  right: "transform duration-500 translate-x-5 brightness-50",
  inactive: "transform duration-500 translate-x-0 brightness-50",
};

export const ShowCase = () => {
  const [activeId, setActiveId] = React.useState<string>("");

  const getStyles = (activeId: string) => {
    if (activeId === "kanade") {
      return {
        kanade: styles.active,
        mafuyu: styles.right,
        ena: styles.right,
        mizuki: styles.right,
      };
    } else if (activeId === "mafuyu") {
      return {
        kanade: styles.left,
        mafuyu: styles.active,
        ena: styles.right,
        mizuki: styles.right,
      };
    } else if (activeId === "ena") {
      return {
        kanade: styles.left,
        mafuyu: styles.left,
        ena: styles.active,
        mizuki: styles.right,
      };
    } else if (activeId === "mizuki") {
      return {
        kanade: styles.left,
        mafuyu: styles.left,
        ena: styles.left,
        mizuki: styles.active,
      };
    } else {
      return {
        kanade: styles.inactive,
        mafuyu: styles.inactive,
        ena: styles.inactive,
        mizuki: styles.inactive,
      };
    }
  };

  const handleEnterHover = (e: React.SyntheticEvent<HTMLLIElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    const name = e.target.dataset.name;

    if (name !== undefined) {
      setActiveId(name);
      console.log("updated!");
    }
  };

  const handleLeaveHover = () => {
    setActiveId("");
  };

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <ul className="absolute flex justify-center items-center h-[80%] w-[50%] gap-3 z-20">
        <li
          className="w-full h-full"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          data-name={"kanade"}
        ></li>

        <li
          className="w-full h-full"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          data-name={"mafuyu"}
        ></li>

        <li
          className="w-full h-full"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          data-name={"ena"}
        ></li>

        <li
          className="w-full h-full"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
          data-name={"mizuki"}
        ></li>
      </ul>
      <ul className="absolute flex justify-center items-center h-[80%] w-[50%] gap-3 z-10">
        <li className="relative flex justify-center items-center w-full h-full">
          <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[450px]">
            <img
              src="./kanade-full.png"
              className={`${getStyles(activeId).kanade}`}
            />
          </div>
        </li>

        <li className="relative flex justify-center items-center w-full h-full">
          <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[450px]">
            <img
              src="./mafuyu-full.png"
              className={`${getStyles(activeId).mafuyu}`}
            />
          </div>
        </li>

        <li className="relative flex justify-center items-center w-full h-full">
          <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[450px]">
            <img
              src="./ena-full.png"
              className={`${getStyles(activeId).ena}`}
            />
          </div>
        </li>

        <li className="relative flex justify-center items-center w-full h-full">
          <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] w-[50vw] max-w-[450px]">
            <img
              src="./mizuki-full.png"
              className={`${getStyles(activeId).mizuki}`}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
