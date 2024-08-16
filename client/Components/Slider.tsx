import React from 'react'
import styles from "../styles/Slider.module.css";
import Image from "next/image";
import pic from "../public/Ellipse 10.jpg";
import pica from "../public/ab (1).jpg";
import picb from "../public/ab (2).jpg";
import { Carousel } from "flowbite-react";

function Slider() {
  return (
    <div>
              <Carousel className={styles.caro1} slideInterval={3000}>
          <div>
            <div className={styles.pic}>
              <Image src={pic} alt="..."></Image>
              <span className={styles.pict1}>“</span>
              <span className={styles.pict}>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
              </span>
              <span className={styles.pict2}>"</span>
              <span className={styles.pict3}>Name</span>
              <span className={styles.pict4}>CEO</span>
            </div>
          </div>
          <div>
            <div className={styles.pic}>
              <Image src={pica} alt="..."></Image>
              <span className={styles.pict1}>“</span>
              <span className={styles.pict}>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
              </span>
              <span className={styles.pict2}>"</span>
              <span className={styles.pict3}>Name</span>
              <span className={styles.pict4}>CEO</span>
            </div>
          </div>

          <div>
            {" "}
            <div className={styles.pic}>
              <Image src={picb} alt="..."></Image>
              <span className={styles.pict1}>“</span>
              <span className={styles.pict}>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
              </span>
              <span className={styles.pict2}>"</span>
              <span className={styles.pict3}>Name</span>
              <span className={styles.pict4}>CEO</span>
            </div>
          </div>
        </Carousel>

    </div>
  )
}

export default Slider
