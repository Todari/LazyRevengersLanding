import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Footer.module.scss";

const FooterIcon = ({ link, src, alt }) => {
  return (
    <div className={styles.iconWrapper}>
      <Link href={link}>
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            src={`/icons/${src}`}
            alt={alt}
            width={40}
            height={40}
            priority={true}
            rel="preload"
          />
        </a>
      </Link>
    </div>
  );
};

export default FooterIcon;
