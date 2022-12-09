import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/navbar.module.scss";

import { btns } from "@/consts/footer";
import { useRouter } from "next/router";
import { useClickOutside } from "@/hooks/useClickOutside";

import LanguageButton from "../LanguageButton/LanguageButton";
import { useCustomProgress } from "@/hooks/useCustomProgress";

const NavbarNew = ({ intro, nft, app, roadmap, partners, team, faq }) => {
  const { locale } = useRouter();
  const { progress } = useCustomProgress();
  // var prevProgress = 0;
  const [isDown, setIsDown] = useState(false);
  const [prevProgress, setPrevProgress] = useState(0);
  useEffect(() => {
    if (progress > prevProgress) {
      setIsDown(true);
    }
    if (progress < prevProgress) {
      setIsDown(false);
    }
    setPrevProgress(progress);

    console.log(isDown, "prev", prevProgress, "now", progress)
  });

  const selectd = btns.find((el) => el.loc === locale);

  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(selectd);
  const linksRef = useRef(null);

  // const openNavbar = () => {
  //   setIsNavbarOpen(true);
  // };

  // const closeNavbar = () => setIsNavbarOpen(false);
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    // closeNavbar();
    setIsDown(true);
  };

  // useClickOutside(linksRef, () => closeNavbar());
  useEffect(() => {
    const x = btns.find((el) => el.loc === locale);
    setSelectedLang(x);
  }, [locale]);




  return (
    <div className={isDown ? styles.containerHidden : styles.containerShown}>
      <div className={styles.logowraper}>

      </div>
      <div className={styles.links} ref={linksRef}>
        <div className={styles.nav_bnts_container}>
          <button onClick={() => scrollTo(intro)}>INTRO</button>
          <button onClick={() => scrollTo(nft)}>NFT</button>
          <button onClick={() => scrollTo(app)}>APP</button>
          <button onClick={() => scrollTo(roadmap)}>ROADMAP</button>
          <button onClick={() => scrollTo(partners)}>PARTNERS</button>
          {/* <button onClick={() => scrollTo(team)}>TEAM</button> */}
          <button onClick={() => scrollTo(faq)}>FAQ</button>
        </div>
      </div>

      <div className={styles.langWrapper}>
        <LanguageButton />
      </div>
    </div>
      // {/* <div className={styles.container}>
      //   <div className={styles.timeline}>
      //     <div className={styles.langWrapper}>
      //       <LanguageButton />
      //     </div>
      //     <button
      //       onClick={openNavbar}
      //       className={styles.menuButton}
      //       aria-label="menu"
      //     >
      //       <span></span>
      //       <span></span>
      //       <span></span>
      //     </button>
      //   </div>
      //   <div
      //     className={isNavbarOpen ? styles.fadeShow : styles.fadeHidden}
      //   ></div>
      //   <div
      //     className={
      //       isNavbarOpen ? styles.headContainerShow : styles.headContainerHidden
      //     }
      //   >
      //     <div className={styles.head}>
      //       <Image
      //         src="/header_new.svg"
      //         layout="fill"
      //         alt="header"
      //         priority={true}
      //         quality={85}
      //       />
      //     </div>
      //     <div className={styles.links} ref={linksRef}>
      //       <div className={styles.nav_bnts_container}>
      //         <button onClick={() => scrollTo(intro)}>INTRO</button>
      //         <button onClick={() => scrollTo(nft)}>NFT</button>
      //         <button onClick={() => scrollTo(app)}>APP</button>
      //         <button onClick={() => scrollTo(roadmap)}>ROADMAP</button>
      //         <button onClick={() => scrollTo(partners)}>PARTNERS</button>
      //         <button onClick={() => scrollTo(team)}>TEAM</button>
      //         <button onClick={() => scrollTo(faq)}>FAQ</button>
      //       </div>
      //     </div>
      //   </div>
      // </div> */}
  );
};

export default NavbarNew;
