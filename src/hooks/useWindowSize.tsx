import { useEffect, useState } from "react";

type windowSizeType = {
  width: number;
  height: number;
};
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  function resize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => removeEventListener("resize", resize);
  }, []);
  return windowSize;
};
