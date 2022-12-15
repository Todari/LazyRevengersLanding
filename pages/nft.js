import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "@/styles/NftIntroduction.module.scss";
import { useRef, useState } from "react";

const NFTIntroduction = () => {
  const [isSceneLocked, setIsSceneLocked] = useState(false);

  const containerRef = useRef(null);

  const blockSroll = () => {
    const body = document.getElementsByTagName("body")[0];
    containerRef.current.scrollIntoView({ behavior: "smooth" });
    body.style = "overflow: hidden";
    setIsSceneLocked(true);
  };
  const unlockScroll = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style = "overflow: auto";
    setIsSceneLocked(false);
  };
  useClickOutside(containerRef, () => unlockScroll());
  return (
    <div className={styles.nft_container} ref={containerRef}>
      <div
        onClick={blockSroll}
        className={
          isSceneLocked
            ? styles.hidden
            : [styles.visible, styles.enterScene].join(" ")
        }
      ></div>
      <button
        onClick={unlockScroll}
        className={
          !isSceneLocked
            ? styles.hidden
            : [styles.visible, styles.exitScene].join(" ")
        }
      >
        Exit scene
      </button>
      <iframe
        title="cybercity"
        className={styles.nft_iframe}
        frameBorder="0"
        src="/cybercity/index.html"
      />
    </div>
  );
};

export default NFTIntroduction;