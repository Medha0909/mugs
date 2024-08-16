import React from 'react'
import Image from 'next/image';
import styles from '../styles/services.module.css';
import c1 from "../public/Group 19.jpg";
import c2 from "../public/Layer_1.jpg";
import c3 from "../public/Group 18.jpg";
import c4 from "../public/Group 21.jpg";

function Cards() {
  return (
    <div>
      <div className={styles.srt4}>
      <div className={styles.srt4a}>
      <Image className={styles.c1} src={c1} alt="..."></Image>
      <span className={styles.ct1}>UI/UX</span>
      <span className={styles.cp1}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</span>
      </div>
      <div className={styles.srt4b}>
      <Image  className={styles.c1} src={c2} alt="..."></Image>
      <span className={styles.ct2}>Web Design</span>
      <span className={styles.cp1}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</span>

      </div>
      <div className={styles.srt4c}>
      <Image  className={styles.c1} src={c3} alt="..."></Image>
      <span className={styles.ct2}>App Design</span>
      <span className={styles.cp1}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</span>

      </div>
      <div className={styles.srt4d}>
      <Image  className={styles.c1} src={c4} alt="..."></Image>
      <span className={styles.ct4}>Graphic Design</span>
      <span className={styles.cp1}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</span>

      </div>
    </div>
    </div>
  )
}

export default Cards
