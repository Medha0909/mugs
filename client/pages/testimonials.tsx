import React from "react";
import Slider from "@/Components/Slider";
import styles from "../styles/testimonials.module.css";

function testimonials() {
  return (
    <div id="testimonals">
      <div className={styles.te1}>
        <div className={styles.te2}>
          <span className={styles.tes}>Testimonials</span>
          <span className={styles.tes1}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </span>
        </div>
        <Slider />
      </div>

      <div className={styles.j1}>
        <div className={styles.j1a}>
          <span className={styles.j1a1}>Lets Design Together</span>
          <br></br>
          <span className={styles.j1a2}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus
          </span>{" "}
          <br></br>
          <span className={styles.j1a3}>
            netus in. Aliquet donec morbi convallis pretium{" "}
          </span>
        </div>
        <div className={styles.k1}>
          <div className={styles.k1a}>
            <span className={styles.k1a1}>Enter Your Email</span>
          </div>
          <div className={styles.l1}>
            <span className={styles.l1a1}>Contact Me </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testimonials;
