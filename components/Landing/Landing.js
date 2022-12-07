import styles from "@/styles/Landing.module.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useIntl } from "react-intl";
import Image from "next/image";
import LogoWrapper from "../LogoWrapper/LogoWrapper";
import { activityImages } from "./images";

gsap.registerPlugin(ScrollTrigger);

const LazyrActivityBlock = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
  });
  const intl = useIntl();
  const title1 = intl.formatMessage({ id: "landing.title1.h2" });
  const title2 = intl.formatMessage({ id: "landing.title2.h1" });
  const info = intl.formatMessage({ id: "landing.info.p" });

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.logo} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.navBar} />
        <div className={styles.contentsContainer}>
          <div className={styles.contents}>
            <div className={styles.title}>
              <h2>{title1}</h2>
              <h1>{title2}</h1>
            </div>
            <div className={styles.content}>
              <p>{info}</p>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.apple}/>
              <div className={styles.google} />
            </div>
          </div>
          <div className={styles.textBackground}>
            REVENGERS
          </div>
          <div className={styles.sideBar}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazyrActivityBlock;
