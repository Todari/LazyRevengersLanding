export const playerSettings = {
  speed: 1,
  framesCount: 718,
  startFromFrame: 25,
  lgFontSize: 36,
  mdFontSize: 20,
  smFontSize: 16,
  lsFontSize: 18,

  mainTl: {
    install: (ref) => {
      return {
        scrollTrigger: {
          trigger: ref,
          markers: false,
          start: "top+=6200px",
          // end: "top+=8600px",
          end: () => {
            const fs = gsap.getProperty(ref.current, "fontSize");
            if (fs === smFontSize) return "top+=8600px";
            else return "top+=7500px";
          },
          // start: "top+=600%",
          // end: "top+=770%",
          scrub: true,
        },
      };
    },
  },
  initTl: {
    install: (ref) => {
      return {
        scrollTrigger: {
          trigger: ref,
          markers: false,
          // start: "top+=20%",
          // end: "top+=100%",
          start: "top+=200px",
          end: "top+=1100px",
          scrub: true,
        },
      };
    },
    install2: (ref, start, end) => {
      return {
        scrollTrigger: {
          trigger: ref,
          markers: false,
          // start: "top+=20%",
          // end: "top+=100%",
          start: start,
          end: end,
          scrub: true,
        },
      };
    },
  },
  story_1: {
    from: {},
    to: {},
  },
};
