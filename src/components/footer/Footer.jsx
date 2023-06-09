import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Seahorse. All rights reserved.</div>
      <div className={styles.social}>
        <Image className={styles.socialIcon} src="/1.png" width={15} height={15} alt="Facebook Logo"/>
        <Image className={styles.socialIcon} src="/2.png" width={15} height={15} alt="Instagram Logo"/>
        <Image className={styles.socialIcon} src="/3.png" width={15} height={15} alt="Twitter Logo"/>
        <Image className={styles.socialIcon} src="/4.png" width={15} height={15} alt="YouTube Logo"/>
      </div>
    </div>
  );
};

export default Footer;
