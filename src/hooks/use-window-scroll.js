import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [scrollValues, setScrollValues] = useState([
    window.scrollX,
    window.scrollY,
  ]);

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      setScrollValues([window.scrollX, window.scrollY]);
    });

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return scrollValues;
};

export default useWindowScroll;
