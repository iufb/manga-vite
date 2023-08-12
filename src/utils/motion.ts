export const transition = { type: "spring", duration: 0.8 };
export const secondLayerAnimation = (width: number) => {
  const isMobile = width < 640;
  return {
    initial: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    animate: {
      width: isMobile ? 500 : 298,
      height: isMobile ? "95%" : 720,
      opacity: 1,
    },
    exit: {
      width: 0,
      height: 0,
      opacity: 0,
    },
  };
};
export const filterFormAnimation = (windowWidth: number) => {
  const isMobile = windowWidth < 640;
  return {
    initial: {
      width: isMobile ? "auto" : 314,
      height: isMobile ? "95%" : 420,
    },
    animate: {
      height: 780,
    },
    exit: {
      height: 420,
    },
  };
};

export const slideAnimation = (direction: string) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0.5 },
    },
  };
};
export const opacityAnimation = {
  initial: {
    opacity: 0,
    duration: 1,
  },
  animate: {
    opacity: 1,
    duration: 1,
  },
  exit: {
    opacity: 0,

    duration: 1,
  },
};
