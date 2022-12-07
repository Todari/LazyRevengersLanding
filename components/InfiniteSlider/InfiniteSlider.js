import styles from "@/styles/InfiniteSlider.module.scss";
import Image from "next/image";
import TeamCard from "../TeamCard/TeamCard";

const images = [
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
  "/team/Sloth1.png",
];

const InfiniteSlider = ({ team }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide__track}>
        {team.map(({ id, role, img, title, twitter_link }) => (
          <div key={id} className={styles.slide}>
            <div className={styles.slide__wrapper}>
              {/* <Image alt="img" src={path} layout="fill" priority={true} /> */}

              <TeamCard
                img={img}
                title={title}
                role={role}
                twitter_link={twitter_link}
                key={id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
