import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const DrawerContext = createContext();

export function DrawerProvider(props) {
  const [open, setOpen] = useToggleState(false);
  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {props.children}
    </DrawerContext.Provider>
  );
}