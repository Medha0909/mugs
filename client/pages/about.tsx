import React from "react";
import Image from "next/image";
import styles from "../styles/about.module.css";
import pic from "../public/Group 7.jpg";
import sl2 from "../public/Rectangle 5.jpg";
import sl2a from "../public/Rectangle 6.jpg";
import sl2b from "../public/Ellipse 9.jpg";
import slider1 from "../public/Group 8.jpg";

function about() {
  return (
    <div>
      <div className={styles.about}>
        <Image src={pic} alt="..." />
        <div className={styles.strap}></div>
      </div>
      <span className={styles.abt}>About Me</span>
      <span className={styles.abt1}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra
      </span>
      <div className={styles.abt2}>
        <span className={styles.ux}>UX</span>
        <Image src={slider1} className={styles.slider1} alt="..."></Image>

        <span className={styles.web}>Website Design</span>
        <div className={styles.aa}>
          <Image className={styles.sl} src={sl2} alt="..."></Image>
          <Image className={styles.sl2a} src={sl2a} alt="..."></Image>
          <Image className={styles.sl2b} src={sl2b} alt="..."></Image>
        </div>

        <span className={styles.app}>App Design</span>
        <div className={styles.ab}>
          <Image className={styles.sl} src={sl2} alt="..."></Image>
          <Image className={styles.sbl2a} src={sl2a} alt="..."></Image>
          <Image className={styles.sbl2b} src={sl2b} alt="..."></Image>
        </div>

        <span className={styles.grap}>Graphic Design</span>
        <Image src={slider1} className={styles.slider4} alt="..."></Image>
      </div>
    </div>
  );
}

export default about;
