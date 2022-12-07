import Image from "next/image";
import styles from "@/styles/Team.module.scss";

const TeamCard = ({ img, title, role, twitter_link, id }) => {
  return (
    <div className={styles.card} key={id}>
      <Image
        src={`/team/${img}.png`}
        alt="sloth"
        width={260}
        height={360}
        priority={true}
        quality={70}
        // sizes="(max-height: 480px) 60px, (max-width: 480px) 60px, "
      />
      <div className={styles.cardInfo}>
        <h1>{title}</h1>
        <div className={styles.cardSocial}>
          <div className={styles.humanPost}>
            <p>{role}</p>
          </div>
          <div className={styles.humanSocials}>
            <a
              href={`https:/twitter.com/${twitter_link}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/twitter_dark.svg"
                alt="twitter"
                width={26}
                height={26}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
