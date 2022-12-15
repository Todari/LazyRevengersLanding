import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/SequencePlayer.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Timeline from "../Timeline/Timeline";

gsap.registerPlugin(ScrollTrigger);

import { useIntl } from "react-intl";
import Image from "next/image";
import { useCustomProgress } from "@/hooks/useCustomProgress";
// import { preloadImages } from "helpers/preloadImages";
import { useWindowSize } from "@/hooks/useWindowSize";
import { drawImage } from "helpers/drawImage";
import { playerSettings } from "./settings";

// import { preloadedImages } from "public/imagesPreloader";

import { preloadImages } from "@/helpers/preloadImages";

const Player = ({ holderRef }) => {
  const { progress } = useCustomProgress();
  const { width, height } = useWindowSize();
  const {
    lgFontSize,
    mdFontSize,
    smFontSize,
    lsFontSize,
    startFromFrame,
    framesCount,
  } = playerSettings;

  const [images, setImages] = useState(null);

  useEffect(() => {
    const imgs = preloadImages(719);
    setImages(imgs);
  }, []);

  const removeRef = useRef(null);
  const canvasRef = useRef(null);
  const undegroundRef = useRef(null);
  const sequenceWrapperRef = useRef(null);

  const story1Ref = useRef(null);
  const story2Ref = useRef(null);
  const story3Ref = useRef(null);
  const story4Ref = useRef(null);

  const timelineRef = useRef(null);

  const intl = useIntl();

  const story1p1 = intl.formatMessage({ id: "story.story_1_p1" });
  const story1p2 = intl.formatMessage({ id: "story.story_1_p2" });

  const story2_p1 = intl.formatMessage({ id: "story.story_2_p1" });
  const story2_p2 = intl.formatMessage({ id: "story.story_2_p2" });
  const story2_p3 = intl.formatMessage({ id: "story.story_2_p3" });

  const story3_p1 = intl.formatMessage({ id: "story.story_3_p1" });
  const story3_p2 = intl.formatMessage({ id: "story.story_3_p2" });
  const story3_p3 = intl.formatMessage({ id: "story.story_3_p3" });
  const story3_p4 = intl.formatMessage({ id: "story.story_3_p4" });

  const story4_p1 = intl.formatMessage({ id: "story.story_4_p1" });
  const story4_p2 = intl.formatMessage({ id: "story.story_4_p2" });
  const story4_p3 = intl.formatMessage({ id: "story.story_4_p3" });
  const story4_p4 = intl.formatMessage({ id: "story.story_4_p4" });

  const [firstDrawed, setFirstDrawed] = useState(false);

  useEffect(() => {
    if (images) {
      if (progress <= 744) {
        if (progress > 14 && !firstDrawed) {
          setFirstDrawed(true);
          drawImage(images[1], canvasRef.current, width, height);
        } else if (progress > 25) {
          drawImage(
            images[progress - startFromFrame],
            canvasRef.current,
            width,
            height
          );
        }
      } else if (progress > 744 && progress <= 950) {
        drawImage(images[718], canvasRef.current, width, height);
      }
      console.log(progress);
    }
  }, [images, progress, width, height, startFromFrame, firstDrawed]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: holderRef.current,
        markers: false,
        start: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "top+=6000px";
          else if (fs === mdFontSize) return "top+=6600px";
          else if (fs === lgFontSize) return "top+=6700px";
          else if (fs === lsFontSize) return "top+=5600px";
          else return "top+=5900px";
        },
        end: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "top+=8800px";
          else if (fs === mdFontSize) return "top+=8600px";
          if (fs === lgFontSize) return "top+=9600px";
          if (fs === lsFontSize) return "top+=8300px";
          else return "top+=7800px";
        },
        scrub: true,
      },
    });
    tl.add("sametime");
    tl.fromTo(
      canvasRef.current,
      {
        y: 0,
      },
      {
        duration: 8,
        y: "-300%",
      },
      "sametime"
    );
    tl.fromTo(
      undegroundRef.current,
      {
        y: 0,
      },
      {
        duration: 8,
        y: "-300%",
      },
      "sametime"
    );
    const initTl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=1%",
        end: "top+=5%",
        scrub: true,
      },
    });
    initTl.fromTo(canvasRef.current, { opacity: 0 }, { opacity: 1 });
    const story1Tl = gsap.timeline(
      playerSettings.initTl.install(sequenceWrapperRef.current)
    );
    story1Tl.fromTo(
      story1Ref.current,
      {
        opacity: 0,
        right: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize || fs === lsFontSize) return null;
          else return 0;
        },
        left: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return 0;
          if (fs === lsFontSize) return 0;
          else return null;
        },
        x: "100%",
        y: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return 0;
          if (fs === lgFontSize) return 0;
          if (fs === mdFontSize) return 0;
          if (fs === lsFontSize) return "60%";
          else return 150;
        },
        bottom: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "15%";
          if (fs === mdFontSize) return "15%";
          if (fs === lgFontSize) return "15%";
          if (fs === lsFontSize) return "20%";
          else return 150;
        },
      },
      {
        opacity: 1,
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "1%";
          if (fs === mdFontSize) return "-20%";
          if (fs === lgFontSize) return "-20%";
          if (fs === lsFontSize) return "1%";
          else {
            return 0;
          }
        },
      }
    );
    story1Tl.to(
      story1Ref.current,

      { opacity: 0, delay: 1, x: "200%" }
    );
    const story2Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=1250px",
        end: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === lsFontSize) return "top+=2700px";
          else return "top+=3200px";
        },
        scrub: true,
      },
    });
    story2Tl.fromTo(
      story2Ref.current,
      {
        opacity: 0,
        right: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return null;
          if (fs === lsFontSize) return null;
          else return 0;
        },
        left: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return 0;
          if (fs === lsFontSize) return 0;
          else return null;
        },
        x: "100%",
        y: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) 0;
          else if (fs === lgFontSize || fs === mdFontSize) return 0;
        },
        top: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "15%";
          if (fs === lgFontSize || fs === mdFontSize) return "15%";
          if (fs === lsFontSize) return "50%";
          else return 150;
        },
      },
      {
        opacity: 1,
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "1%";
          if (fs === lgFontSize || fs === mdFontSize) return "-20%";
          if (fs === lsFontSize) return "1%";
          else {
            return 0;
          }
        },
      }
    );
    story2Tl.to(story2Ref.current, { opacity: 0, delay: 1, y: "-500%" });
    const story3Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === lsFontSize) return "top+=2800px";
          else return "top+=3100px";
        },
        end: "top+=4100px",
        scrub: true,
      },
    });
    story3Tl.fromTo(
      story3Ref.current,
      {
        opacity: 0,
        left: 0,
        y: "-500%",
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "1%";
          if (fs === lsFontSize) return "1%";
          if (fs === lgFontSize || fs === mdFontSize) return "5%";
          else {
            return null;
          }
        },
      },
      {
        opacity: 1,
        y: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === lgFontSize || fs === mdFontSize) return "30%";
          else if (fs === smFontSize) return "60%";
          else if (fs === lsFontSize) return "0%";
        },
      }
    );
    story3Tl.to(story3Ref.current, { opacity: 0, delay: 1 });
    const story4Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=4200px",
        end: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === lsFontSize) return "top+=5800px";
          else return "top+=6800px";
        },
        scrub: true,
      },
    });
    story4Tl.fromTo(
      story4Ref.current,
      {
        opacity: 0,
        left: 0,
        x: "-100%",
        y: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === smFontSize) return "50%";
          if (fs === lgFontSize || fs === mdFontSize) return "10%";
        },
      },
      {
        opacity: 1,
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === lsFontSize) return "5%";
          else if (fs === smFontSize) return "1%";
          else if (fs === lgFontSize || fs === mdFontSize) return "15%";
          else return 0;
        },
      }
    );
    story4Tl.to(
      story4Ref.current,

      { opacity: 0, delay: 1 }
    );

    const progressTl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        start: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === lsFontSize) return "top+=5800px";
          else return "top+=6900px";
        },
        end: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === lsFontSize) return "top+=6100px";
          else return "top+=7300px";
        },
        scrub: true,
      },
    });
    progressTl.fromTo(timelineRef.current, { opacity: 1 }, { opacity: 0 });
  }, []);

  return (
    <>
      <Timeline progress={progress} reference={timelineRef} />
      <div ref={removeRef}>
        <div className={styles.SequencePlayer} ref={sequenceWrapperRef}>
          {/* <div ref={canvasRef}></div> */}
          <canvas ref={canvasRef}></canvas>
        </div>
        <div className={styles.underground} ref={undegroundRef}>
          <Image
            src="/land-min.jpg"
            alt="underground"
            layout="fill"
            quality={70}
          />
        </div>
        <div className={styles.lazyrIntroContainer}>
          <div className={styles.lazyrIntroText}>
            <h1 ref={story1Ref}>
              <span>01</span>
              <br />
              <span>{story1p1}</span>
              <br />
              <span>{story1p2}</span>
            </h1>

            <h1 ref={story2Ref}>
              <span>02</span>
              <br />
              <span>{story2_p1}</span>
              <br />
              <span>{story2_p2}</span>
              <br />
              <span>{story2_p3}</span>
            </h1>
            <h1 ref={story3Ref}>
              <span>03</span>
              <br />
              <span>{story3_p1}</span>
              <br />
              <span>{story3_p2}</span>
              <br />
              <span>{story3_p3}</span>
              <br />
              <span>{story3_p4}</span>
            </h1>
            <h1 ref={story4Ref}>
              <span>04</span>
              <br />
              <span>{story4_p1}</span>
              <br />
              <span>{story4_p2}</span>
              <br />
              <span>{story4_p3}</span>
              <br />
              <span>{story4_p4}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
