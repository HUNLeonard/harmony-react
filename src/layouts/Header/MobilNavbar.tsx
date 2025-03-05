import cn from "../../utils/cn";
import { useSidebarContext } from "../../hooks/useSidebarContext";

const MobilNavbar = () => {
  const { isSidebarOpen, toggleMenuOpen } = useSidebarContext();

  return (
    <button
      onClick={toggleMenuOpen}
      className={cn("md:hidden",
        "relative grid place-content-center rounded-4xl",
        "transition-colors duration-200 bg-primary cursor-pointer",
        "px-6 py-1 border overflow-hidden max-h-[calc(var(--header-height)*0.7)]",
        "text-lg after:text-lg",
        "after:bg-gray-dark after:h-full after:absolute after:transition-all after:duration-400 after:ease-in-out",
        "after:w-full after:-top-0 after:content-['Close'] after:text-white",
        "after:grid after:place-content-center after:rounded-4xl after:p-1 after:border",
        "",
        isSidebarOpen
          ? "after:left-0 border-transparent"
          : "after:left-full "
      )}>
      Menu
    </button>

  );
};

export default MobilNavbar;
