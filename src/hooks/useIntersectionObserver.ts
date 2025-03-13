import { useEffect, useRef, useState } from "react";

type IntersectionOptions = {
  threshold?: number;
  rootMargin?: string;
  onlyOnce?: boolean;
};

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = "0px",
  onlyOnce = true,
}: IntersectionOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const observedRef = useRef<HTMLElement | null>(null);

  const setRef = (element: HTMLElement | null) => {
    observedRef.current = element;
  };

  useEffect(() => {
    const currentRef = observedRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setHasAnimated(true);

          // Unobserve after intersection if onlyOnce is true
          if (onlyOnce) {
            observer.unobserve(currentRef);
          }
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, onlyOnce]);

  return { setRef, isIntersecting, hasAnimated };
};
