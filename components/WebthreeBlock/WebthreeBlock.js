import { useRef, useEffect } from "react";
import styles from "@/styles/Webthree.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { text } from "@/consts/text";

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import LogoWrapper from "../LogoWrapper/LogoWrapper";

gsap.registerPlugin(ScrollTrigger);

const WebthreeBlock = () => {
  const containerRef = useRef(null);

  const titleH1Ref = useRef(null);
  const titleH2Ref = useRef(null);

  const selectionH3Ref = useRef(null);
  const selectionPRef = useRef(null);

  const rewardsH3Ref = useRef(null);
  const rewardsPRef = useRef(null);

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "webthree.heading.h1" });
  const title2 = intl.formatMessage({ id: "webthree.heading.h2" });

  const subtitle1 = intl.formatMessage({ id: "webthree.heading.h21" });
  const subtitle2 = intl.formatMessage({ id: "webthree.heading.h22" });

  const selectionTitle = intl.formatMessage({ id: "webthree.selection.title" });

  const selectionInfo1 = intl.formatMessage({ id: "webthree.selection.info1" });
  const selectionInfo2 = intl.formatMessage({ id: "webthree.selection.info2" });
  const selectionInfo3 = intl.formatMessage({ id: "webthree.selection.info3" });
  const selectionInfo4 = intl.formatMessage({ id: "webthree.selection.info4" });
  const selectionInfo5 = intl.formatMessage({ id: "webthree.selection.info5" });

  const rewardsTitle = intl.formatMessage({ id: "webthree.rewards.title" });

  const rewardsInfo1 = intl.formatMessage({ id: "webthree.rewards.info1" });
  const rewardsInfo2 = intl.formatMessage({ id: "webthree.rewards.info2" });
  const rewardsInfo3 = intl.formatMessage({ id: "webthree.rewards.info3" });
  const rewardsInfo4 = intl.formatMessage({ id: "webthree.rewards.info4" });
  const rewardsInfo5 = intl.formatMessage({ id: "webthree.rewards.info5" });
  const rewardsInfo6 = intl.formatMessage({ id: "webthree.rewards.info6" });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top+=450",
        end: "+=400",
        scrub: true,
      },
    });
    tl.fromTo(
      titleH1Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    tl.fromTo(
      titleH2Ref.current,
      {
        opacity: 0.1,
        backgroundPosition: "50% 90%",
      },
      {
        opacity: 1,
        backgroundPosition: "5% 30%",
      }
    );
    tl.fromTo(
      rewardsH3Ref.current,
      {
        backgroundPosition: "50% 90%",
      },
      {
        backgroundPosition: "5% 30%",
      }
    );
    tl.fromTo(
      selectionPRef.current,
      {
        x: -2000,
      },
      {
        x: 0,
      }
    );
    tl.fromTo(
      rewardsPRef.current,
      {
        x: 5000,
      },
      {
        x: 0,
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>{title2}</h2>
          <h1 ref={titleH1Ref}>{title}</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.gradient}/>
          <div className={styles.selection}>
            <h2>{selectionTitle}</h2>
            <div ref={selectionPRef}>
              <p>{selectionInfo1}</p>
              <p>{selectionInfo2}</p>
              <p>{selectionInfo3}</p>
              <p>{selectionInfo4}</p>
              <p>{selectionInfo5}</p>
            </div>
          </div>
          <div className={styles.photoWraper}>
            <div className={styles.photo} />
          </div>
          <div className={styles.rewards}>
            <h2 ref={rewardsH3Ref}>{rewardsTitle}</h2>
            <div ref={rewardsPRef}>
              <p>{rewardsInfo1}</p>
              <p>{rewardsInfo2}</p>
              <p>{rewardsInfo3}</p>
              <p>{rewardsInfo4}</p>
              <p>{rewardsInfo5}</p>
              <p>{rewardsInfo6}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebthreeBlock;
