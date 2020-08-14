import { useState } from "react";

function useToggle(initialVal = false) {
  // call useState, "reserve piece of state"
  const [open, setState] = useState(initialVal);
  const setOpen = () => {
    setState(!open);
  };
  // return piece of state AND a function to toggle it
  return [open, setOpen];
}
export default useToggle;
