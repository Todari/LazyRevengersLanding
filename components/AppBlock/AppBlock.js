import React from "react";
import styles from "@/styles/App.module.scss";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useIntl } from "react-intl";
import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import LogoWrapper from "../LogoWrapper/LogoWrapper";

const AppBlock = () => {
  const intl = useIntl();

  const sectionOneRef = useRef(null);
  const introRef = useRef(null);
  const welcomeRef = useRef(null);
  const writerRef = useRef(null);
  const paragraphRef = useRef(null);

  const title = intl.formatMessage({ id: "app.heading.h1" });
  const info = intl.formatMessage({ id: "app.heading.h2" });

  const activityTitle = intl.formatMessage({ id: "app.activity.title" });

  const activityInfo1 = intl.formatMessage({ id: "app.activity.info1" });
  const activityInfo2 = intl.formatMessage({ id: "app.activity.info2" });
  const activityInfo3 = intl.formatMessage({ id: "app.activity.info3" });
  const activityInfo4 = intl.formatMessage({ id: "app.activity.info4" });

  const rewardsTitle = intl.formatMessage({ id: "app.rewards.title" });

  const rewardsInfo1 = intl.formatMessage({ id: "app.rewards.info1" });
  const rewardsInfo2 = intl.formatMessage({ id: "app.rewards.info2" });
  const rewardsInfo3 = intl.formatMessage({ id: "app.rewards.info3" });

  const images = [
    "/apppreview/Lzr-App-11.png",
    "/apppreview/Lzr-App-22.png",
    "/apppreview/Lzr-App-33.png",
    "/apppreview/Lzr-App-44.png",
    "/apppreview/Lzr-App-55.png",
  ];
  const containerRef = useRef(null);
  const infoH3Ref = useRef(null);
  const infoPRef = useRef(null);
  const rewardH3Ref = useRef(null);
  const rewardPRef = useRef(null);
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
    stopOnHover: false,
    showThumbs: false,
    labels: false,
    showStatus: false,
    showIndicators: false,
  };
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,

        start: "top +200px",
        scrub: true,
      },
    });
    tl.add("sametime");
    tl.from(infoH3Ref.current, {
      opacity: 0,
      duration: 4,
    });
    tl.to(
      infoH3Ref.current,
      {
        opacity: 1,
        duration: 2,
      },
      "sametime"
    );
    tl.from(
      infoPRef.current,
      {
        x: -5000,
        opacity: 0,
        duration: 2,
      },
      "sametime"
    );
    tl.to(infoPRef.current, {
      x: 0,
      opacity: 1,
      duration: 2,
    });
    tl.from(
      rewardH3Ref.current,
      {
        opacity: 0,
        duration: 4,
      },
      "sametime"
    );
    tl.to(rewardH3Ref.current, {
      delay: 2,
      opacity: 1,
      duration: 2,
    });
    tl.from(
      rewardPRef.current,
      {
        y: 5000,
        opacity: 0,
        duration: 2,
      },
      "sametime"
    );
    tl.to(rewardPRef.current, {
      y: 0,
      delay: 2,
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <div className={styles.appContainer} ref={containerRef}>
      {/* <LogoWrapper /> */}
      <div className={styles.appWrapper}>
        <div className={styles.titleWrapper}>
          <h1>{info}</h1>
          <h2>{title}</h2>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.gradient}></div>
          <div className={styles.activityWrapper}>
            <h1 ref={infoH3Ref}>{activityTitle}</h1>
            <div ref={infoPRef}>
              <p>{activityInfo1}</p>
              <p>{activityInfo2}</p>
              <p>{activityInfo3}</p>
              <p>{activityInfo4}</p>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.phoneWrapper}>
              <div className={styles.phoneDisplay}>
                <Swiper
                  spaceBetween={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  autoHeight={true}
                  modules={[Autoplay, Pagination]}
                  className={styles.swiper}
                >
                  {images.map((path, id) => (
                    <SwiperSlide key={id} className={styles.imageWrapper}>
                      <Image
                        src={path}
                        alt="img"
                        layout="fill"
                        priority={true}
                        quality={90}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={styles.phone}></div>
            </div>
          </div>
          <div className={styles.rewardsWrapper}>
            <h1 ref={rewardH3Ref}>{rewardsTitle}</h1>
            <div ref={rewardPRef}>
              <p>{rewardsInfo1}</p>
              <p>{rewardsInfo2}</p>
              <p>{rewardsInfo3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBlock;
