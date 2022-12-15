import styles from "@/styles/wb.module.scss";
import Landing2 from "@/components/Landing/Landing2"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";
import Timer from "../components/Timer/Timer";

import { useIntl } from "react-intl";
import Player from "../components/Player/Player";
import Image from "next/image";
// import LogoWrapper from "../LogoWrapper/LogoWrapper";

const WelcomeBlock = () => {
  const intl = useIntl();

  const sectionOneRef = useRef(null);
  const introRef = useRef(null);
  const welcomeRef = useRef(null);
  const writerRef = useRef(null);
  const paragraphRef = useRef(null);

  const title = intl.formatMessage({ id: "welcome.title" });
  const info1 = intl.formatMessage({ id: "welcome.info1" });
  const info12 = intl.formatMessage({ id: "welcome.info1_2" });
  const info13 = intl.formatMessage({ id: "welcome.info1_3" });
  const info2 = intl.formatMessage({ id: "welcome.info2" });
  const info22 = intl.formatMessage({ id: "welcome.info2_2" });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "top top-=100px",
        end: "+=100px",
        scrub: true,
        markers: false,
      },
    });
    tl.fromTo(
      introRef.current,
      {
        opacity: 1,
      },
      { opacity: 0 }
    );
    const welcomeTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "top top+=200",
      },
    });
    welcomeTL.fromTo(
      welcomeRef.current,
      {
        opacity: 0,
      },
      { delay: 0.5, opacity: 1, duration: 1 }
    );
    welcomeTL.to(writerRef.current, {
      width: 0,
    });
    welcomeTL.fromTo(
      paragraphRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
      }
    );
    // tl.fromTo(
    //   timerRef.current,
    //   {
    //     display: "flex",
    //   },
    //   {
    //     display: "none",
    //   }
    // );
  }, []);

  return (
    <>
      <div className={styles.sectionOne} ref={sectionOneRef}>
        <div style={{ position: "fixed", width: "100%" }}>
          <Player holderRef={sectionOneRef} />
        </div>
        <div className={styles.introWrapper} ref={introRef}>
        </div>
      </div>
      {/* <div className={styles.sectionThree}></div> */}
    </>
  );
};

export default WelcomeBlock;
