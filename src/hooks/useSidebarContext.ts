import { useContext } from "react";
import { SidebarContext } from "../context/SidebarProvider";

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("No Sidebar context was provided");
  }

  return context;
};
