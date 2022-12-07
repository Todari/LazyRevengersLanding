import { text } from "@/consts/text";
import styles from "@/styles/Team.module.scss";

import { team, teamIphone } from "./team";
import TeamRow from "../TeamRow/TeamRow";
import { hashtags } from "./hashtags";
import { useWindowSize } from "@/hooks/useWindowSize";

const TeamBlock = () => {
  const { width, height } = useWindowSize();
  if (width > height && height < 480) {
    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1>{text.en.team.heading.h1}</h1>
        </div>
        <div className={styles.cardsWrapper}>
          <div className={styles.cardsContainer1}>
            <TeamRow team={teamIphone} />
          </div>
          <div className={styles.cardsContainer2}>
            <TeamRow team={teamIphone} />
          </div>
        </div>

        <div className={styles.hashtagsWrapper}>
          <span className={styles.hashtagsP1}>
            {hashtags.map((tag, id) => (
              <p key={id}>{tag}</p>
            ))}
          </span>
          <span className={styles.hashtagsP2}>
            {hashtags.map((tag, id) => (
              <p key={id}>{tag}</p>
            ))}
          </span>
        </div>
      </div>
    );
  } else if (width < height && width < 481) {
    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1>{text.en.team.heading.h1}</h1>
        </div>
        <div className={styles.cardsWrapper}>
          <div className={styles.cardsContainer1_1}>
            <TeamRow team={teamIphone} />
          </div>
          <div className={styles.cardsContainer2_2}>
            <TeamRow team={teamIphone} />
          </div>
        </div>
        <div className={styles.hashtagsWrapper}>
          <span className={styles.hashtagsP1}>
            {hashtags.map((tag, id) => (
              <p key={id}>{tag}</p>
            ))}
          </span>
          <span className={styles.hashtagsP2}>
            {hashtags.map((tag, id) => (
              <p key={id}>{tag}</p>
            ))}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1>{text.en.team.heading.h1}</h1>
        </div>
        <div className={styles.cardsWrapper}>
          <div className={styles.cardsContainer1_1}>
            <TeamRow team={team} />
          </div>
          <div className={styles.cardsContainer2_2}>
            <TeamRow team={team} />
          </div>
        </div>
        <div className={styles.hashtagsWrapper}>
          <span className={styles.hashtagsP1}>
            {hashtags.map((tag, id) => (
              <p key={id}>{tag}</p>
            ))}
          </span>
          <span className={styles.hashtagsP2}>
            {hashtags.map((tag, id) => (
              <p key={id}>{tag}</p>
            ))}
          </span>
        </div>
      </div>
    );
  }
};

export default TeamBlock;
