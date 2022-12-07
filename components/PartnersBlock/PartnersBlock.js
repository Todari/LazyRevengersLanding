import styles from "@/styles/Partners.module.scss";
import LogoWrapper from "../LogoWrapper/LogoWrapper";

const PartnersBlock = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.logo}>
        <img src="/logo/green.svg" alt="" />
      </div> */}
      {/* <LogoWrapper /> */}
      <div className={styles.titleWrapper}>
        <h2>Partners</h2>
      </div>
      <div className={styles.comingSoon}>
        <h1>COMING SOON</h1>
      </div>
    </div>
  );
};

export default PartnersBlock;
