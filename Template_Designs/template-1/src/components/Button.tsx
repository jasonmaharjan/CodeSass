import React from "react";
import styles from "../styles/component.module.scss";

interface ButtonProps {
  name: string;
  size: "sm" | "md" | "lg";
  inverted?: boolean;
}

type ButtonType = (props: ButtonProps) => React.ReactElement;

const Button: ButtonType = ({ name, size, inverted }) => {
  return (
    <button
      className={!inverted ? styles.btn : styles["btn--inverted"]}
      style={
        size === "sm"
          ? { width: "5rem" }
          : size === "md"
          ? { width: "10rem" }
          : { width: "12rem" }
      }
    >
      {name}
    </button>
  );
};

export default Button;
