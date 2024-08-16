import React from 'react'
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from "../public/logo.jpg";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}> 
      <a href=""><Image src={logo} alt="logo" /></a>
      </div>
      <div className={styles.links}>
      <div className={styles.f1}>
        <a href="#"  style={{textDecoration:"none"}}><span className={styles.f1text}>
        Home
      </span></a>
      <div className={styles.f2}>
        <a href="#about"  style={{textDecoration:"none"}}>
      <span className={styles.f1text}>
        About Me
      </span>
      </a>
      </div>
      <div className={styles.f3}>
        <a href="#" style={{textDecoration:"none"}}>
      <span className={styles.f1text}>
        Services
      </span>
      </a>
      </div>
      <div className={styles.f4}>
        <a href="#"  style={{textDecoration:"none"}}>
      <span className={styles.f1text}>
        Projects
      </span>
      </a>
      </div>
      <div className={styles.f5}>
        <a href="#"  style={{textDecoration:"none"}}>
      <span className={styles.f1text}>
        Testimonials
      </span>
      </a>
      </div>
      <div className={styles.f6}>
        <a href="#"  style={{textDecoration:"none"}}>
      <span className={styles.f1text}>
        Contact
      </span>
      </a>
      </div>
      </div>
      <button className={styles.btn}>
      <span className={styles.btntext}>Download CV</span>
      </button>
      </div>
    </div>
  )
}

export default Navbar
