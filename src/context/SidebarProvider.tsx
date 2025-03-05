import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'

interface SidebarContext {
  isSidebarOpen: boolean,
  toggleMenuOpen: () => void
}

export const SidebarContext = createContext<SidebarContext | null>(null)

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const firstClick = useRef(false);

  const toggleMenuOpen = useCallback(() => {
    setIsSidebarOpen(p => {
      firstClick.current = p;
      return !p;
    })
  }, [setIsSidebarOpen])

  useEffect(() => {
    const controller = new AbortController();

    const handleResize = () => {
      if (isSidebarOpen && window.innerWidth > 768) {
        setIsSidebarOpen(false)
        firstClick.current = false;
      }
    };

    const handleClick = () => {
      if (isSidebarOpen) {
        if (!firstClick.current) {
          firstClick.current = true;
          return;
        }
        toggleMenuOpen();

      }
    }

    window.addEventListener("resize", handleResize, {
      signal: controller.signal,
    });

    window.addEventListener("click", handleClick, {
      signal: controller.signal,
    });


    handleResize();
    return () => {
      controller.abort();
    };
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleMenuOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider