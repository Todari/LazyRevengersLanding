import styles from "@/styles/Timer.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [showTimer, setShowTimer] = useState(false);

  const CountDownTimer = (dt) => {
    const end = dt;
    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;
    const now = new Date();
    const distance = end - now;
    if (distance < 0) {
      return null;
    }
    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    return { days, hours, minutes };
  };

  useEffect(() => {
    if (!showTimer) {
      const currentDate = new Date();
      const event = new Date(currentDate.getFullYear(), 11, 25);
      const timer = CountDownTimer(event);
      if (timer) {
        setShowTimer(true);
        const newTime = time;
        newTime.days = timer.days;
        newTime.hours = timer.hours;
        newTime.minutes = timer.minutes;
        setTime(newTime);
      }
    }
  }, []);
  return (
    <>
      {showTimer && (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.wrapperCircle}>
              <Image
                src="/circle.svg"
                alt="circle"
                className={styles.circle}
                layout="fill"
                rel="preload"
                priority={true}
              />
            </div>
            <div className={styles.headPositioner}>
              <div className={styles.wrapperHead}>
                <Image
                  src="/smallHead.svg"
                  alt="head"
                  className={styles.head}
                  layout="fill"
                  rel="preload"
                  priority={true}
                />
              </div>
            </div>
            <div className={styles.rotor}>
              <svg viewBox="0 0 500 500">
                <defs>
                  <path
                    d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                    id="textcircle"
                  ></path>
                </defs>
                <text
                  dy="0"
                  textLength="1200"
                  fontSize="3em"
                  fill="#fff"
                  fontWeight={600}
                >
                  <textPath href="#textcircle">
                    Stay alert. {time.days}days : {time.hours}hours :{" "}
                    {time.minutes}
                    minutes : left
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
