import styles from "../styles/navbar.module.css";
import React from "react";

const NavbarComponent = () => {
    return (
        <React.Fragment>
            <div className={styles.mainContainer}>
                <h1>CHIRAG OZA</h1>
                <div className={styles.menuList}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Education</li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>SocialLinks</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavbarComponent;