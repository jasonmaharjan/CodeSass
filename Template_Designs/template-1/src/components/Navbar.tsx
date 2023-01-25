import React from "react";
import Button from "./Button";

import styles from "../styles/component.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Banko</h1>

      <section>
        <span>Home</span>

        <span>Features</span>

        <span>About us</span>

        <span>Contact</span>
      </section>

      <section className={styles.buttonGroup}>
        <Button name="Sign In" size="sm" />
        <Button name="Sign In" size="sm" inverted />
      </section>
    </div>
  );
};

export default Navbar;
