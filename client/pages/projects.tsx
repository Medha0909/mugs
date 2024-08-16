import React from "react";
import styles from "../styles/projects.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import img4 from "../public/Web Designs (1).jpg";
import img5 from "../public/Web Designs.jpg";
import img7 from "../public/Web Designs (2).jpg";
import img6 from "../public/Web Designs (3).jpg";
import img9 from "../public/Web Designs (4).jpg";
import img8 from "../public/Web Designs (5).jpg";

function projects() {
  return (
    <div>
      <div className={styles.pro}>
        <span className={styles.s1a}>My Projects</span>
        <br></br>
        <span className={styles.s2a}>
          Lorem ipsum dolor sit amet consectetur.Mollis erat duis aliquam mauris
          est risus lectus. Phasellus consequat urna tellus
        </span>
        <br></br>
        <div className={styles.m1}>
          <div className={styles.ma}>
            <span className={styles.m1a}>All</span>
          </div>
          <div className={styles.m2}>
            <span className={styles.m2a}>UI/UX</span>
          </div>
          <div className={styles.m3}>
            <span className={styles.m3a}>Web&nbsp;Design</span>
          </div>
          <div className={styles.m4}>
            <span className={styles.m4a}>App&nbsp;Design</span>
          </div>
          <div className={styles.m5}>
            <span className={styles.m4a}>Graphic&nbsp;Design</span>
          </div>
        </div>
        <div className={styles.g1}>
          <div className={styles.g1a}>
            <Image className={styles.img10} src={img4} alt="Image10"></Image>
            <Image className={styles.img9} src={img5} alt="Image9"></Image>
            <span className={styles.g1a1}>Web Design </span>
            <br></br>
            <span className={styles.g1a2}>AirCalling Landing Page Design </span>
          </div>
        </div>
        <div className={styles.h1}>
          <div className={styles.h1a}>
            <Image className={styles.img11} src={img6} alt="Image11"></Image>
            <Image className={styles.img12} src={img7} alt="Image12"></Image>
            <span className={styles.h1a1}>Web Design </span>
            <br></br>
            <span className={styles.h1a2}>Business Landing Page Design </span>
          </div>
        </div>
        <div className={styles.i1}>
          <div className={styles.i1a}>
            <Image className={styles.img13} src={img8} alt="Image13"></Image>
            <Image className={styles.img14} src={img9} alt="Image14"></Image>
            <span className={styles.i1a1}>Web Design </span>
            <br></br>
            <span className={styles.i1a2}>Ecom Web Page Design </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;
