import styles from "@/styles/Landing2.module.scss";
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
      <div className={styles.subTitle}>
        <h2>LAZY</h2>
      </div>
      <div className={styles.shacoBox}>
        <div className={styles.shacoBoxBox}>
          <div className={styles.mainTitle}>
            <h1>REVENGERS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazyrActivityBlock;
