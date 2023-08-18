export const transition = { type: "spring", duration: 0.8 };
export const genresListAnimation = {
  initial: {
    height: 394,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  animate: {
    height: 630,
  },
};

export const secondLayerAnimation = {
  initial: {
    width: "var(--width-from)",
    height: "var(--height-from)",
    opacity: 0,
  },
  animate: {
    width: "var(--width-to)",
    height: "var(--height-to)",
    opacity: 1,
  },
  exit: {
    width: "var(--width-from)",
    height: "var(--height-from)",
    opacity: 0,
  },
};
export const filterFormAnimation = {
  initial: {
    height: "var(--height-from)",
  },
  animate: {
    height: "var(--height-to)",
  },
  exit: {
    height: "var(--height-from)",
  },
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
