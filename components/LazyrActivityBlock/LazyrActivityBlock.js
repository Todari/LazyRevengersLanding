import styles from "@/styles/LazyrActivity.module.scss";
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
  const title = intl.formatMessage({ id: "activity.heading.h1" });
  const subtitle = intl.formatMessage({ id: "activity.heading.h2" });
  const joinTitle = intl.formatMessage({ id: "activity.join.title" });
  const joinInfo1 = intl.formatMessage({ id: "activity.join.info1" });
  const joinInfo2 = intl.formatMessage({ id: "activity.join.info2" });
  const joinInfo3 = intl.formatMessage({ id: "activity.join.info3" });
  const joinInfo4 = intl.formatMessage({ id: "activity.join.info4" });
  const togetherTitle = intl.formatMessage({ id: "activity.together.title" });
  const togetherInfo1 = intl.formatMessage({ id: "activity.together.info1" });
  const togetherInfo2 = intl.formatMessage({ id: "activity.together.info2" });
  const togetherInfo3 = intl.formatMessage({ id: "activity.together.info3" });
  const togetherInfo4 = intl.formatMessage({ id: "activity.together.info4" });

  return (
    <div ref={containerRef} className={styles.container}>
      {/* <LogoWrapper /> */}
      {/* <div className={styles.gradiend}></div> */}
      <div className={styles.title}>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </div>
      <div className={styles.content}>
        {/* <div className={styles.gradiend}></div> */}
        <div className={styles.join}>
          <h2>{joinTitle}</h2>
          <p>{joinInfo1}</p>
          <p>{joinInfo2}</p>
          <p>{joinInfo3}</p>
          <p>{joinInfo4}</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.gradiend}></div>
          <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            autoHeight={false}
            modules={[Autoplay, Pagination]}
            className={styles.swiper}
          >
            {activityImages.map(({ id, src }) => (
              <SwiperSlide key={id}>
                <Image
                  src={src}
                  alt="slide"
                  layout="fill"
                  priority={true}
                  quality={90}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.together}>
          <h2>{togetherTitle}</h2>
          <p>{togetherInfo1}</p>
          <p>{togetherInfo2}</p>
          <p>{togetherInfo3}</p>
          <p>{togetherInfo4}</p>
        </div>
      </div>
    </div>
  );
};

export default LazyrActivityBlock;
