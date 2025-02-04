const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        duration: 0.5,
        delay: animationDuration - 1,
      },
      fillOpacity: {
        duration: 0.5,
        delay: animationDuration - 1,
      },
    },
  },
};
