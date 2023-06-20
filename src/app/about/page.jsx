import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Tech Insights for Curious Minds</h1>
          <h2 className={styles.imgDesc}>
            Fueling Your Quest for Knowledge and Growth
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          We are a passionate community of tech enthusiasts, innovators, and thought leaders. At BlogMuse, we believe in the transformative power of technology to shape the world we live in. Our mission is to provide a platform that connects individuals from all walks of life, fostering a vibrant ecosystem of knowledge sharing, inspiration, and collaboration.
            <br />
            <br />
            Together, we explore the cutting-edge trends, delve into insightful discussions, and empower each other to turn ideas into reality. Join us on this exciting journey as we unlock the endless possibilities of the digital age.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          At BlogMuse, we are passionate about bringing you the latest insights and trends in the world of technology. Our platform serves as a hub for tech enthusiasts and professionals to discover, learn, and connect. From thought-provoking articles to informative guides, we curate high-quality content that covers groundbreaking innovations, industry trends, and thought leadership. Additionally, our upcoming portfolio section provides a platform for users to showcase their work and inspire others in the community. Join us on this exciting journey as we explore the ever-evolving world of technology together.
            <br />
            <br /> 
            <br />
            <br />
            <br />
            <br /> 
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
