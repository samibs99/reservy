export const varContainer = (props?: { staggerIn?: number; delayIn?: number; staggerOut?: number }) => {
  const staggerIn = props?.staggerIn || 0.05;
  const delayIn = props?.delayIn || 0.05;
  const staggerOut = props?.staggerOut || 0.05;

  return {
    animate: { transition: { staggerChildren: staggerIn, delayChildren: delayIn } },
    exit: { transition: { staggerChildren: staggerOut, staggerDirection: -1 } },
  };
};

export const varFade = (props?: { distance?: number; durationIn?: number; durationOut?: number; easeIn?: any; easeOut?: any }) => {
  const distance = props?.distance || 120;
  const durationIn = props?.durationIn || 0.64;
  const durationOut = props?.durationOut || 0.48;
  const easeIn = props?.easeIn || [0.43, 0.13, 0.23, 0.96];
  const easeOut = props?.easeOut || [0.43, 0.13, 0.23, 0.96];

  return {
    // IN
    in: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: durationIn, ease: easeIn } },
      exit: { opacity: 0, transition: { duration: durationOut, ease: easeOut } },
    },
    inUp: {
      initial: { y: distance, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        y: distance,
        opacity: 0,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
    inDown: {
      initial: { y: -distance, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        y: -distance,
        opacity: 0,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
    inLeft: {
      initial: { x: -distance, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        x: -distance,
        opacity: 0,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
    inRight: {
      initial: { x: distance, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: { duration: durationIn, ease: easeIn },
      },
      exit: {
        x: distance,
        opacity: 0,
        transition: { duration: durationOut, ease: easeOut },
      },
    },
  };
};
