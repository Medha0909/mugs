import React from "react";
import styles from "../styles/services.module.css";
import Cards from "@/Components/Cards";

function services() {
  return (
    <div>
      <div className={styles.sr1}>
        <div className={styles.sr2}>
          <span className={styles.srt2}>Services</span>
          <span className={styles.srt3}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </span>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default services;
