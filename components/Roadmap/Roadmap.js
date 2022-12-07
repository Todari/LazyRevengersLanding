import React, { useCallback, useEffect } from "react";
import styles from "@/styles/Roadmap.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useIntl } from "react-intl";
import { useRef } from "react";

const Roadmap = () => {
  let tempTL = null;

  const initCircle = {
    width: 600,
    height: 600,
  };

  const replayRef = useRef(null);

  const bgOrange = "#CDF856";

  const intl = useIntl();

  const title = intl.formatMessage({ id: "roadmap.title" });
  const circle1num = intl.formatMessage({ id: "roadmap.circles.one.num" });
  const circle1title = intl.formatMessage({ id: "roadmap.circles.one.title" });

  const circle1list1 = intl.formatMessage({ id: "roadmap.circles.one.list1" });
  const circle1list2 = intl.formatMessage({ id: "roadmap.circles.one.list2" });
  const circle1list3 = intl.formatMessage({ id: "roadmap.circles.one.list3" });
  const circle1list4 = intl.formatMessage({ id: "roadmap.circles.one.list4" });
  const circle2num = intl.formatMessage({ id: "roadmap.circles.two.num" });
  const circle2title = intl.formatMessage({ id: "roadmap.circles.two.title" });

  const circle2list1 = intl.formatMessage({ id: "roadmap.circles.two.list1" });
  const circle2list2 = intl.formatMessage({ id: "roadmap.circles.two.list2" });
  const circle2list3 = intl.formatMessage({ id: "roadmap.circles.two.list3" });
  const circle2list4 = intl.formatMessage({ id: "roadmap.circles.two.list4" });
  const circle2list5 = intl.formatMessage({ id: "roadmap.circles.two.list5" });
  const circle3num = intl.formatMessage({ id: "roadmap.circles.three.num" });
  const circle3title = intl.formatMessage({
    id: "roadmap.circles.three.title",
  });

  const circle3list1 = intl.formatMessage({
    id: "roadmap.circles.three.list1",
  });
  const circle3list2 = intl.formatMessage({
    id: "roadmap.circles.three.list2",
  });
  const circle3list3 = intl.formatMessage({
    id: "roadmap.circles.three.list3",
  });
  const circle3list4 = intl.formatMessage({
    id: "roadmap.circles.three.list4",
  });
  const circle4num = intl.formatMessage({ id: "roadmap.circles.four.num" });
  const circle4title = intl.formatMessage({ id: "roadmap.circles.four.title" });
  const circle4list1 = intl.formatMessage({ id: "roadmap.circles.four.list1" });
  const circle4list2 = intl.formatMessage({ id: "roadmap.circles.four.list2" });
  const circle4list3 = intl.formatMessage({ id: "roadmap.circles.four.list3" });
  const circle4list4 = intl.formatMessage({ id: "roadmap.circles.four.list4" });
  const circle4list5 = intl.formatMessage({ id: "roadmap.circles.four.list5" });
  const circle5num = intl.formatMessage({ id: "roadmap.circles.five.num" });
  const circle5title = intl.formatMessage({ id: "roadmap.circles.five.title" });
  const circle5list1 = intl.formatMessage({ id: "roadmap.circles.five.list1" });
  const circle5list2 = intl.formatMessage({ id: "roadmap.circles.five.list2" });
  const circle5list3 = intl.formatMessage({ id: "roadmap.circles.five.list3" });
  const circle5list4 = intl.formatMessage({ id: "roadmap.circles.five.list4" });

  // const gradient1_TL = `.${styles.gradient1}`;
  const gradient1_TL = useRef(null);

  const title_TL = `.${styles.title}`;
  // const title_TL = useRef(null)

  const circle1_TL = `.${styles.circle1}`;
  const circle2_TL = `.${styles.circle2}`;
  const circle3_TL = `.${styles.circle3}`;
  const circle4_TL = `.${styles.circle4}`;
  const circle5_TL = `.${styles.circle5}`;

  const c_num1_TL = `.${styles.c_num1}`;
  const c_num2_TL = `.${styles.c_num2}`;
  const c_num3_TL = `.${styles.c_num3}`;
  const c_num4_TL = `.${styles.c_num4}`;
  const c_num5_TL = `.${styles.c_num5}`;

  const c_title1_TL = `.${styles.c_title1}`;
  const c_title2_TL = `.${styles.c_title2}`;
  const c_title3_TL = `.${styles.c_title3}`;
  const c_title4_TL = `.${styles.c_title4}`;
  const c_title5_TL = `.${styles.c_title5}`;

  const replay_TL = `.${styles.replay}`;

  useEffect(() => {
    const initCircleWidth = gsap.getProperty(circle1_TL, "width");
    const isDisplayCircleInner = (delay) => {
      return initCircleWidth < 100
        ? {
            delay: delay,
            opacity: 0,
          }
        : {};
    };
    const returnCircleTitle = (delay) => {
      return {
        delay: delay,
        paddingLeft: "2rem",
        paddingTop: "0",
        paddingBottom: "6rem",
        fontSize: 30,
      };
    };
    const delays = { c1: 5, c2: 10.5, c3: 15, c4: 19, c5: 25 };
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.animation_container}`,
        toggleActions: "play pause play reset",
        start: "top 50%",
        end: "bottom 10%",
      },
    });
    tl.add("title_and_gradien");
    tl.add("small_c_num1");
    tl.to(
      title_TL,
      {
        y: () => {
          const w = gsap.getProperty(circle1_TL, "width");
          if (w === 100) return -400;
          else if (w === 90) return -400;
          else if (w === 80) return -250;
          else if (w === 70) return -200;
          else return -400;
        },
        scale: 0.3,
        delay: 1,
        duration: 1,
        ease: "bounce",
      },
      "title_and_gradien"
    );

    tl.to(
      title_TL,
      { y: 0, scale: 1, delay: 26, duration: 1, ease: "bounce" },
      ""
    )
      .to(
        gradient1_TL.current,
        {
          delay: 1,
          duration: 0.3,
          width: () => {
            const w = gsap.getProperty(circle1_TL, "width");
            return w;
          },
          height: () => {
            const h = gsap.getProperty(circle1_TL, "height");
            return h;
          },
          borderRadius: "50%",
        },
        "title_and_gradien"
      )
      .to(
        gradient1_TL.current,
        {
          opacity: 1,
          delay: 25.5,
          duration: 0.3,
          width: "100%",
          height: "100%",
          borderRadius: "0",
        },
        "title_and_gradien"
      )
      .to(
        gradient1_TL.current,
        {
          opacity: 0,
          delay: 6,
          duration: 0.3,
        },
        ""
      )
      .to(
        circle1_TL,
        { opacity: 1, delay: 1.2, duration: 1 },
        "title_and_gradien"
      )
      .to(
        circle1_TL,
        { ...initCircle, delay: 1.5, duration: 0.4, ease: "bounce" },
        ""
      )
      .to(
        circle1_TL,
        {
          x: -420,
          width: 200,
          height: 200,
          duration: 0.4,
          delay: delays.c1,
          ease: "bounce",
          background: bgOrange,
        },
        ""
      );
    tl.to(
      c_num1_TL,
      {
        delay: delays.c1,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title1_TL, isDisplayCircleInner(delays.c1), "");
    tl.to(c_title1_TL, returnCircleTitle(delays.c1), "");
    tl.to(circle1_TL, { delay: 10, x: -650, duration: 1 }, "");
    tl.to(circle1_TL, { delay: 10, opacity: 0.7 }, "");
    tl.to(circle1_TL, { delay: 14, opacity: 0 }, "");

    tl.to(
      circle2_TL,
      {
        opacity: 1,
        duration: 0.4,
        delay: 4.5,
      },
      ""
    )
      .to(
        circle2_TL,
        {
          ...initCircle,
          delay: 5.5,
          duration: 0.4,
          ease: "bounce",
        },
        ""
      )
      .to(
        circle2_TL,
        {
          x: -420,
          width: 200,
          height: 200,
          duration: 0.4,
          delay: delays.c2,
          ease: "bounce",
          background: bgOrange,
        },
        ""
      );
    tl.to(
      c_num2_TL,
      {
        delay: delays.c2,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title2_TL, isDisplayCircleInner(delays.c2), "");
    tl.to(c_num2_TL, isDisplayCircleInner(delays.c2), "");
    tl.to(c_title2_TL, returnCircleTitle(delays.c2), "");
    tl.to(circle2_TL, { delay: 14, x: -650, duration: 1, opacity: 0.7 }, "");
    tl.to(circle2_TL, { delay: 18, opacity: 0 }, "")
      .to(circle3_TL, { opacity: 1, duration: 0.4, delay: 10 }, "")
      .to(
        circle3_TL,
        { ...initCircle, delay: 11, duration: 0.4, ease: "bounce" },
        ""
      );
    tl.to(
      circle3_TL,
      {
        x: -420,
        width: 200,
        height: 200,
        duration: 0.4,
        delay: delays.c3,
        ease: "bounce",
        background: bgOrange,
      },
      ""
    );
    tl.to(
      c_num3_TL,
      {
        delay: delays.c3,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title3_TL, isDisplayCircleInner(delays.c3), "");
    tl.to(c_num3_TL, isDisplayCircleInner(delays.c3), "");
    tl.to(c_title3_TL, returnCircleTitle(delays.c3), "");
    tl.to(circle3_TL, { delay: 18, x: -650, duration: 1, opacity: 0.7 }, "");
    tl.to(circle3_TL, { delay: 22, opacity: 0 }, "")
      .to(
        circle4_TL,
        {
          opacity: 1,
          duration: 0.4,
          delay: 14.5,
        },
        ""
      )
      .to(
        circle4_TL,
        {
          ...initCircle,
          delay: 15.5,
          duration: 0.4,
          ease: "bounce",
        },
        ""
      )
      .to(
        circle4_TL,
        {
          x: -420,
          width: 200,
          height: 200,
          duration: 0.4,
          delay: delays.c4,
          ease: "bounce",
          background: bgOrange,
        },
        ""
      );
    tl.to(c_title4_TL, isDisplayCircleInner(delays.c4), "");
    tl.to(c_num4_TL, isDisplayCircleInner(delays.c4), "");
    tl.to(
      c_num4_TL,
      {
        delay: delays.c4,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title4_TL, returnCircleTitle(delays.c4), "");
    tl.to(circle4_TL, { delay: 22, opacity: 0 }, "")
      .to(circle5_TL, { opacity: 1, duration: 0.4, delay: 18.5 }, "")
      .to(
        circle5_TL,
        { ...initCircle, delay: 19.5, duration: 0.4, ease: "bounce" },
        ""
      )
      .to(
        circle5_TL,
        {
          width: 100,
          height: 100,
          duration: 0.4,
          delay: delays.c5,
          opacity: 0,
        },
        ""
      );
    tl.to(
      c_num5_TL,
      {
        delay: delays.c5,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title5_TL, returnCircleTitle(delays.c5), "").to(
      replay_TL,
      {
        zIndex: 90,
        delay: 28,
        opacity: 1,
        display: "flex",
      },
      ""
    );

    tempTL = tl;
  }, []);
  const restartAnimation = useCallback(() => {
    tempTL.restart();
  }, [tempTL]);

  return (
    <>
      <div className={styles.roadmap_container}>
        <div className={styles.gradient1} ref={gradient1_TL}></div>
        <div className={styles.animation_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <div className={styles.circle1}>
            <div className={styles.cus_row}>
              <div className={styles.c_num1}>{circle1num}</div>
              <div className={styles.c_title1}>{circle1title}</div>
            </div>
            <div className={styles.c_list1}>
              <p>{circle1list1}</p>
              <p>{circle1list2}</p>
              <p>{circle1list3}</p>
              <p>{circle1list4}</p>
            </div>
          </div>
          <div className={styles.circle2}>
            <div className={styles.cus_row}>
              <div className={styles.c_num2}>{circle2num}</div>
              <div className={styles.c_title2}>{circle2title}</div>
            </div>
            <div className={styles.c_list2}>
              <p>{circle2list1}</p>
              <p>{circle2list2}</p>
              <p>{circle2list3}</p>
              <p>{circle2list4}</p>
              <p>{circle2list5}</p>
            </div>
          </div>
          <div className={styles.circle3}>
            <div className={styles.cus_row}>
              <div className={styles.c_num3}>{circle3num}</div>
              <div className={styles.c_title3}>{circle3title}</div>
            </div>
            <div className={styles.c_list3}>
              <p>{circle3list1}</p>
              <p>{circle3list2}</p>
              <p>{circle3list3}</p>
              <p>{circle3list4}</p>
            </div>
          </div>
          <div className={styles.circle4}>
            <div className={styles.cus_row}>
              <div className={styles.c_num4}>{circle4num}</div>
              <div className={styles.c_title4}>{circle4title}</div>
            </div>
            <div className={styles.c_list4}>
              <p>{circle4list1}</p>
              <p>{circle4list2}</p>
              <p>{circle4list3}</p>
              <p>{circle4list4}</p>
              <p>{circle4list5}</p>
            </div>
          </div>
          <div className={styles.circle5}>
            <div className={styles.cus_row}>
              <div className={styles.c_num5}>{circle5num}</div>
              <div className={styles.c_title5}>{circle5title}</div>
            </div>
            <div className={styles.c_list5}>
              <p>{circle5list1}</p>
              <p>{circle5list2}</p>
              <p>{circle5list3}</p>
              <p>{circle5list4}</p>
            </div>
          </div>
          <button
            onClick={restartAnimation}
            className={styles.replay}
            ref={replayRef}
          >
            Replay
          </button>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
