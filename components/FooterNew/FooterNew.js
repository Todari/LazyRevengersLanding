import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import FooterIcon from "../FooterIcon/FooterIcon";
import { links, btns } from "@/consts/footer";

import { useRouter } from "next/router";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useExtraProgress } from "@/hooks/useCustomProgress";
import TimelineArrow from "../TimelineArrow/TimelineArrow";
const FooterNew = () => {
  const { locale } = useRouter();
  const { progress } = useExtraProgress();
  const selectd = btns.find((el) => el.loc === locale);

  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [isUserClickedOutside, setIsUserClickedOutside] = useState(false);
  const [selectedLang, setSelectedLang] = useState(selectd);

  const linksRef = useRef(null);

  const toggleFooter = () => {
    setIsFooterOpen((curr) => !curr);
  };
  const closeFooter = () => {
    setIsUserClickedOutside(true);
    setIsFooterOpen(false);
  };
  useClickOutside(linksRef, () => closeFooter());
  useEffect(() => {
    if (progress >= 99 && !isFooterOpen && !isUserClickedOutside) {
      setIsFooterOpen(true);
    } else if (progress < 99 && isFooterOpen) {
      setIsFooterOpen(false);
      setIsUserClickedOutside(false);
    } else if (progress < 99 && !isFooterOpen && isUserClickedOutside) {
      setIsUserClickedOutside(false);
    }
  }, [isFooterOpen, progress, isUserClickedOutside]);

  const selectLang = (id) => {
    closeFooter();
    setSelectedLang(btns[id]);
  };

  useEffect(() => {
    const x = btns.find((el) => el.loc === locale);
    setSelectedLang(x);
  }, [locale]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.timeline} onClick={toggleFooter}>
          <TimelineArrow />
        </div>
        <div
          className={isFooterOpen ? styles.fadeShow : styles.fadeHidden}
        ></div>
        <div
          className={
            isFooterOpen ? styles.headContainerShow : styles.headContainerHidden
          }
        >
          <div className={styles.head}>
            <Image src="/bottom_head.webp" layout="fill" alt="footer" />
          </div>
          <div ref={linksRef} className={styles.links}>
            <div className={styles.languages}>
              {btns.map((l, idx) => (
                <Link key={idx} href="/" locale={l.loc}>
                  <a
                    onClick={() => selectLang(idx)}
                    className={`${
                      l.title === selectedLang.title
                        ? `${styles.col_green}`
                        : `${styles.col_black}`
                    }`}
                  >
                    {l.title}
                  </a>
                </Link>
              ))}
            </div>
            <div className={styles.icons}>
              {links.map(({ url, title, src }) => (
                <div key={title}>
                  <FooterIcon alt={title} src={src} link={url} />
                </div>
              ))}
            </div>
            <div className={styles.policy}>
              <Link href="/terms_and_conditions">
                <a>Terms & Conditions</a>
              </Link>
              <Link href="/policy">
                <a>Policy & Ethos</a>
              </Link>
            </div>
          </div>
          <div className={styles.gradient}></div>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
