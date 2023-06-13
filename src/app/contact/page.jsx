import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

export const metadata = {
  title: "MySite Contact",
  description: "This is contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact ilustration"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
