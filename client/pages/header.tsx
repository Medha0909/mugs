import Navbar from "@/Components/Navbar";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import pic from "../public/Group 2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

function Header() {
  return (
    <div>
      <Navbar />
      <div className={styles.hero1}>
        <div className={styles.t1}>Hi I am</div>
        <div className={styles.t2}>Muhammad Umair</div>
        <div className={styles.t3}>UI & UX </div>
        <div className={styles.t4}>Designer </div>
      </div>
      <div className={styles.p1}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra
      </div>
      <button className={styles.btn1}>
        <span className={styles.btn1text}>Hire Me</span>
      </button>
      <div className={styles.pic}>
        <Image src={pic} alt="pic..." />
        <div className={styles.strap}></div>
      </div>
      <div className={styles.icons1}>
        <FaFacebook className={styles.facebook} />
        <FaTwitter className={styles.twitter} />
        <FaInstagram className={styles.instagram} />
        <FaLinkedin className={styles.linkedin} />
      </div>
    </div>
  );
}

export default Header;
