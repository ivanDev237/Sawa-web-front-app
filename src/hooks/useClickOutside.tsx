import { useEffect, RefObject } from "react";

// Typage de la fonction useClickOutside
export const useClickOutside = (
  refs: RefObject<HTMLElement>[], // Tableau de références vers des éléments HTML
  callback: (event: MouseEvent) => void // Callback qui prend un événement de type MouseEvent
) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      );

      if (isOutside && typeof callback === "function") {
        callback(event);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback, refs]);
};
