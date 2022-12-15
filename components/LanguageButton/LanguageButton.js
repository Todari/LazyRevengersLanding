import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "@/styles/languageButton.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRef, useState } from "react";

const LanguageButton = () => {
  const languages = [
    { name: "English", loc: "en" },
    { name: "한국어", loc: "ko" },
    { name: "日本語", loc: "en" },
  ];
  const { locale } = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const selectd = languages.find((el) => el.loc === locale);
  const [selectedLang, setSelectedLang] = useState(selectd);
  const router = useRouter();
  let ref = useRef(null);
  useClickOutside(ref, () => setIsOpenMenu(false));
  const toggleMenuHandler = () => setIsOpenMenu((curr) => !curr);

  const selectLang = (id) => {
    setSelectedLang(languages[id]);
    setIsOpenMenu(false);
  };

  useEffect(() => {
    const x = languages.find((el) => el.loc === locale);
    setSelectedLang(x);
  }, [locale]);

  return (
    <div className={styles.language_btn} ref={ref}>
      <div className={styles.wrapper}>
        <button
          onClick={toggleMenuHandler}
          // className={isOpenMenu ? "green" : null}
          // className={isOpenMenu ? styles.langBtnActive : styles.langBtn}
          className={isOpenMenu ? styles.langBtnActive : styles.langBtn}
        >
          <Image
            src="/icons/language.svg"
            alt="language"
            layout="fill"
            priority={true}
            rel="preload"
          />
        </button>
      </div>
      <div
        className={`${styles.language_selector_wrapper} ${
          isOpenMenu ? `${styles.l_active}` : `${styles.l_hidden}`
        }`}
      >
        {languages.map((l, idx) => (
          <Link key={idx} href="/" locale={l.loc}>
            <a
              onClick={() => selectLang(idx)}
              className={`${
                l.name === selectedLang.name
                  ? `${styles.col_purple}`
                  : `${styles.col_black}`
              }`}
            >
              {l.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageButton;
