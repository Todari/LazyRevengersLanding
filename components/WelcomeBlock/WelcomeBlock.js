import styles from "@/styles/wb.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";
import Timer from "../Timer/Timer";

import { useIntl } from "react-intl";
import Player from "../Player/Player";
import Image from "next/image";
import LogoWrapper from "../LogoWrapper/LogoWrapper";

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
          {/* <div ref={timerRef}>
            <Timer />
          </div> */}
          <div className={styles.pseudoWrapper}>
            <LogoWrapper />
            <div className={styles.mainInfoWrapper}>
              {/* <div className={styles.logoWrapper}>
                <Image src="/logo/green.svg" alt="logo" layout="fill" />
              </div> */}

              <div className={styles.intro}>
                <div className={styles.introText}>
                  <div className={styles.textWrapper}>
                    <div className={styles.welcomeContainer} ref={welcomeRef}>
                      <h1>{title}</h1>
                      <span
                        className={styles.textWriter}
                        ref={writerRef}
                      ></span>
                    </div>
                    <div ref={paragraphRef}>
                      <p>{info1}</p>
                      <p>{info12}</p>
                      <p>{info13}</p>
                      <p>{info2}</p>
                      <p>{info22}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.lazyrWrapper}>
                  <div className={styles.circle_gradient}>
                    <div className={styles.lazyr}>
                      <Image
                        src="/lazyr_new.webp"
                        alt="lazyr"
                        layout="fill"
                        quality={80}
                        priority={true}
                      />
                    </div>
                  </div>
                  <div className={styles.cloudsWrapper}>
                    <div className={styles.cloud_lg}>
                      <Image
                        src="/clouds/cloud_big.svg"
                        alt="cloud"
                        layout="fill"
                        quality={70}
                        priority={true}
                      />
                    </div>
                    <div className={styles.cloud_md}>
                      <Image
                        src="/clouds/cloud_md.svg"
                        alt="cloud"
                        layout="fill"
                        priority={true}
                      />
                    </div>
                    <div className={styles.cloud_sm}>
                      <Image
                        src="/clouds/cloud_transparent.svg"
                        alt="cloud"
                        layout="fill"
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eventTimerWrapper}>
              <Timer />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionThree}></div>
    </>
  );
};

export default WelcomeBlock;
