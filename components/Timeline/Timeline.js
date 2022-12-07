import styles from "@/styles/Timeline.module.scss";
import { useEffect, useState } from "react";

const Timeline = ({ progress, reference }) => {
  const refArray = [
    { finished: false, progress: 0 },
    { finished: false, progress: 0 },
    { finished: false, progress: 0 },
    { finished: false, progress: 0 },
  ];

  const [timeline, setTimeline] = useState(refArray);
  useEffect(() => {
    if (progress < 8) {
      if (timeline[0].progress) {
        setTimeline([...refArray]);
      }
    } else if (progress > 8 && progress < 165) {
      const result = progress / 1.6;

      const arr = timeline;
      const fixd = Math.ceil(result);
      if (result < 5) {
        arr[0].progress = 0;
        arr[0].finished = false;
      } else {
        if (!arr[0].finished) arr[0].finished = true;
        arr[0].progress = fixd;
      }
      if (arr[0].progress > 100) {
        arr[1].finished = true;
      } else if (arr[0].progress < 100 && arr[1].finished) {
        arr[1].finished = false;
      }
      setTimeline([...arr]);
    } else if (progress > 165 && progress < 315) {
      const result = (progress - 165) / 1.4;

      const arr = timeline;
      const fixd = Math.ceil(result);

      if (result < 5) {
        arr[1].progress = 0;
      } else arr[1].progress = fixd;

      if (arr[1].progress > 100) {
        arr[2].finished = true;
      } else if (arr[1].progress < 100 && arr[2].finished) {
        arr[2].finished = false;
      }
      setTimeline([...arr]);
    }

    if (progress > 315) {
      const result = (progress - 315) / 2;

      const arr = timeline;
      const fixd = Math.ceil(result);

      if (result < 5) {
        arr[2].progress = 0;
      } else arr[2].progress = fixd;

      if (arr[2].progress > 90) {
        arr[3].finished = true;
      } else if (arr[2].progress < 100 && arr[3].finished) {
        arr[3].finished = false;
      }
      setTimeline([...arr]);
    }
  }, [progress]);

  return (
    <div className={styles.timelineContainer} ref={reference}>
      <div className={styles.timelineWrapper}>
        {timeline.map((rf, id) => {
          return (
            <div key={id} className={styles.tlCircleWrapper}>
              <div
                className={styles.circle}
                style={
                  rf.finished
                    ? {
                        width: 12,
                        height: 12,
                        backgroundColor: "#fff",
                      }
                    : {}
                }
              ></div>
              <div className={styles.progress}>
                <div
                  className={styles.filler}
                  style={{ height: `${rf.progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
