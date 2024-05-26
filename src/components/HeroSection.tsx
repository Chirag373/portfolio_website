import styles from "../styles/hero.module.css";
import React from "react";

const HeroComponent = () => {
    return (
        <React.Fragment>
            <div className={styles.mainContainer}>
                <div className={styles.leftHeroSection}>
                    <h2>Hey, It&apos;s Chirag Oza</h2>
                    <h2>A Full Stack Developer</h2>
                </div>
                <div className={styles.RightHeroSection}>

                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroComponent;