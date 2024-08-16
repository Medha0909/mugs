import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import img10 from "../public/logo.jpg";
import img11 from "../public/Vector.jpg";
import img12 from "../public/Vector (1).jpg";
import { FaInstagram } from "react-icons/fa";
import img13 from "../public/Vector (2).jpg";
import styles from "../styles/footer.module.css";

export default function footer() {
  return (
    <div id="footer">
      <div className={styles.p1}>
        <div className={styles.p1a}>
          <Image className={styles.img15} src={img10} alt="img15"></Image>
          <div className={styles.q1}>
            <div className={styles.q1a}>
              <span className={styles.q1a1}>Home</span>
            </div>
            <div className={styles.r1}>
              <span className={styles.r1a}>About Me</span>
            </div>
            <div className={styles.t1}>
              <span className={styles.t1a}>Services</span>
            </div>
            <div className={styles.u1}>
              <span className={styles.u1a}>Projects</span>
            </div>
            <div className={styles.v1}>
              <span className={styles.v1a}>Testimonials</span>
            </div>
            <div className={styles.x1}>
              <span className={styles.x1a}>Contact</span>
            </div>
          </div>
          <div className={styles.a1}>
            <div className={styles.a1a}>
              <Image className={styles.img16} src={img11} alt="img16"></Image>
            </div>
            <div className={styles.a1a1}>
              <Image className={styles.img17} src={img12} alt="img17"></Image>
            </div>
            <FaInstagram className={styles.a1a2} />
            <div className={styles.a1a3}>
              <Image className={styles.img18} src={img13} alt="img18"></Image>
            </div>
          </div>
          <div className={styles.b1}>
            <span className={styles.b1a}>
              © 2023 <span className={styles.b1a1}>Mumair</span> All Rights
              Reserved , Inc.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
