import { useRef, useState, useEffect } from "react";
import { useProductContext } from "../hooks/useProductContext";
import cn from "../utils/cn";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Details = () => {
  const { product } = useProductContext();
  const [currentSection, setCurrentSection] = useState(0);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [allowScroll, setAllowScroll] = useState(true);

  const detailsRef = useRef<HTMLElement>(null);
  const isScrolling = useRef(false);
  const totalSections = product.sections?.length || 0;

  if (!product.sections || product.sections.length === 0) {
    return null;
  }

  // Use effect to add a non-passive wheel event listener to prevent scrolling
  useEffect(() => {
    const preventDefaultScroll = (e: WheelEvent) => {
      if (!allowScroll && isMouseInside) {
        e.preventDefault();
      }
    };

    // This is the key fix: adding a non-passive wheel event listener
    window.addEventListener("wheel", preventDefaultScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventDefaultScroll);
    };
  }, [allowScroll, isMouseInside]);

  const goToSection = (index: number) => {
    if (index >= 0 && index < totalSections && !isScrolling.current) {
      isScrolling.current = true;
      setCurrentSection(index);

      setTimeout(() => {
        isScrolling.current = false;
      }, 500); // Match the transition duration
    }
  };

  // Force scroll to details section
  const scrollToDetails = () => {
    if (detailsRef.current) {
      const headerHeight = 80;
      window.scrollTo({
        top: detailsRef.current.offsetTop + headerHeight,
        behavior: "smooth",
      });
    }
  };

  // Handle mouse wheel events
  const handleWheel = (e: React.WheelEvent) => {
    // Handle first and last section differently
    if (
      (currentSection === 0 && e.deltaY < 0) ||
      (currentSection === totalSections - 1 && e.deltaY > 0)
    ) {
      // Allow normal scrolling when at boundaries
      setAllowScroll(true);
      return;
    }

    // Prevent default for mid-sections
    setAllowScroll(false);

    if (!isScrolling.current) {
      if (e.deltaY > 0) {
        // Scrolling down
        if (currentSection < totalSections - 1) {
          goToSection(currentSection + 1);
          scrollToDetails();
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (currentSection > 0) {
          goToSection(currentSection - 1);
          scrollToDetails();
        }
      }
    }
  };

  return (
    <section
      ref={detailsRef}
      id="details"
      className="relative h-screen max-h-[1440px] lg:h-screen bg-gradient-to-b from-gray-light to-gray-dark overflow-hidden mb-0"
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      onWheel={handleWheel}
    >
      <div className="relative w-full h-full">
        {product.sections.map((section, index) => (
          <div
            key={index}
            className={cn(
              "absolute top-0 left-0 w-full h-full [transition:transform_0.5s,opacity_0.5s] ease-in-out",
              "flex flex-col lg:flex-row items-center max-lg:pb-24",
              index === currentSection ? "opacity-100 z-20" : "opacity-0 z-10",
            )}
            style={{
              transform: `translateY(${(index - currentSection) * 100}%)`,
            }}
          >
            <div className="w-full lg:w-1/2 xs:h-1/2 flex-1 lg:h-full flex items-center justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-contain object-center p-4 lg:p-8"
              />
            </div>
            <div className="w-full lg:w-1/2 h-fit lg:h-full p-6 lg:p-16 flex flex-col justify-center gap-6">
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-garamond font-extrabold px-6 py-4 text-gray-lightest inline-block relative z-10">
                  {section.title}
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-900/60 rounded-lg blur-[1px] z-0"></div>
                <div className="absolute inset-0 bg-gray-darkest/70 rounded-lg backdrop-blur-sm z-5"></div>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gray-darkest/60 backdrop-blur-sm z-0"></div>
                <p className="relative z-10 xs:text-lg md:text-xl leading-relaxed text-gray-lightest p-4">
                  {section.text}
                </p>
                <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left side navigation dots */}
      <div className="absolute left-2 xs:left-6 top-1/4 xs:top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-6">
        {product.sections.map((_, index) => (
          <div
            key={index}
            className={cn(
              "relative after:absolute after:h-12 after:w-1",
              "after:left-1/2 after:top-3/4 after:-translate-x-1/2",
              "not-last-of-type:after:bg-gray-dark after:-z-10",
              "last-of-type:after:bg-gradient-to-b after:from-gray-dark after:to-transparent"
            )}
            aria-label={`Go to section ${index + 1}`}
          >
            <button
              onClick={() => {
                goToSection(index);
                scrollToDetails();
              }}
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-200 cursor-pointer z-10 border border-gray-dark",
                currentSection === index
                  ? "bg-blue-600 scale-125 after:scale-85"
                  : "bg-gray-400/50 hover:bg-gray-600",
              )}
            ></button>
          </div>
        ))}
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-4 px-6 py-3 bg-gray-lightest bg-opacity-80 backdrop-blur-md rounded-full shadow-lg">
        <button
          onClick={() => {
            goToSection(currentSection - 1);
            scrollToDetails();
          }}
          className={cn(
            "p-2 rounded-full transition-colors duration-200 ease-in-out cursor-pointer",
            currentSection === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-800 hover:bg-gray-200",
          )}
          disabled={currentSection === 0}
        >
          <ArrowLeft size={20} />
        </button>
        <span className="font-medium text-base whitespace-nowrap">
          {currentSection + 1} / {totalSections}
        </span>
        <button
          onClick={() => {
            goToSection(currentSection + 1);
            scrollToDetails();
          }}
          className={cn(
            "p-2 rounded-full transition-colors duration-200 ease-in-out cursor-pointer",
            currentSection === totalSections - 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-800 hover:bg-gray-200",
          )}
          disabled={currentSection === totalSections - 1}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Details;