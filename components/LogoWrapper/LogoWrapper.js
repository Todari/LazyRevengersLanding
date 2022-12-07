import Image from "next/image";
import styles from "@/styles/LogoWrapper.module.scss";
const LogoWrapper = () => {
  return (
    <div className={styles.logoWrapper}>
      <Image
        src="/Logo_green.svg"
        alt="logo"
        layout="fill"
        priority={true}
        quality={90}
      />
    </div>
  );
};

export default LogoWrapper;
