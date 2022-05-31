import { useGlobalState } from "../app/store";
import { VscListFlat } from "react-icons/vsc";

export function Navbar() {
  const { sectionIndex, isShowing } = useGlobalState((state) => state);

  const handleOpacity = (index) => {
    return index > 0 ? "" : "bg-nightcord-90 shadow-sm";
  };

  return (
    <div
      className={`fixed z-20 flex justify-between items-center px-5 w-full h-20 sm:h-16 md:h-14 lg:h-12 transform-all ease-in-out duration-700 delay-500 ${handleOpacity(
        sectionIndex
      )}`}
    >
      <div className="text-lg font-nightcord">{isShowing}</div>
      <VscListFlat className="w-10 h-10 sm:w-8 sm:h-8" />
    </div>
  );
}
